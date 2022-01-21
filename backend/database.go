package main

import (
	"crypto/sha512"
	"database/sql"
	"encoding/base64"
	"log"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/google/uuid"
	_ "github.com/mattn/go-sqlite3"
)

// PostsDB Contains lock and database object
type PostsDB struct {
	mu sync.Mutex
	db *sql.DB
}

// Post is template for post as should be written to the DB
type Post struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Body        string `json:"body"`
	Mediafolder string `json:"mediafolder"`
	Timestamp   int    `json:"timestamp"`
	IsBlog		int	   `json:"isBlog"`
}

// UsersDB contains lock and database object
type UsersDB struct {
	mu sync.Mutex
	db *sql.DB
}

// Session contains user session credentials
type Session struct {
	User       string `json:"username"`
	SessionKey string `json:"session_key"`
	Timeout    int    `json:"timeout"`
}

/*
	Users Functions
*/

func dbGetSalt(lock *UsersDB, main chan string, username string) {
	// Prep
	lock.mu.Lock()
	defer lock.mu.Unlock()
	var salt string
	// Exec
	err := lock.db.QueryRow(`SELECT salt FROM user WHERE username = ?`,
		username).Scan(&salt)

	// Error handling
	if err != nil {
		log.Printf("getSaltByUser: Empty response for user: %s", username)
		main <- ""
		return
	}
	// Completion
	main <- salt
}

func dbLogin(lock *UsersDB, main chan bool, username string, password string) {
	saltChan := make(chan string)
	var dbPassword string

	go dbGetSalt(lock, saltChan, username)
	salt := <-saltChan
	if salt == "" {
		log.Printf("validateUser: No salt provided for %s", username)
		main <- false
		return
	}
	lock.mu.Lock()
	defer lock.mu.Unlock()

	// Exec
	err := lock.db.QueryRow(`SELECT password FROM user WHERE username = ?`,
		username).Scan(&dbPassword)
	if err != nil {
		log.Printf("validateUser: No results using username: %s", username)
		main <- false
		return
	}

	// Completion
	encrypted := encryptPassword(salt, password)
	if encrypted == dbPassword {
		log.Printf("Authenticated %s", username)
		main <- true
		return
	}
	log.Printf("validateUser: Invalid password for %s", username)
	main <- false
}

/*
	Session Functions
*/
func dbNewSession(lock *UsersDB, main chan string, username string) {
	// Prep
	lock.mu.Lock()
	if username == "" {
		log.Printf("createNewSession: No username provided")
		main <- " createNewSession: No username provided"
	}
	sessionKey := generateSalt()

	// Exec
	lock.db.Exec(`BEGIN TRANSACTION`)
	query := `INSERT INTO session(user, session_key, timeout) VALUES (?, ?, ?)`
	_, err := lock.db.Exec(query, username, sessionKey, newTimeout())
	lock.mu.Unlock()

	if err != nil {
		if strings.Contains(err.Error(), "UNIQUE constraint") {
			// Session already exists
			supervisor := make(chan Session)
			go dbRefreshSession(lock, supervisor, username)
			session := <-supervisor
			main <- session.SessionKey
			return
		}
		// Error handling
		log.Printf("createNewSession: Error after query: \n%s\n%s", query, err.Error())
		lock.db.Exec(`ROLLBACK`)
		main <- "Error when creating session: \n" + err.Error()
		return
	}

	// Completion
	lock.db.Exec(`COMMIT`)
	log.Printf("createNewSession: Created a session for %s", username)
	main <- sessionKey
}

func dbRefreshSession(lock *UsersDB, main chan Session, username string) {
	// Prep
	lock.mu.Lock()
	defer lock.mu.Unlock()
	var session Session

	// Exec
	lock.db.Exec(`BEGIN TRANSACTION`)
	_, err := lock.db.Exec(`UPDATE session SET session_key = ?, timeout = ? WHERE user == ?`,
		generateSalt(), newTimeout(), username)

	// Error Handling
	if err != nil {
		log.Printf("refreshSession: error updating session for %s\n%s", username, err.Error())
		lock.db.Query(`ROLLBACK`)
		main <- Session{}
		return
	}

	// Completion
	lock.db.Exec(`COMMIT`)
	lock.db.QueryRow(`SELECT * FROM session WHERE user = ?`, username).
		Scan(&session.User, &session.SessionKey, &session.Timeout)
	main <- session
}

func dbDeleteSession(lock *UsersDB, main chan string, username string) {
	// Prep
	lock.mu.Lock()
	defer lock.mu.Unlock()
	doesUserExist := 0
	lock.db.QueryRow(`SELECT COUNT(*) FROM session WHERE user=?`, username).Scan(&doesUserExist)
	if doesUserExist == 0 {
		log.Printf("deleteSession: No such user %s", username)
		main <- "No such user"
		return
	}

	// Exec
	lock.db.Exec(`BEGIN TRANSACTION`)
	lock.db.Exec(`DELETE FROM session WHERE user=?`, username)

	// Completion
	lock.db.Exec(`COMMIT`)
	log.Printf("deleteSession: Deleted %s's session", username)
	main <- "Deleted " + username + "'s session"
}

func dbGetAllSessions(lock *UsersDB, main chan []Session) {
	lock.mu.Lock()
	defer lock.mu.Unlock()

	rows, _ := lock.db.Query(`SELECT * FROM session ORDER BY timeout ASC`)
	defer rows.Close()

	sessions := []Session{}

	for rows.Next() {
		var username string
		var sessionKey string
		var timeout int

		err := rows.Scan(&username, &sessionKey, &timeout)
		sessions = append(sessions, Session{User: username, SessionKey: sessionKey, Timeout: timeout})

		if err != nil {
			log.Printf("getAllSessions: Error occurred!\n%s", err.Error())
			main <- []Session{}
			return
		}
	}

	main <- sessions
}

func dbGetSession(lock *UsersDB, main chan Session, username string) {
	// Prep
	lock.mu.Lock()
	defer lock.mu.Unlock()
	var session Session

	// Exec
	err := lock.db.QueryRow(`SELECT * FROM session WHERE user = ?`,
		username).Scan(&session.User, &session.SessionKey, &session.Timeout)

	// Error Handling
	if err != nil {
		log.Printf("getSessionByUser: No session found for user %s", username)
		main <- Session{}
		return
	}
	// Complete
	main <- session
}


/*
	Posts Functions
*/
func dbGetAllPosts(lock *PostsDB, main chan []Post){
	rows, _ := lock.db.Query(`SELECT * FROM post`)
	defer rows.Close()

	posts := []Post{}

	for rows.Next() {
		var id int
		var title string
		var body string
		var mediafolder string
		var timestamp int
		var isBlog int

		err := rows.Scan(&id, &title, &body, &mediafolder, &timestamp, &isBlog)
		posts = append(posts, Post{ID: id, Title: title, Body: body, Mediafolder: mediafolder, Timestamp: timestamp, IsBlog: isBlog})

		if err != nil {
			log.Printf("getAllPosts: Error occurred\n%s", err.Error())
			main <- []Post{}
			return
		}
	}

	main <- posts
}

func dbCreatePost(lock *PostsDB, main chan string, data ProtectedPost, isBlog int) {
	// Prep
	lock.mu.Lock()
	defer lock.mu.Unlock()
	if data.Title == "" || data.Mediafolder == "" {
		log.Printf("createPost: Empty datapackage provided for post %s", data.Title)
		main <- "Empty datapackage has been provided"
		return
	}
	timestamp := time.Now().UTC().Format("20060102150405")

	// Exec
	lock.db.Exec(`BEGIN TRANSACTION`)
	query := `INSERT INTO post(title, body, mediafolder, timestamp, is_blog) VALUES (?, ?, ?, ?, ?)`
	_, err := lock.db.Exec(query, data.Title, data.Body, data.Mediafolder, timestamp, isBlog)

	// Error Handling
	if err != nil {
		lock.db.Exec(`ROLLBACK`)
		log.Printf("createPost: Error creating post %s\n%s", data.Title, err.Error())
		main <- "Error creating post\n" + err.Error()
		return
	}

	// Completion
	lock.db.Exec(`COMMIT`)
	log.Printf("createPost: Added post %d '%s'", data.ID, data.Title)
	main <- "Added post '" + data.Title + "'"
}

func dbGetPost(lock *PostsDB, main chan []Post, isBlog int) {
	rows, _ := lock.db.Query(`SELECT * FROM post WHERE is_blog = $1`, isBlog)
	defer rows.Close()

	posts := []Post{}

	for rows.Next() {
		var id int
		var title string
		var body string
		var mediafolder string
		var timestamp int
		var isBlog int

		err := rows.Scan(&id, &title, &body, &mediafolder, &timestamp, &isBlog)
		posts = append(posts, Post{ID: id, Title: title, Body: body, Mediafolder: mediafolder, Timestamp: timestamp, IsBlog: isBlog})

		if err != nil {
			log.Printf("getAllPosts: Error occurred\n%s", err.Error())
			main <- []Post{}
			return
		}
	}

	main <- posts
}

func dbGetPostByID(lock *PostsDB, main chan []Post, id int, isBlog int) {
	// Prep
	lock.mu.Lock()
	defer lock.mu.Unlock()
	posts := []Post{}
	var post Post

	// Exec
	err := lock.db.QueryRow(`SELECT * FROM post WHERE id = $1 AND is_blog = $2`, id, isBlog).
		Scan(&post.ID, &post.Title, &post.Body, &post.Mediafolder, &post.Timestamp, &post.IsBlog)

	// Error handling
	if err != nil {
		log.Printf("getPostByID: No results using ID: %d", id)
		main <- []Post{}
		return
	}

	// Completion
	posts = append(posts, post)
	main <- posts
}

func dbUpdatePost(lock *PostsDB, main chan string, data ProtectedPost, isBlog int) {
	// Prep
	doesPostExist := make(chan []Post)
	go dbGetPostByID(lock, doesPostExist, data.ID, isBlog)
	postArray := <-doesPostExist
	if postArray == nil {
		log.Printf("updatePost: Post %d does not exist", data.ID)
		main <- "This post has been deleted"
		return
	}

	if data.Title == "" || data.Mediafolder == "" || data.ID == 0 {
		log.Printf("updatePost: Empty datapackage has been provided")
		main <- "Empty datapackage has been provided"
		return
	}

	timestamp := time.Now().UTC().Format("20060102150405")

	lock.mu.Lock()
	defer lock.mu.Unlock()

	// Exec
	lock.db.Exec(`BEGIN TRANSACTION`)
	query := `UPDATE post SET title = ?, body = ?, mediafolder = ?, timestamp = ? WHERE id == ?;`
	_, err := lock.db.Exec(query, data.Title, data.Body, data.Mediafolder, timestamp, data.ID)

	// Error Handling
	if err != nil {
		lock.db.Exec(`ROLLBACK`)
		log.Printf("updatePost: Error trying to update post %d\n%s", data.ID, err.Error())
		main <- "Error when trying to update post\n" + err.Error()
		return
	}

	// Completion
	lock.db.Exec(`COMMIT`)
	log.Printf("updatePost: Updated post %d", data.ID)
	main <- "Updated post successfully"
}

func dbDeletePost(lock *PostsDB, main chan string, id int, isBlog int) {
	// Prep
	lock.mu.Lock()
	defer lock.mu.Unlock()
	doesPostExist := 0
	lock.db.QueryRow(`SELECT COUNT(*) FROM post WHERE id=? AND is_blog=?;`, id, isBlog).Scan(&doesPostExist)
	if doesPostExist == 0 {
		log.Printf("deletePost: No such post %d", id)
		main <- "No such post"
		return
	}

	// Exec
	lock.db.Exec(`BEGIN TRANSACTION`)
	lock.db.Exec(`DELETE FROM post WHERE id=?`, id, isBlog)

	// Completion
	lock.db.Exec(`COMMIT`)
	log.Printf("deletePost: Deleted Post %d", id)
	main <- "Deleted Post " + strconv.Itoa(id)
}

/*
	Helper Functions
*/
func openDB(file string) *sql.DB {
	db, err := sql.Open("sqlite3", file)
	if err != nil {
		log.Fatal(err)
	}
	return db
}

func generateSalt() string {
	return uuid.New().String()
}

func encryptPassword(salt string, password string) string {
	var passwordBytes = []byte(password)
	var sha512Hasher = sha512.New()

	passwordBytes = append(passwordBytes, salt...)
	sha512Hasher.Write(passwordBytes)

	var hashedPasswordBytes = sha512Hasher.Sum(nil)
	var base64EncodedPasswordHash = base64.URLEncoding.EncodeToString(hashedPasswordBytes)

	return base64EncodedPasswordHash
}

func newTimeout() int64 {
	return time.Now().UTC().Add(time.Hour * time.Duration(2)).Unix()
}

/*
	Unused functions
*/
func dbCreateUser(lock *UsersDB, main chan string, username string, password string) {
	lock.mu.Lock()
	defer lock.mu.Unlock()

	// Prep
	if username == "" {
		log.Printf("createUser: No username provided")
		main <- "No username provided"
		return
	}
	if password == "" {
		log.Printf("createUser: No password provided")
		main <- "No password provided"
		return
	}
	salt := generateSalt()
	encrypted := encryptPassword(salt, password)

	// Exec
	lock.db.Exec(`BEGIN TRANSACTION`)
	query := `INSERT INTO user(username, salt, password) VALUES (?, ?, ?)`
	_, err := lock.db.Exec(query, username, string(salt), encrypted)

	// Error handling
	if err != nil {
		lock.db.Exec(`ROLLBACK`)
		log.Printf("createUser: Error occurred after executing query: \n%s\n%s", query,
			err.Error())
		main <- "Error occurred after query\n" + err.Error()
		return
	}

	// Completion
	lock.db.Exec(`COMMIT`)
	log.Printf("createUser: Added user %s", username)
	main <- username + " added"
}

func dbDeleteUser(lock *UsersDB, main chan string, username string) {
	// Prep
	lock.mu.Lock()
	defer lock.mu.Unlock()
	doesUserExist := 0
	lock.db.QueryRow(`SELECT COUNT(*) FROM user WHERE username=?`, username).Scan(&doesUserExist)
	if doesUserExist == 0 {
		log.Printf("deleteUser: No such user %s", username)
		main <- "No such user"
		return
	}

	// Exec
	lock.db.Exec(`BEGIN TRANSACTION`)
	lock.db.Exec(`DELETE FROM session WHERE user=?`, username)
	lock.db.Exec(`DELETE FROM user WHERE username=?`, username)

	// Completion
	lock.db.Exec(`COMMIT`)
	log.Printf("deleteUser: Deleted %s", username)
	main <- "Deleted " + username
}

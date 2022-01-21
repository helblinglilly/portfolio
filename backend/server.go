package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"
)

// Login as required by POST /api/login and PUT /api/login
type Login struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// Credentials as required by any protected method
type Credentials struct {
	Username   string `json:"username"`
	SessionKey string `json:"session_key"`
}

// ProtectedPost as required when posting new post
type ProtectedPost struct {
	User        string `json:"username"`
	SessionKey  string `json:"session_key"`
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Body        string `json:"body"`
	Mediafolder string `json:"mediafolder"`
	IsBlog		int	   `json:isBlog`
}

var userLock UsersDB
var postsLock PostsDB

func main() {
	if !fileExists(os.Getenv("DB_FOLDER") + "users.sqlite3") || !fileExists(os.Getenv("DB_FOLDER") + "posts.sqlite3"){
		log.Println("Databases don't exist yet. Run setup script first!")
	}
	userLock = UsersDB{db: openDB(os.Getenv("DB_FOLDER") + "users.sqlite3")}
	postsLock = PostsDB{db: openDB(os.Getenv("DB_FOLDER") + "posts.sqlite3")}

	// dbCreateUser(&userLock, make(chan string), "admin", "admin")

	go tidySessions()
	log.Println("Server started on port 10000")
	http.HandleFunc("/", handleRequests)
	log.Fatal(http.ListenAndServe(":" + os.Getenv("SERVER_PORT"), nil))
}

func handleRequests(w http.ResponseWriter, r *http.Request) {
	log.Printf("%s %s", r.Method, r.URL.String())
	// w.Header().Set("Access-Control-Allow-Origin", "http://localhost:4200/")

	requestArr := strings.Split(r.URL.String(), "/")

	if len(requestArr) < 3 || len(requestArr) > 5{
		respondError(w, http.StatusNotFound, "Endpoint not accepted")
		return	
	}
	request := "/" + requestArr[1] + "/" + requestArr[2]

	switch request {
	case "/api/projects":
		hasID := false
		if len(requestArr) == 4{
			hasID = true
		} else if len(requestArr) > 4{
			respondError(w, http.StatusBadRequest, "Too many arguments");
		}
	
		if r.Method == "GET"{
			if (hasID){
				postID, err := strconv.Atoi(requestArr[3])
				if err != nil {
					respondError(w, http.StatusBadRequest, "Can only accept integer as Post ID")
				} else {
					apiGetPostsID(w, r, postID, 0)
				}
			} else {
				apiGetPostsAll(w, r, 0)
			}
		} else if r.Method == "POST"{
			apiCreatePost(w, r, 0)
		} else if r.Method == "PUT"{
			apiUpdatePost(w, r, 0)
		} else if r.Method == "DELETE"{
			if (hasID){
				postID, err := strconv.Atoi(requestArr[3])
				if err != nil {
					respondError(w, http.StatusBadRequest, "Can only accept integer as Post ID")
				} else {
					apiDeletePostID(w, r, postID, 0)
				}
			} else {
				respondError(w, http.StatusBadRequest, "Post ID must be provided")
			}
		}
	case "/api/posts":
		if r.Method == "GET" {
			apiGetEveryPost(w, r)
		}
	case "/api/blogs":
		hasID := false
		if len(requestArr) == 4{
			hasID = true
		} else if len(requestArr) > 4{
			respondError(w, http.StatusBadRequest, "Too many arguments");
		}
	
		if r.Method == "GET"{
			if (hasID){
				postID, err := strconv.Atoi(requestArr[3])
				if err != nil {
					respondError(w, http.StatusBadRequest, "Can only accept integer as Post ID")
				} else {
					apiGetPostsID(w, r, postID, 1)
				}
			} else {
				apiGetPostsAll(w, r, 1)
			}
		} else if r.Method == "POST"{
			apiCreatePost(w, r, 1)
		} else if r.Method == "PUT"{
			apiUpdatePost(w, r, 1)
		} else if r.Method == "DELETE"{
			if (hasID){
				postID, err := strconv.Atoi(requestArr[3])
				if err != nil {
					respondError(w, http.StatusBadRequest, "Can only accept integer as Post ID")
				} else {
					apiDeletePostID(w, r, postID, 1)
				}
			} else {
				respondError(w, http.StatusBadRequest, "Post ID must be provided")
			}
		}
	case "/api/login":
		if r.Method == "POST"{
			apiLogin(w, r)
		} else if r.Method == "PUT"{
			apiRefresh(w, r)
		} else if r.Method == "OPTIONS"{
			if r.Header.Get("Origin") == "http://localhost:4200"{
				log.Println(r)
				header := w.Header()
				header.Add("Access-Control-Allow-Origin", "*")
				header.Add("Access-Control-Allow-Methods", "POST")
				header.Add("Access-Control-Allow-Methods", "OPTION")
				header.Add("Access-Control-Allow-Headers", "Content-Type")
				header.Add("Content-Type", "application/json")
				log.Println("Header has been set")
				w.WriteHeader(http.StatusOK)
			}
		} else {
			respondError(w, http.StatusMethodNotAllowed, "Only POST and PUT allowed")
		}
	default:
		respondError(w, http.StatusNotFound, "Endpoint not accepted")
		return
	}
}

/*
	Posts
*/
func apiGetEveryPost(w http.ResponseWriter, r *http.Request){
	reader := make(chan []Post)
	go dbGetAllPosts(&postsLock, reader)
	posts := <-reader

	jsonBytes, err := json.Marshal(posts)
	if err != nil {
		respondError(w, http.StatusNoContent, "Database is empty")
		return
	}

	w.Header().Add("content-type", "application/json")
	w.Write(jsonBytes)
}

func apiGetPostsAll(w http.ResponseWriter, r *http.Request, isBlog int) {
	reader := make(chan []Post)
	go dbGetPost(&postsLock, reader, isBlog)
	posts := <-reader

	jsonBytes, err := json.Marshal(posts)
	if err != nil {
		respondError(w, http.StatusNoContent, "Database is empty")
		return
	}

	w.Header().Add("content-type", "application/json")
	w.Write(jsonBytes)
}

func apiGetPostsID(w http.ResponseWriter, r *http.Request, id int, isBlog int) {
	reader := make(chan []Post)
	go dbGetPostByID(&postsLock, reader, id, isBlog)
	post := <-reader

	if len(post) == 0 {
		respondError(w, http.StatusNoContent, "")
		return
	}

	jsonBytes, err := json.Marshal(post)
	if err != nil {
		respondError(w, http.StatusNoContent, "")
		return
	}
	w.Header().Add("content-type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jsonBytes)
}

func apiDeletePostID(w http.ResponseWriter, r *http.Request, id int, isBlog int) {
	// Authentication
	bodyBytes, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		respondError(w, http.StatusInternalServerError, err.Error())
		return
	}

	contentType := r.Header.Get("content-type")
	if contentType != "application/json" {
		respondError(w, http.StatusUnsupportedMediaType,
			"Expected content-type 'application/json' but got"+contentType)
		return
	}

	var credentials Credentials
	err = json.Unmarshal(bodyBytes, &credentials)
	if err != nil {
		respondError(w, http.StatusBadRequest, err.Error())
		return
	}
	if !authenticate(credentials.SessionKey, credentials.Username) {
		respondError(w, http.StatusUnauthorized, "Invalid session credentials")
		log.Printf("Unauthorized request from %s", credentials.Username)
		return
	}

	// Request
	parts := strings.Split(r.URL.String(), "/")
	if len(parts) != 4 {
		respondError(w, http.StatusNotFound, "Expected payload but none provided")
		return
	}

	writer := make(chan string)
	go dbDeletePost(&postsLock, writer, id, isBlog)
	dbMessage := <-writer

	w.Header().Add("content-type", "text/plain")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(dbMessage))
}

func apiCreatePost(w http.ResponseWriter, r *http.Request, isBlog int) {
	bodyBytes, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		respondError(w, http.StatusInternalServerError, err.Error())
		return
	}

	contentType := r.Header.Get("content-type")
	if contentType != "application/json" {
		respondError(w, http.StatusUnsupportedMediaType,
			"Expected content-type 'application/json' but got "+contentType)
		return
	}

	var post ProtectedPost
	err = json.Unmarshal(bodyBytes, &post)
	if err != nil {
		respondError(w, http.StatusBadRequest, err.Error())
		return
	}

	if !authenticate(post.SessionKey, post.User) {
		respondError(w, http.StatusUnauthorized, "Invalid session credentials")
		return
	}

	writer := make(chan string)
	if post.IsBlog != isBlog {
		respondError(w, http.StatusBadRequest, "isBlog MUST not differ from intention")
		return
	} else {
		log.Println(isBlog)
		go dbCreatePost(&postsLock, writer, post, isBlog)
		message := <-writer

		w.Header().Add("content-type", "text/plain")
		w.WriteHeader(http.StatusAccepted)
		w.Write([]byte(message))
	}
}

func apiUpdatePost(w http.ResponseWriter, r *http.Request, isBlog int) {
	bodyBytes, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		respondError(w, http.StatusInternalServerError, err.Error())
		return
	}

	contentType := r.Header.Get("content-type")
	if contentType != "application/json" {
		respondError(w, http.StatusUnsupportedMediaType, "Expected content-type 'application/json' but got "+contentType)
		return
	}

	var post ProtectedPost
	err = json.Unmarshal(bodyBytes, &post)
	if err != nil {
		respondError(w, http.StatusBadRequest, err.Error())
		return
	}

	if !authenticate(post.SessionKey, post.User) {
		respondError(w, http.StatusUnauthorized, "Invalid session credentials")
		return
	}

	if post.IsBlog != isBlog {
		respondError(w, http.StatusBadRequest, "isBlog MUST not differ from intention")
		return
	}

	writer := make(chan string)
	go dbUpdatePost(&postsLock, writer, post, isBlog)
	message := <-writer

	w.Header().Add("content-type", "text/plain")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(message))
}

/*
	Security
*/
func apiLogin(w http.ResponseWriter, r *http.Request) {
	bodyBytes, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		respondError(w, http.StatusInternalServerError, err.Error())
		return
	}

	contentType := r.Header.Get("content-type")
	if contentType != "application/json" {
		respondError(w, http.StatusUnsupportedMediaType, "Expected content-type 'application/json' but got "+contentType)
		return
	}

	var login Login
	err = json.Unmarshal(bodyBytes, &login)
	if err != nil {
		respondError(w, http.StatusBadRequest, err.Error())
		return
	}

	validationSupervisor := make(chan bool)
	go dbLogin(&userLock, validationSupervisor, login.Username, login.Password)
	valid := <-validationSupervisor

	if !valid {
		respondError(w, http.StatusUnauthorized, "Invalid username/password")
		return
	}

	dbResponse := make(chan string)
	go dbNewSession(&userLock, dbResponse, login.Username)
	sessionKey := <-dbResponse

	var session Session
	session.User = login.Username
	session.SessionKey = sessionKey
	session.Timeout = int(time.Now().UTC().Add(time.Hour * time.Duration(2)).Unix())
	marshalled, err := json.Marshal(session)
	if err != nil {
		respondError(w, http.StatusInternalServerError, "Error marshalling session")
	}

	w.Header().Add("content-type", "application/json")
	w.WriteHeader(http.StatusCreated)
	w.Write(marshalled)
}

func apiRefresh(w http.ResponseWriter, r *http.Request) {
	bodyBytes, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		respondError(w, http.StatusInternalServerError, err.Error())
		return
	}

	contentType := r.Header.Get("content-type")
	if contentType != "application/json" {
		respondError(w, http.StatusUnsupportedMediaType, "Expected content-type 'application/json' but got "+contentType)
		return
	}

	var credentials Credentials
	err = json.Unmarshal(bodyBytes, &credentials)
	if err != nil {
		respondError(w, http.StatusBadRequest, err.Error())
		return
	}

	if !authenticate(credentials.SessionKey, credentials.Username) {
		respondError(w, http.StatusUnauthorized, "Invalid session credentials")
		return
	}

	refreshSupervisor := make(chan Session)
	go dbRefreshSession(&userLock, refreshSupervisor, credentials.Username)
	updatedSession := <-refreshSupervisor
	if (Session{}) == updatedSession {
		respondError(w, http.StatusInternalServerError,
			"An error occurred when refreshing the session")
		return
	}

	marshalled, err := json.Marshal(updatedSession)
	if err != nil {
		respondError(w, http.StatusInternalServerError, "Error marshalling updated session")
	}
	w.Header().Add("content-type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(marshalled))
}

func authenticate(sessionKey string, username string) bool {
	sessionChan := make(chan Session)
	go dbGetSession(&userLock, sessionChan, username)
	session := <-sessionChan
	if (Session{}) == session {
		return false
	}
	
	if session.User != username {
		return false
	} else if session.SessionKey != sessionKey {
		return false
	} else if session.Timeout < int(time.Now().UTC().Unix()) {
		return false
	} 

	return true
}

// Every hour, remove any outdated session keys from the database
func tidySessions() {
	timer := time.NewTicker(24 * time.Hour)

	for {
		<-timer.C
		reader := make(chan []Session)
		go dbGetAllSessions(&userLock, reader)
		sessions := <-reader

		log.Printf("%d", sessions[0].Timeout)
		for _, session := range sessions {
			if session.Timeout < int(time.Now().UTC().Unix()) {
				confirmation := make(chan string)
				go dbDeleteSession(&userLock, confirmation, session.User)
				log.Printf(<-confirmation)
			}
		}
	}
}

/*
	Helper Functions
*/
func respondError(w http.ResponseWriter, status int, message string) {
	w.Header().Add("content-type", "text/plain")
	w.WriteHeader(status)
	w.Write([]byte(message))
}

func fileExists(filename string) bool {
    info, err := os.Stat(filename)
    if os.IsNotExist(err) {
        return false
    }
    return !info.IsDir()
}
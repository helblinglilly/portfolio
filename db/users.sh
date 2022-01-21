#!/bin/sh
if [ ! -f /mnt/db/users.sqlite3 ]; then
	echo "Creating users.sqlite3"
	touch /mnt/db/users.sqlite3
	sqlite3 /mnt/db/users.sqlite3 <<'END_SQL'
	CREATE TABLE IF NOT EXISTS user(
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		username TEXT NOT NULL UNIQUE,
		salt TEXT NOT NULL,
		password TEXT NOT NULL
	);

	CREATE TABLE IF NOT EXISTS session(
		user INTEGER UNIQUE,
		session_key TEXT PRIMARY KEY UNIQUE,
		timeout INTEGER, 
		FOREIGN KEY(user) REFERENCES user(id)
	);
END_SQL
fi
echo "/mnt/db/users.sqlite3 is ready"

#!/bin/sh
if [ ! -f /mnt/db/posts.sqlite3 ]; then
	echo "Creating posts.sqlite3"
    touch /mnt/db/posts.sqlite3
	sqlite3 /mnt/db/posts.sqlite3 <<'END_SQL'
	CREATE TABLE IF NOT EXISTS post(
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		title STRING NOT NULL,
		body STRING,
		mediafolder STRING NOT NULL,
		timestamp INTEGER NOT NULL,
		is_blog INTEGER NOT NULL
	);
END_SQL
fi
echo "/mnt/db/posts.sqlite3 is ready"
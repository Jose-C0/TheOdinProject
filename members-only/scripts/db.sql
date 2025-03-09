-- CREATE DATABASE odendb; DB is created in docker compose

CREATE TABLE users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    is_member BOOLEAN NOT NULL DEFAULT false

);

INSERT INTO "users" ("id", "username", "password", "first_name", "last_name", "is_member") VALUES
(2,	'odin',	'$2b$10$RIgEwZ4iP8OQdx6LzqC5L.F/h0Vnuh5ejopRAKOXqoWAAFNOsG/gC',	'First Name',	'Last Name',	'0'),
(3,	'lop',	'$2b$10$LtcKzbbavvt.vqfHDEEKZOiaWkvxkFMbGdw0EskUF3gay3uPQM/Du',	'emil',	'lopez',	'0');


CREATE TABLE logs_messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    description TEXT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    title TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO "logs_messages" ("id", "user_id", "description", "date", "title") VALUES
(1,	2,	'description description description description description',	'2025-03-07 04:02:14.684125',	'title'),
(2,	3,	'description description description description description',	'2025-03-07 04:02:14.684125',	'title 2');

-- END
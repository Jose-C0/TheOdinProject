-- CREATE DATABASE odendb; DB is created in docker compose

CREATE TABLE users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    is_member BOOLEAN NOT NULL DEFAULT false

);

INSERT INTO "users" ("username", "password", "first_name", "last_name", "is_member") VALUES
('odin',	'$2b$10$RIgEwZ4iP8OQdx6LzqC5L.F/h0Vnuh5ejopRAKOXqoWAAFNOsG/gC',	'First Name',	'Last Name',	'1'),
('juanp',	'$2b$10$ve.riN9vqq2WysU3GV/VOOhzz9eDwn0Tz7rBvhgkGj8mKrOkQJou2',	'juan',	'juan',	'0'),
('juan1',	'$2b$10$QODO0o3OjsGK096TIoRxaup2AuFoORlAq.3uNa.wbGLt4qyLDJ0oe',	'juan1',	'juan1',	'0'),
('lop',	'$2b$10$LtcKzbbavvt.vqfHDEEKZOiaWkvxkFMbGdw0EskUF3gay3uPQM/Du',	'emil',	'lopez',	'0'),
('jo',	'$2b$10$xeYnhGkpNxiZby2fKYpB7u3V7ZjrMpiIKVJumnD3sdhei7K8pvk1S',	'jo',	'jo',	'0'),
('dd',	'$2b$10$pTrkTCbb4uXQ9xl/2Hfp1uB0JXCtp8cp2uYkPgyhH20eOq3mSz.MG',	'dd',	'dd',	'0'),
('jalo',	'$2b$10$s1ay3LWF96Xmx3wUP5IM1.qTwasZzCd8D.0qYKbq3vGPMplihO/a.',	'jalo',	'jalo',	'0'),
('1',	'$2b$10$/z0jQeNlSJJ.qj1MKOljn.cs68hGVyyOrApWhct9WdP6O8EvP7EJq',	'1',	'1',	'1');


CREATE TABLE logs_messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    description TEXT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    title TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO "logs_messages" ("user_id", "description", "date", "title") VALUES
(1,	'description description description description description',	'2025-03-07 04:02:14.684125',	'title'),
(2,	'description description description description description',	'2025-03-07 04:02:14.684125',	'title 2'),
(3,	'solo prueba',	'2025-03-12 21:46:01.524302',	'description'),
(4,	'e',	'2025-03-12 21:50:34.977255',	'e'),
(1,	'ds',	'2025-03-12 21:57:45.423324',	'ds'),
(2,	'ew',	'2025-03-12 22:10:55.016281',	'dw');

-- END

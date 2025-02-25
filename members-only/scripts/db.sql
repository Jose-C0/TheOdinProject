-- CREATE DATABASE inventorydb; DB is created in docker compose

CREATE TABLE users (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   username VARCHAR ( 255 ),
   password VARCHAR ( 255 )
);

-- INSERT INTO users (user_name, password_hash, role) VALUES
-- ('admin', 'hashed_password_1', 'admin'),
-- ('user1', 'hashed_password_2', 'user'),
-- ('user2', 'hashed_password_3', 'user');


-- END



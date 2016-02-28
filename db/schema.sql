-- database name is flashcards

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cards;

-- create db flashcards;

CREATE TABLE users (
  id SERIAL UNIQUE PRIMARY KEY,
  email VARCHAR (225),
  password_digest TEXT,
  user_name VARCHAR (50)

);

-- from node-connect-pg-simple https://github.com/voxpelli/node-connect-pg-simple/blob/master/table.sql

CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
	"sess" json NOT NULL,
	"expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;



CREATE TABLE cards (
id  SERIAL UNIQUE PRIMARY KEY,
topic VARCHAR (225),
side_one TEXT,
side_two TEXT,
row_created_ TIMESTAMP WITH TIME ZONE

);

CREATE DATABASE destiny_db;

CREATE TABLE todos(
	todo_id SERIAL PRIMARY KEY,
	todo_name VARCHAR(50) NOT NULL,
	isDone boolean,
	isImportant boolean,
	createdAt TIMESTAMP,
	deletedAt TIMESTAMP
)


CREATE TABLE expences(
	exp_id SERIAL PRIMARY KEY,
	exp_time TIMESTAMP,
	amount NUMERIC(2),
	note VARCHAR(50),
	account VARCHAR(50),
	category VARCHAR(50),
	description VARCHAR(255)
)
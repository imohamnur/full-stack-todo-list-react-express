CREATE DATABASE fullstacktodo;

CREATE TABLE todos(
    tid SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
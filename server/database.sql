CREATE DATABASE peopleDB;

CREATE TABLE people(
    id SERIAL PRIMARY KEY,
    fName VARCHAR(255),
    lName VARCHAR(255),
    age INT
);
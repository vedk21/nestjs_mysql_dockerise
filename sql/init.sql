CREATE DATABASE docker_test;
USE docker_test;
CREATE TABLE Account (
  id integer primary key,
  name varchar(100),
  amount float
);

INSERT INTO Account
VALUES(
  1, "Dave", 230.56
),
(
  2, "Alex", 561.90
);
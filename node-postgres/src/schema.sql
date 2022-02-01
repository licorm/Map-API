DROP TABLE IF EXISTS SHOPS;

CREATE TABLE SHOPS(
  ID SERIAL PRIMARY KEY NOT NULL,
  NAME VARCHAR(255) NOT NULL,
  TYPE VARCHAR(50) NOT NULL
);

INSERT INTO SHOPS (ID, NAME, TYPE)
VALUES (1, 'John', 'Doe');

INSERT INTO SHOPS(ID, NAME, TYPE)
VALUES (2, 'Alice', 'Wonderland');
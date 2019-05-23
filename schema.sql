-- Drop DB if exists
DROP DATABASE IF EXISTS friend_find_db;

-- Schema
CREATE DATABASE friend_find_db;
USE friend_find_db;

CREATE TABLE friends (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    photo VARCHAR(500),
    scr1 INT(1) NOT NULL,
    scr2 INT(1) NOT NULL,
    scr3 INT(1) NOT NULL,
    scr4 INT(1) NOT NULL,
    scr5 INT(1) NOT NULL,
    scr6 INT(1) NOT NULL,
    scr7 INT(1) NOT NULL,
    scr8 INT(1) NOT NULL,
    scr9 INT(1) NOT NULL,
    scr10 INT(1) NOT NULL,
    PRIMARY KEY(id)
);


-- Seeds
INSERT INTO friends (name, photo, scr1, scr2, scr3, scr4, scr5, scr6,scr7, scr8, scr9,scr10)
VALUES ('Thanos', 'https://www.sideshow.com/product-asset/903429/feature', 1, 1, 1, 1, 1, 5, 5, 5, 5, 5);

INSERT INTO friends (name, photo, scr1, scr2, scr3, scr4, scr5, scr6,scr7, scr8, scr9,scr10)
VALUES ('Opposite Thanos', 'https://i.redd.it/u8xboq61v4m01.png', 5, 5, 5, 5, 5, 1, 1, 1, 1, 1);

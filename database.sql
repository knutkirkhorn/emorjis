DROP TABLE IF EXISTS Highscore;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users(
  user_id INTEGER AUTO_INCREMENT,
  name VARCHAR(16) NOT NULL,
  password VARCHAR(50) NOT NULL,
  PRIMARY KEY(user_id)
);

CREATE TABLE Highscore(
  score_id INTEGER AUTO_INCREMENT,
  score INTEGER,
  user_id INTEGER,
  PRIMARY KEY(score_id),
  FOREIGN KEY(user_id) REFERENCES Users(user_id)
);

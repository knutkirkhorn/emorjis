CREATE TABLE Users(
  user_id AUTO_INCREMENT NOT NULL,
  name VARCHAR(16) NOT NULL,
  password VARCHAR(50) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE Highscore(
  score_id AUTO_INCREMENT NOT NULL,
  score INTEGER,
  user_id INTEGER,
  PRIMARY KEY(score_id),
  FOREIGN KEY(user_id) REFERENCES Users(user_id)
);

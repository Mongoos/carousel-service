CREATE DATABASE IF NOT EXISTS carousel;

USE carousel;

CREATE TABLE images (
  id INT NOT NULL AUTO_INCREMENT,
  url VARCHAR(255),
  location_id INT NOT NULL,
  img_order INT NOT NULL,
  PRIMARY KEY (id)
);


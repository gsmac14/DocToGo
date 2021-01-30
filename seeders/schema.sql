
CREATE TABLE patients (
 id int NOT NULL AUTO_INCREMENT,
 first_name VARCHAR(50) NOT NULL,
 last_name VARCHAR(50) NOT NULL,
 symptoms VARCHAR (500) NOT NULL,
 address VARCHAR (100) NOT NULL,
 appointment DATE NOT NULL,
 email VARCHAR (100) NOT NULL,
 phone_num INT,
 doctor_id INT NOT NULL,
 pain_level INT NOT NULL,
 age INT,
 gender VARCHAR(10)
  PRIMARY KEY (id)
)


CREATE TABLE doctors (
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
	Pass BINARY(64) NOT NULL,
    email varchar(255) NOT NULL,
    doctor_id int NOT NULL,
    specialties varchar(255) NOT NULL,
	PRIMARY KEY (id)
    )
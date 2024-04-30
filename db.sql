-- creating the database
CREATE DATABASE crudapp;

-- using the database--usando la base de datos
use crudnodejsmysql2;

--creating a table
CREATE TABLE operadores (
 id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 nombres VARCHAR(50) NOT NULL,
 apellidos VARCHAR(50) NOT NULL,
 telefono VARCHAR(15) NOT NULL,
 correo VARCHAR(50) NOT NULL,
 direccion VARCHAR(100) NOT NULL,   
);


-- show all table
SHOW TABLE;

-- to describe the table
operadores;


DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (item_id),
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    stock_quantity INTEGER NOT NULL
);
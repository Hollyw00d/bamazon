DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products 
VALUES (
    null,
    'Star Wars Tauntaun Sleeping Bag',
    'Sports & Outdoors',
    799.99,
    92
);




INSERT INTO products 
VALUES (
    null,
    'Gramatik - Street Bangerz Volume 2',
    'CDs & Vinyl',
    49.95,
    9
);
INSERT INTO products 
VALUES (
    null,
    'National Parks Exploration Series - Glacier National Park - Crown of the Continent',
    'Movies & TV',
    $5.49,
    211
);


INSERT INTO products 
VALUES (
    null,
    'here',
    'here',
    66,
    66
);
INSERT INTO products 
VALUES (
    null,
    'here',
    'here',
    66,
    66
);
INSERT INTO products 
VALUES (
    null,
    'here',
    'here',
    66,
    66
);
INSERT INTO products 
VALUES (
    null,
    'here',
    'here',
    66,
    66
);
INSERT INTO products 
VALUES (
    null,
    'here',
    'here',
    66,
    66
);
INSERT INTO products 
VALUES (
    null,
    'here',
    'here',
    66,
    66
);
INSERT INTO products 
VALUES (
    null,
    'here',
    'here',
    66,
    66
);


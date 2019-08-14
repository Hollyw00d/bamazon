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
    5.49,
    211
);


INSERT INTO products 
VALUES (
    null,
    'Zinus Josh Traditional Upholstered 77.5 Inch Sofa/Living Room Couch, Beige Weave',
    'Home & Kitchen',
    399.99,
    11
);
INSERT INTO products 
VALUES (
    null,
    'Pogo Tritan Water Bottle, 32 Oz.',
    'Sports & Outdoors',
    8.99,
    213
);
INSERT INTO products 
VALUES (
    null,
    'Keurig K-Mini Single Serve Coffee Maker, Black',
    'Grocery & Gourmet Food',
    79.99,
    159
);
INSERT INTO products 
VALUES (
    null,
    'Back to Mine: Nightmares on Wax',
    'MP3 Music',
    9.49,
    498
);
INSERT INTO products 
VALUES (
    null,
    'AnBnCn Salad Soup 3-Pack-65 Oz Super Large Stackable Round White Fine Porcelain Cereal Pasta Bowl-Sets',
    'Grocery & Gourmet Food',
    43.99,
    16
);
INSERT INTO products 
VALUES (
    null,
    "Young MC - Stone Cold Rhymin'",
    "MP3 Music",
    9.49,
    311
);
INSERT INTO products 
VALUES (
    null,
    'Public Enemy - It Takes A Nation Of Millions To Hold Us Back',
    'here',
    11.99,
    1019
);
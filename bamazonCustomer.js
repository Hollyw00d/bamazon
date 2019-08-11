var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'nodeuser',
    password: 'password',
    database: 'bamazon'
});

function showAllItems() {
    connection.connect(function(err) {
        if(err) throw err;

        connection.query("SELECT * FROM products", function(err, response) {
            if(err) throw err;
            response.map(function(item) {
                console.log(`Item Id: ${item.item_id} | Product Name: ${item.product_name} | Price: ${item.price} | Stock Quantity: ${item.stock_quantity}`);
            });
        });
        connection.end();
    });
}


showAllItems();

function start() {
    inquirer.prompt([
        {
            name: 'idItemToBuy',
            type: 'input',
            message: 'What is the ID of the product you would like to buy?'
        },
        {
            name: 'quantityItemToBuy',
            type: 'input',
            message: 'What quantity of the item would you like to buy?'
        }
    ])
    .then(function() {
        connection.query("SELECT * FROM products WHERE id = 1", function(err, response) {
            if(err) throw err;
            console.log('Table row showing! ' + idItemToBuy.id);
        });
    });
}

start();

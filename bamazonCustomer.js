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


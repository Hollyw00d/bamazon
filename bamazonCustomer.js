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
            start();
        });
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
    .then(function(myProduct) {

        var query1 = "SELECT item_id, product_name, price, stock_quantity FROM products WHERE item_id = ?"; 
        connection.query(query1, [ myProduct.idItemToBuy ], function(err, item) {
            if(err) throw err;

            var totalCost = Number.parseFloat(item[0].price * parseInt(myProduct.quantityItemToBuy)).toFixed(2);

            if(myProduct.quantityItemToBuy <= item[0].stock_quantity) {
                console.log(`You purchased ${myProduct.quantityItemToBuy} of ${item[0].product_name} at a total cost of $${totalCost} ($${item[0].price} per item).`);
            }
            else {
                console.log(' Insufficient quantity!');
            }

            connection.end();
        });

        // Update products where item_id = myProduct.idItemToBuy

        // Create separate function that will take id and number and call function
        // inside of query
        
        
    });
}

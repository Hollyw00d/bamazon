// Get mysql and insquirer modules
var mysql = require('mysql');
var inquirer = require('inquirer');

// Get mysql connection
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'nodeuser',
    password: 'password',
    database: 'bamazon'
});

// Function to show all items on running
// node bamazonCustomer.js
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

// Function call
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

        var query = "SELECT item_id, product_name, price, stock_quantity FROM products WHERE item_id = ?"; 
        connection.query(query, [ myProduct.idItemToBuy ], function(err, item) {
            if(err) throw err;

            if(myProduct.quantityItemToBuy <= item[0].stock_quantity) {
                var quantityPurchased = parseInt(myProduct.quantityItemToBuy);
                var totalProductCost = Number.parseFloat(item[0].price * quantityPurchased).toFixed(2);
                var totalProductQuantityLeft = item[0].stock_quanity - quantityPurchased;

                console.log(`You purchased ${myProduct.quantityItemToBuy} of ${item[0].product_name} at a total cost of $${totalProductCost} ($${item[0].price} per item).`);
                updateProductQuantity(totalProductQuantityLeft, item[0].item_id);
            }
            else {
                console.log(' Insufficient quantity!');
            }

            connection.end();
            
        });

        // Update products where item_id = myProduct.idItemToBuy

        // Create separate function that will take id and number and call function
        // inside of query
        function updateProductQuantity(quantity, item_id) {
            var query = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";
            connection.query(query, [quantity, item_id], function(err, item) {
                if(err) throw err;
            });
        }              
        
    });
}
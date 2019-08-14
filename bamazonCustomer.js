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
            // Function call to execute inquirer,
            // run MySQL queries to show single row
            // of selected item for purchase, and
            // update item quantity after purchase 
            start();
        });
    });
}

// Function call to show all items
showAllItems();

// Function to execute inquirer,
// run MySQL queries to show single row
// of selected item for purchase, and
// update item quantity after purchase 
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
        // Item id selected 
        var idItemToBuy = myProduct.idItemToBuy;

        // MySQL query to select columns
        // from products table where id is
        // product id selected from Inquirer 
        var query = "SELECT item_id, product_name, price, stock_quantity FROM products WHERE item_id = ?"; 

        // Executing MySQL query shown above
        connection.query(query, [ idItemToBuy ], function(err, item) {
            if(err) throw err;
            // Inquirer variables
            var quantityItemToBuy = myProduct.quantityItemToBuy;

            // MySQL query variables
            var price = item[0].price;
            var stockQuantity = item[0].stock_quantity;

            // Calculated variables using Inquirer
            // and MySQL query variables
            var quantityPurchased = parseInt(quantityItemToBuy);
            var totalProductCost = Number.parseFloat(price * quantityPurchased).toFixed(2);
            var totalProductQuantityLeft = stockQuantity - quantityPurchased;

            if(quantityItemToBuy <= stockQuantity) {
                console.log(`You purchased ${quantityItemToBuy} of ${item[0].product_name} at a total cost of $${totalProductCost} ($${price} per item).`);
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
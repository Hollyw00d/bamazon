# bamazon UW Programming Bootcamp Project

## Challenge #1: Customer View (Minimum Requirement for UW Coding Bootcamp Assignment)
1. While using MySQL Workbench to run <b>bamazon.sql</b> (seed file) locall, cloning all the files in this repo, and then running `npm i`, run the command below:
````
node bamazonCustomer
````
2. Then you'll see the a list of all products in the <b>bamazon</b> database, <b>products</b> table:  
![List of all products in bamazon Table](/images/bamazon-select-all.png)  
3. Then, the <b>Inquirer</b> NPM package will kick in and you'll need to ensure a product ID of the product you want, and the quantity, like the example below:  
![bamazon selecty by product ID and quantity](/images/bamazon-select-product-by-id-and-quantity.png)  
4. Then the you'll see the name of the item you purchased, total cost of the item, and per unit item cost:  
![Details of item purchased on bamazon](/images/bamazon-show-item-purchased.png)
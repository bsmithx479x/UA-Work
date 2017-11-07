/*
    Exercise 26 
*/
var productList = [{
    product: 'Shirt',
    price: 10.00,
    color: 'Blue'
},
{
    product: 'Pants',
    price: 10.00,
    color: 'Brown'
},
{
    product: 'Shoes',
    price: 15.00,
    color: 'Blue'
}
];
//////////////////////////////////////////Part 1
/*
This function should get the total price of the items in your cart.
var productList = [
{product: 'Shirt', price: 10.00, color:'Blue'},
{product: 'Pants', price: 10.00, color:'Brown'},
{product: 'Shoes', price: 15.00, color: 'Blue'}
];
The total is 35.
*/
function getTotalCost(cart) {
var totalCost = 0;

totalCost = productList['0'].price + productList['1'].price + productList['2'].price;

return totalCost;
}

var totalCost = getTotalCost(productList);
console.log(totalCost);






//////////////////////////////////////////Part 2
/*
This function should get the total price of the items in your cart AND add tax to it.
var productList = [
{product: 'Shirt', price: 10.00, color:'Blue'},
{product: 'Pants', price: 10.00, color:'Brown'},
{product: 'Shoes', price: 15.00, color: 'Blue'}
];
The total is 35.
Total plus tax is 36.75
*/

var TAX = 0.05;
function getTotalCostPlusTax(cart) {
var costPlusTax = 0;

var totalCart = getTotalCost(cart);
var totalTax = TAX * totalCart;
var costPlusTax = totalTax + totalCart;



return costPlusTax;
}

var totalCostPlusTax = getTotalCostPlusTax(productList);
console.log(totalCostPlusTax);


//////////////////////////////////////////Part 3
/*
Use jQuery to perform the following tasks 
*/


//3.1 -  Select the element with the id 'title' and add the class 'color' to it.

$('#title').addClass('color');

//3.2 - Select the odd articles  inside the '.container' element.  Add the class 'odd' to them.
$('.container').children('article:even').addClass('odd');

//3.3 - Select and remove the class 'active' from the Home nav link. Add active to the 'About' link.
$('li:first-child').removeClass('active');
$('li:first-child').next().addClass('active');
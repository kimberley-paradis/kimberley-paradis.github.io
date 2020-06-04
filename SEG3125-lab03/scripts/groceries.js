// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "Grapes - $1.99",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Almonds - $2.75",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.75
	},
	{
		name: "Brocoli - $2.99",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.99
	},
	{
		name: "Pretzel - $3.35",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 3.35
	},
	{
		name: "Almond Milk - $4.89",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.89
	},
	{
		name: "Cinnamon Buns - $5.00 ",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 5.00
	},
	{
		name: "Muscles - $10.00",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00
	},

	{
		name: "Birthday Cake - $13.00",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 13.00
	},
	{
		name: "GF Birthday Cake - $15.00",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 15.00
	},
	{
		name: "Rotisserie Chicken - $25.00",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 25.00
	}

];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		 if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

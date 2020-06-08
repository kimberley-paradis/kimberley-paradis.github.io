
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "Grapes",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		category: "fruitsveggies",
		image: "grapes.jpg"
	},
	{
		name: "Almonds",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.75,
		category: "meat",
		image: "almonds.jpg"
	},
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.99,
		category: "fruitsveggies",
		image: "brocoli.jpg"
	},
	{
		name: "Pretzel",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 3.35,
		category: "grains",
		image: "pretzel.jpg"
	},
	{
		name: "Milk",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 4.89,
		category: "dairy",
		image: "milk.jpg"
	},
	{
		name: "Cinnamon Buns",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 5.00,
		category: "grains",
		image: "cinnamon.jpg"
	},
	{
		name: "Mussels",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00,
		category: "meat",
		image: "mussels.jpg"
	},
	{
		name: "Cake",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.50,
		category: "grains",
		image: "cake.jpg"
	},
	{
		name: "Tiramisu",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.00,
		category: "grains",
		image: "gf_cake.jpg"
	},
	{
		name: "Rotisserie Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 25.00,
		category: "meat",
		image: "chicken.jpg"
	}
];

function compare( a, b ) {
  if ( a.price < b.price ){
    return -1;
  }
  if ( a.price > b.price ){
    return 1;
  }
  return 0;
}

products.sort(compare);


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, category) {
	let product_names = [];

	for (let i=0; i<prods.length; i+=1) {
		if((prods[i].category == category) || (category == "all")){
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "Organic") && (prods[i].organic == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "VegetarianGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "GlutenFreeOrganic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "VegetarianOrganic") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "All") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
			}
			else if (restriction == "None"){
				product_names.push(prods[i].name);
			}
		}
	}
	return product_names;
}

function restrictListPrices(prods, restriction, category) {
	let prices = [];

	for (let i=0; i<prods.length; i+=1) {
		if((prods[i].category == category) || (category == "all")){
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "Organic") && (prods[i].organic == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "VegetarianGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "GlutenFreeOrganic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "VegetarianOrganic") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "All") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				prices.push(prods[i].price);
			}
			else if (restriction == "None"){
				prices.push(prods[i].price);
			}
		}
	}
	return prices;
}

function restrictListImages(prods, restriction, category) {
	let images = [];

	for (let i=0; i<prods.length; i+=1) {
		if((prods[i].category == category) || (category == "all")){
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "Organic") && (prods[i].organic == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "VegetarianGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "GlutenFreeOrganic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "VegetarianOrganic") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "All") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				images.push(prods[i].image);
			}
			else if (restriction == "None"){
				images.push(prods[i].image);
			}
		}
	}
	return images;
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

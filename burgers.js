var FoodItem = function(name, calories, isVegan, isGlutenFree) {
	this.name = name;
	this.calories = calories;
	this.isVegan = true;
	this.isGlutenFree = true;
}

FoodItem.prototype..stringify = function() {
	if (this.isVegan) {
		veganString = 'is'
	}
	else {
		veganString = 'is not'
	}
	return `${this.name} has ${this.calories} calories. It is ${this.isVegan ? '' : 'not'} vegan, and it is ${this.isGlutenFree ? '' : 'not'} gluten free.`
}

var cheesburger = new FoodItem('cheesburger', 2000, false, true)
var bacon = new foodItem('bacon', 100, false, true);
var cheese = new foodItem('cheese', 75, false, true);
var tomato = new foodItem('tomato', 0, true, true);
var lettuce = new foodItem('lettuce', 0, true, true);
var ketchup = new foodItem('ketchup', 50, true, true);
var mustard = new foodItem('mustard', 45, true, true);
var specialSauce = new foodItem('Special Sauce', 1750, false, false);

// console.log(bacon)
// console.log(lettuce)
// console.log(cheese)
// console.log(tomato)


var Plate = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
}

Plate.prototype.stringify = function () {
	var output = `${this.name}: $${this.price}. ${this.description}. It contains: `
	for (var i = 0; i < this.foodItem.length; i++) {
		output += this.foodItem[i].stringify()
	}
}

var burgerIngredients = [cheeseburger, bacon, lettuce, ketchup, mustard, specialSauce]
var theBestBurger = new Plate('The Best Burger', 11.99, "Made from fresh beef, honest truth!", burgerIngredients)

console.log(theBestBurger.stringify())


var Menu = function(name, plates) {
	this.name = name,
	this.plates = plates,
}

Menu.prototype.stringify = function () {
	var output = this.name + ': '
	for (var i = 0; i < this.plates.length; i++) {
		output += this.plates[i].stringify()
	}
	return output
}

var happyHour = new Menu('Happy Hour', [theBestBurger])

var Restaurant = function(name, description, menus) {
	this.name = name,
	this.description = description,
	this.menus = menus,
}

Restaurant.prototype.stringify = function () {
	var output = `${this.name}: ${this.description}. Check out our menus!`
	for (var i = 0; i < this.menus.length; i++) {
		output += this.menus[i].stringify()
	}
	return output
}

var ChetsBestBurgers = function() {
	
}








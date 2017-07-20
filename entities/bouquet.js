var Flower = require('./flowers/flower');

function Bouquet() {
	this.flowers = [];
	this.price = 0;
	this.packaging;
}

Bouquet.prototype.add = function (flower) {
	this.flowers.push(flower);
	this.price += flower.price;
};

Bouquet.prototype.setPackaging = function (packaging) {
	 this.packaging = (packaging) ? packaging : "No packaging";
};

Bouquet.prototype.getTotal = function () {
	return this.price + (this.packaging.price ? this.packaging.price : 0);
};

Bouquet.prototype.toString = function () {
	this.flowers.forEach(function (item, index) {
		console.log("\t" + item);
	});
	console.log("\t" + this.packaging + "\nTotal price: " 
				+ this.getTotal() + "$");
};

exports.Bouquet = Bouquet;

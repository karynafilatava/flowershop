var flower = require('./flower');

function IndoorFlower(name, price, color) {
	flower.Flower.apply(this, arguments);
	this.packaging;
}
IndoorFlower.prototype = Object.create(flower.Flower.prototype);

IndoorFlower.prototype.toString = function () {
	return (this.packaging ? "\t" + this.packaging + "\n" : "" ) + "\t" + 
			flower.Flower.prototype.toString.apply(this) +
			"\nTotal price: " + this.getTotal() + "$";
};

IndoorFlower.prototype.setPackaging = function (packaging) {
	 this.packaging = (packaging) ? packaging : "No packaging";
};

IndoorFlower.prototype.getTotal = function () {
	return this.price + (this.packaging ? this.packaging.price : 0);
};

exports.IndoorFlower = IndoorFlower;
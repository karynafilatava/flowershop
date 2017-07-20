function Flower(name, price, color) {
	this.name = name;
	this.price = price;
	this.color = color;
}

Flower.prototype.toString = function () {
	return this.color + " " + this.name + " costs " + this.price + "$";
};

exports.Flower = Flower;
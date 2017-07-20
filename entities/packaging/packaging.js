function Packaging(price, material, color) {
	this.price = price;
	this.material = material;
	this.color = color;
}

Packaging.prototype.toString = function () {
	return this.color + " " + this.material + " costs " + this.price + "$";
};

exports.Packaging = Packaging;
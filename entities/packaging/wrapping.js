var packaging = require('./packaging');

function Wrapping(price, material, color, isDecorated) {
	packaging.Packaging.apply(this, arguments);
	this.isDecorated = isDecorated;
}
Wrapping.prototype = Object.create(packaging.Packaging.prototype);

Wrapping.prototype.toString = function () {
	return (this.isDecorated ? "Decorated w" : "W") + "rapping of " + 
			packaging.Packaging.prototype.toString.apply(this);
};

exports.Wrapping = Wrapping;
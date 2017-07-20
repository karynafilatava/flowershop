var packaging = require('./packaging');

function Pot(price, material, color, volume) {
	packaging.Packaging.apply(this, arguments);
	this.volume = volume;
}
Pot.prototype = Object.create(packaging.Packaging.prototype);

Pot.prototype.toString = function () {
	return "Pot (" + this.volume + "L.) of " +
			packaging.Packaging.prototype.toString.apply(this);
};

module.exports.Pot = Pot;
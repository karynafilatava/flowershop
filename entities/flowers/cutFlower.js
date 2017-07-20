var flower = require('./flower');

function CutFlower(name, cost, color, dayAgoCutted) {
	flower.Flower.apply(this, arguments);
	this.daysAgoCutted = dayAgoCutted;
}
CutFlower.prototype = Object.create(flower.Flower.prototype);

CutFlower.prototype.toString = function () {
	return flower.Flower.prototype.toString.apply(this) +
			" [cutted "+ this.daysAgoCutted + " days ago]";
};

exports.CutFlower = CutFlower;
var indflwr_con = require('../entities/flowers/IndoorFlower'),
	pot_con = require('../entities/packaging/Pot'),

	cactus = new indflwr_con.IndoorFlower("Cactus", 2.5, "White"),
	viola = new indflwr_con.IndoorFlower("Viola", 3, "Violet"),
	plants = [viola, cactus],

	clayPot = new pot_con.Pot(1, "clay", "gray", 1),
	plasticPot = new pot_con.Pot(0.5, "plastic", "white", 0.6),
	pots = [clayPot, plasticPot],

	prompt = require('prompt-sync')();

function IndoorFlwBuilder() {
	this.indoorFlower;
	this.availableFlw = plants;
	this.availablePck = pots;
}

IndoorFlwBuilder.prototype.chooseFlowers = function () {
	var i = prompt("Enter index of wanted flower: ");
	this.indoorFlower = this.availableFlw[i-1];
};

IndoorFlwBuilder.prototype.setPackaging = function (i) {
	this.indoorFlower.setPackaging(this.availablePck[i-1]);	
};

IndoorFlwBuilder.prototype.get = function () {
	return this.indoorFlower;
};

exports.IndoorFlwBuilder = IndoorFlwBuilder;
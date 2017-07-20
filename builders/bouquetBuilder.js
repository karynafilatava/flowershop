var ctflwr_con = require('../entities/flowers/cutflower'),
	wrppng_con = require('../entities/packaging/wrapping'),
	bqt_con = require('../entities/bouquet'),
	
	tulip = new ctflwr_con.CutFlower("Tulip", 1, "Yellow", 1),
	rose = new ctflwr_con.CutFlower("Rose", 2, "Red", 5),
	bouquetFlowers = [tulip, rose],

	trnsprntWrap = new wrppng_con.Wrapping(0.5, "cellophane", "transparent", true),
	craftWrap = new wrppng_con.Wrapping(0.8, "paper", "craft", false),
	wrappings = [trnsprntWrap, craftWrap],

	prompt = require('prompt-sync')();

function BouquetBuilder() {
	this.bouquet;
	this.availableFlw = bouquetFlowers;
	this.availablePck = wrappings;
}

BouquetBuilder.prototype.chooseFlowers = function () {
	var n;
	this.bouquet = new bqt_con.Bouquet();
	
	n = prompt("\nEnter amount of flowers in the bouquet: ");	
	for (; n--; ) {
		var i = prompt("Enter index of wanted flower: ");
		this.bouquet.add(this.availableFlw[i-1]);
	}
};

BouquetBuilder.prototype.setPackaging = function (i) {
		this.bouquet.setPackaging(this.availablePck[i-1]);
};

BouquetBuilder.prototype.get = function () {
	return this.bouquet;
};

exports.BouquetBuilder = BouquetBuilder;
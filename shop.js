var bqt_bld = require('./builders/bouquetBuilder'),
	ind_bld = require('./builders/indoorBuilder'),
	prompt = require('prompt-sync')(),
	plntBuilder = new ind_bld.IndoorFlwBuilder(),
	bqtBuilder = new bqt_bld.BouquetBuilder();

function Shop() {}

Shop.prototype.construct = function (builder) {
	this.showFlowers(builder);
	builder.chooseFlowers();
	builder.setPackaging(this.listChoosePackaging(builder));
	return builder.get();
};

Shop.prototype.showFlowers = function (builder) {
	var n = prompt("List available flowers sorted by price - 1, by color - 2: ");

	switch(n) {
	case '1' : 	builder.availableFlw.sort(this.sortPrice);
				break;
	case '2' : 	builder.availableFlw.sort();
				break;			
	default: 	console.log("No sorting.");
	}

	builder.availableFlw.forEach( function (element, index) {
	    			console.log("[" + (index + 1) + "]\t" + element + "");
	});
};

Shop.prototype.sortPrice = function (a, b) {
	return a.price - b.price;
};

Shop.prototype.listChoosePackaging = function (builder) {
	console.log("\nList of available packaging: ");

	builder.availablePck.forEach( function(element, index) {
	    console.log("[" + (index + 1) + "]\t" + element + "");
	});

	return prompt("\nEnter index of wanted packaging: ");
};

Shop.prototype.enter = function () {
	var product;

	switch ( prompt("Enter 1 to get a bouquet, 2 to get a plant: ") ) {
	case "1" : 	product = this.construct(bqtBuilder);
				break;
	case "2" : 	product = this.construct(plntBuilder); 
				break;
	default: 	console.log("Next time try to enter some correct value!");
	}

	console.log("\n" + product);
};

var BestFlowerShop = new Shop(); 
BestFlowerShop.enter();




module.exports = function makeExchange(currency) {
    var obj = {};
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if (currency <= 0) {
        return {};
    }
    if (currency >= 50){
		var h = Math.floor(currency / 50);
		currency = currency - 50 * h;
		obj["H"] = h;
    }
    if (currency >= 25){
		var q = Math.floor(currency / 25);
		currency = currency - 25 * q;
		obj["Q"] = q;
    }
    if (currency >= 10){
		var d = Math.floor(currency / 10);
		currency = currency - 10 * d;
        obj["D"] = d;
    }
    if (currency >= 5){
		var n = Math.floor(currency / 5);
		currency = currency - 5 * n;
		obj["N"] = n;
	}

	if (currency < 5 && currency > 0){
		var p = currency;
		obj["P"] = p;
	}
    return obj;
    

   
}

//

var totalBottles = function(investment) {
	var remainder = [0, 0];
	var bottles = Math.floor(investment / 2);
	var total = bottles;
	var empties = bottles;
	var caps = bottles;
	while (empties > 2 || caps > 4) {
		bottles = Math.floor(empties / 2) + Math.floor(caps / 4);
		total += bottles;
		remainder[0] = empties % 2;
		remainder[1] = caps % 4;
		empties = bottles + remainder[0];
		caps = bottles + remainder[1];
	}
	total += bottles;
	remainder[0] += empties;
	remainder[1] += caps;
	if (remainder[0] >= 2) {
		total += Math.floor(remainder[0] / 2);
	}
	if (remainder[1] >= 4) {
		total += Math.floor(remainder[1] / 4)
	}
	return total;
}

console.log(totalBottles(20))





var input = process.argv[2];

var totalBottles = function(investment) {
	var remainder = [0, 0];
	var bottles = Math.floor(investment / 2);
	var total = bottles;
	var empties = bottles;
	var caps = bottles;
	var count = [0, 0]

	while (empties > 2 || caps > 4) {
		bottles = Math.floor(empties / 2) + Math.floor(caps / 4);
		total += bottles;
		remainder[0] = empties % 2;
		remainder[1] = caps % 4;
		count[0] += Math.floor(empties / 2);
		count[1] += Math.floor(caps / 4);
		console.log(count)
		empties = bottles + remainder[0];
		caps = bottles + remainder[1];
	}

	total += bottles;
	remainder[0] += empties;
	remainder[1] += caps;

	if (remainder[0] >= 2) {
		total += Math.floor(remainder[0] / 2);
		remainder[0] -= (Math.floor(remainder[0] / 2) * 2);
	}
	if (remainder[1] >= 4) {
		total += Math.floor(remainder[1] / 4)
		remainder[1] -= (Math.floor(remainder[1] / 4) * 4);
	}

	var output = 
`Total Bottles Earned: ${total}\n
	Remaining Bottles: ${remainder[0]}\n
	Remaining Caps: ${remainder[1]}\n
	Total Earned From: \n
		-Empties: ${count[0]}\n
		-Caps: ${count[1]}`

	return output;
}
console.log(totalBottles(input))





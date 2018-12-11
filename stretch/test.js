function numBottlesFrom(number) {
  if (isNaN(number)) {
    return {
      totalBottles: 0,
      bottlesBought: 0,
      fromEmpties: 0,
      fromCaps: 0,
      emptiesLeft: 0,
      capsLeft: 0,
    }
  }

  var bottlesCanBePurchased = Math.floor(number / 2);
  var numBottlesFromCaps = Math.floor(bottlesCanBePurchased / 4);
  var numBottlesFromEmpties = Math.floor(bottlesCanBePurchased / 2);

  return {
    totalBottles: bottlesCanBePurchased + numBottlesFromCaps + numBottlesFromEmpties,
    bottlesBought: bottlesCanBePurchased,
    fromEmpties: numBottlesFromEmpties,
    fromCaps: numBottlesFromCaps,
    emptiesLeft: bottlesCanBePurchased % 2,
    capsLeft: bottlesCanBePurchased % 4,
  }
}

var result = numBottlesFrom(Number(process.argv[2]))
console.log(`Total: ${result.totalBottles}, Purchased: ${result.bottlesBought}, from empties: ${result.fromEmpties}, from bottlecaps: ${result.fromCaps}`);
console.log(`you have ${result.emptiesLeft} empty bottles left and ${result.capsLeft} bottle caps left.`);

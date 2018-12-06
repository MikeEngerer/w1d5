let testArr = [45, 24, 35, 31, 40, 38, 11];

var maxProfit = function(arr) {
	var highest = 0;
	var j = arr.length - 1;
	var increment = 2
	for (var i = arr.length - increment; i >= 0; i--) {
		if (arr[j] > arr[i] && arr[j] - arr[i] > highest) {
			highest = arr[j] - arr[i];
		}
		if (i === 0) {
			j--;
			increment++
			i = arr.length - increment;
		}

	}
	console.log(highest);
}
maxProfit(testArr)
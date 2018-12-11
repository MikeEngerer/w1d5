var check = function(num) {
	var numArr = num.toString().split("");
	var sumDigits = [];
	var len = numArr.length;
	var sum = 0
	for (var i = len - 1; i >= 0; i -= 2) {
		numArr[i] = numArr[i] * 2;
	}
	for (var i = len - 1; i >= 0; i--) {
		if (numArr[i] > 9) {
			sumDigits.push(numArr[i][0] + numArr[i][1])
		} else {
			sumDigits.push(numArr[i])
		}
	}
	for (var i = 0; i < sumDigits.len; i++) {
		sum += sumDigits[i]
	}


}

check(7992739871)

module.exports = {
	"check" = check
};
// From the rightmost digit, which is the check digit, and moving left, double the value of every second digit. The check digit is not doubled; the first digit doubled is immediately to the left of the check digit. If the result of this doubling operation is greater than 9 (e.g., 8 × 2 = 16), then add the digits of the product (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) or, alternatively, the same result can be found by subtracting 9 from the product (e.g., 16: 16 − 9 = 7, 18: 18 − 9 = 9).
// Take the sum of all the digits.
// If the total modulo 10 is equal to 0 (if the total ends in zero) then the number is valid according to the Luhn formula; else it is not valid.
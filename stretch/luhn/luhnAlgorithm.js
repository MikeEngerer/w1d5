var input = process.argv[2]

var double = function(input) {
	var doubled = input.split("")
	var isSecond = false
	for (var i = doubled.length - 1; i >= 0; i--) {
		if (isSecond) {
			doubled[i] = doubled[i] * 2
			isSecond = !isSecond
		} else {
			doubled[i] = parseInt(doubled[i])
			isSecond = !isSecond;
		}
	}
	return doubled;
}

var sum = function(doubledInput) {
	var digitSum = 0
	for (var i = 0; i < doubledInput.length; i++) {
		if (doubledInput[i] > 9) {
			var str = (doubledInput[i].toString().split(""))			
			digitSum += parseInt(str[0]) + parseInt(str[1])
		} else {
			digitSum += doubledInput[i]
		}
	}
	return digitSum
}


var check = function(digitSum) {
	var checkSum = sum(double(input))
	var bool;
	if (checkSum % 10 === 0) {
		console.log("This is a valid number");
		bool = true;

	} else {
		console.log("Invalid number")
		bool = false;
	}
	return bool;
}

check(input)



module.exports = {

	"check": check,
	"double": double,
	"sum": sum
};
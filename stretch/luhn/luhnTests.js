var expect = require("chai").expect;
var check = require("./luhnAlgorithm").check;
var double = require("./luhnAlgorithm").double;
var sum = require("./luhnAlgorithm").sum;


describe("Raw input", function(){
	it("Returns array of numbers from number(as string) input, with every other value doubled starting from the last digit", function() {
		var input = "123456789"
		var result = double(input);
		expect(result).to.deep.equal([1, 4, 3, 8, 5, 12, 7, 16, 9])
	})
})

describe("Sum of digits", function() {
	describe("Takes returned array from double function", function() {
		it("Returns the sum of all digits, if x > 1 digit, they are split and added separately.", function() {
			var input = double("123456789")
			var result = sum(input);
			expect(result).to.equal(47);
		})
	})
})

describe("Final assessment", function() {
	describe("Takes returned sum from sum(double(input))", function() {
		it("returns a statemtent to the console describing the validity of the input number", function() {
			var input = sum(double("123456789"));
			var result = check(input);
			expect(result).to.equal(false);
		})
	})
})
describe("Final assessment", function() {
	describe("Takes returned sum from sum(double(input))", function() {
		it("returns a statemtent to the console describing the validity of the input number", function() {

			var input = sum(double("79927398713"));
			var result = check(input);
			expect(result).to.equal(true)
		})
	})
})
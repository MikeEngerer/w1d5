var list = [];

var addToList = function(num) {
	list.push(num);
}
var compare = function(a, b) {
	return a - b
}

var sortList = function() {
	var sortedList = list.sort(compare);
	return sortedList;
}



module.exports = {
	"addToList":  addToList,
	"sortList": sortList
}
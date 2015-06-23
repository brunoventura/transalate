(function(){

	angular.module('app')

	.filter("lang", function() {
		return function(array) {
			return array.join(' / ');
		};
	});	
	
}());
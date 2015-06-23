(function () {
	angular.module('app')
	
	.controller('MainCtrl', ControllerFn)

	ControllerFn.$injector = ['$scope', 'all'];
	
	function ControllerFn ($scope) {
	}

}());
(function () {

	angular.module('app')
	
	.controller('DashboardCtrl', ControllerFn)

	ControllerFn.$injector = ['$scope', 'all'];
	
	function ControllerFn ($scope) {
		$scope.test = 1
	}

}());
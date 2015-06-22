(function () {

	angular.module('app')
		.controller('ProjectsViewCtrl', ControllerFn);

	ControllerFn.$injector = ['$scope'];
	
	function ControllerFn ($scope, ProjectService) {
		console.log('here');

	}

	

}());
(function () {

	angular.module('app')
		.controller('ProjectsViewCtrl', ControllerFn);

	ControllerFn.$injector = ['$scope', 'project'];
	
	function ControllerFn ($scope, project) {
		$scope.project = project.data;

	}

	

}());
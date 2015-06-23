(function () {

	angular.module('app')
		.controller('ProjectsCtrl', ControllerFn)

	ControllerFn.$injector = ['$scope', '$location', 'all'];
	
	function ControllerFn ($scope, $location, all) {
		$scope.projects = all.data.apps;
		//Public API
		$scope.selectProject = selectProject;

		function selectProject (id) {
			$location.url('projects/'+id);
		}
	}



}());
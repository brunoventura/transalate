(function () {

	angular.module('app')
		.controller('ProjectsCtrl', ControllerFn)

	ControllerFn.$injector = ['$scope', '$state'];
	
	function ControllerFn ($scope, $state, all) {
		$scope.projects = all.data.apps;
		//Public API
		$scope.selectProject = selectProject;

		function selectProject (id) {
			$state.go('project.view', {'id': id});
		}
	}



}());
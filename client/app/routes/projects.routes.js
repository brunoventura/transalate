(function () {

	angular.module('app')
	.config(function ($stateProvider) {
		$stateProvider.state('project', {
			url: '/projects',
			templateUrl: 'app/views/projects.html',
			controller: 'ProjectsCtrl',
			resolve: {
				ProjectService: "ProjectService",
				all: function(ProjectService) {
					return ProjectService.all();
				}
			}
		}).state('project.view', {
			url: '/:id',
			templateUrl: 'app/views/projects.view.html',
			controller: 'ProjectsViewCtrl',
			resolve: {
				ProjectService: "ProjectService",
				project: function(ProjectService, $stateParams) {
					return ProjectService.get($stateParams.id);
				}
			}
		});
	});

}());
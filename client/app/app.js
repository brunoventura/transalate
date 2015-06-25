(function(){

	angular.module('app', [
		'ngRoute'
	])
	
	.constant('API_BASE', '/api/')
	
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider.when('/', {
			templateUrl: 'app/views/dashboard.html'
		}).when('/projects', {
			controller: 'ProjectsCtrl',
			templateUrl: 'app/views/projects.html',
			resolve: {
				all: function(ProjectService) {
					return ProjectService.all();
				}
			}
		}).when('/projects/:id', {
			controller: 'ProjectsViewCtrl',
			templateUrl: 'app/views/projects.view.html',
			resolve: {
				ProjectService: "ProjectService",
				LangService: "LangService",
				project: function(ProjectService, $route) {
					return ProjectService.get($route.current.params.id);
				},
				lang: function(LangService, $route) {
					return LangService.all($route.current.params.id);
				}
			}
		}).otherwise({
			redirectTo: '/'
		});	

		$locationProvider.html5Mode(true);
	})
	

}());
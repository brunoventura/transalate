(function(){

	angular.module('app', [
		'ui.router'
	])

	.config(function ($urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$urlRouterProvider.otherwise("/");
	})

	.constant('API_BASE', '/api/');

}());
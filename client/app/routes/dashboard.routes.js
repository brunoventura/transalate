(function () {

	angular.module('app')

	.config(function ($stateProvider) {
		$stateProvider.state('dashboard', {
			url: '/',
			templateUrl: 'app/views/dashboard.html',
			controller: 'DashboardCtrl'
		});
	})

}());
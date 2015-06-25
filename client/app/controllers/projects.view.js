(function () {

	angular.module('app')
		.controller('ProjectsViewCtrl', ControllerFn);

	ControllerFn.$injector = ['$scope', 'project', 'lang'];
	
	function ControllerFn ($scope, project, lang) {

		_init();

		//Public API
		$scope.save = save;
		$scope.close = close;

		function _init() {
			$scope.project = project.data;
			$scope.project.tree = lang.data.tree;

			$scope.sentence = {};
		}

		function save () {
			if ($scope.form.$valid && !_.has($scope.project.tree, $scope.sentence.name)) {
				$scope.project.tree[$scope.sentence.name] = {}
				_.map($scope.project.lang, function(l) {
					$scope.project.tree[$scope.sentence.name][l] = $scope.sentence[l];
				});

				$scope.sentence = {};
			}
		}

		function close () {
			$scope.newSentence = false;
		}
	}

	

}());
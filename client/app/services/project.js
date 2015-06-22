(function() {

	angular.module('app').factory('ProjectService', serviceFn);

	serviceFn.$inject = ['$http', 'API_BASE'];

	function serviceFn($http, API_BASE) {
		var serviceBase = API_BASE + 'project/';

		var service = {
			all: all
		};

		return service;

		function all() {
			return $http.get(serviceBase).success(_getComplete).error(_getFailed);
		};

		function get(id) {
			return $http.get(serviceBase+id).success(_getComplete).error(_getFailed);
		};

		function _getComplete(response) {
            return response;
        }

        function _getFailed(error) {
            logger.error('Error .' + error.data);
        }
	
	}

})();
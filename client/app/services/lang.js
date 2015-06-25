(function() {

	angular.module('app').factory('LangService', serviceFn);

	serviceFn.$inject = ['$http', 'API_BASE'];

	function serviceFn($http, API_BASE) {
		var serviceBase = API_BASE + 'project/:id/lang';

		var service = {
			all: all,
		};

		return service;

		function all(id) {
			return $http.get(serviceBase.replace(':id', id)).success(_getComplete).error(_getFailed);
		};

		function _getComplete(response) {
            return response;
        }

        function _getFailed(error) {
            logger.error('Error .' + error.data);
        }
	
	}

})();
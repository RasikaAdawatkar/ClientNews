angular.module('clientnewsApp').factory('dataService', ['$http', function($http) {
  var promise;
  var dataService = {
    async: function(Url) {     
        alert("get teh data please...");
        promise = $http.get(Url).then(function (response) {          
          return response.data;
        });     
      return promise;
    }
  };
  return dataService;
}]);


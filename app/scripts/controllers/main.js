'use strict';

/**
 * @ngdoc function
 * @name clientnewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientnewsApp
 */
angular.module('clientnewsApp')
  .controller('MainCtrl', function ($scope, $http, $modal) {
    //dataService.async('/xyz')
    $http.get('../../jsons/location.json')
    .success(function(data, status, headers, config)  {
		console.log(data, status, headers, config);
		//$scope.data = data;
	})
	.error(function(data, status, headers, config) {
		console.log('status is '+status);
		throw new Error('Oh no! An Error!');
		var modalInstance = $modal.open({
      		templateUrl: 'myModalContent.html',
     		controller: 'ModalInstanceCtrl'
    	});
	});
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

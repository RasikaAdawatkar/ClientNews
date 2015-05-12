'use strict';

/**
 * @ngdoc function
 * @name clientnewsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientnewsApp
 */
angular.module('clientnewsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

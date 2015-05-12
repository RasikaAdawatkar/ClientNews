'use strict';

/**
 * @ngdoc overview
 * @name clientnewsApp
 * @description
 * # clientnewsApp
 *
 * Main module of the application.
 */
angular
  .module('clientnewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      /*.when('/myModalContent', {
        templateUrl: 'views/myModalContent.html',
        controller: 'errorCtrl'
      })*/
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

angular.module('clientnewsApp').provider('ErrorService', function () {
  var message = '';
  return {
    $get: function () {
      return {
        setMessage: function (msg) {
          message = msg;
        },
        getMessage: function () {
          return message;
        }
      };
    }
  };
});

angular.module('clientnewsApp').provider('AppFailureNotificationService', function () {
  return {
    $get: function ($rootScope) {
      return {
        trigger: function () {
          $rootScope.showAppError = true;
          //localStorage.removeItem('currentLOP');
        }
      };
    }
  };
});
'use strict';

angular.module('clientnewsApp').factory('BaseInterceptor', function ($q, $location, ErrorService, AppFailureNotificationService) {
  
  function responseError(response) {
    if (response.status === 403) {
      ErrorService.setMessage(response.data);
      $location.path('/unauthorized');
    }
    if (response.status === 500 || response.status === 0) {
      AppFailureNotificationService.trigger();
    }
    if(response.status === 404) {
      ErrorService.setMessage(response.data);
     // $location.path('/unauthorized');
      console.log("response.status is 404..."+response.data);
    }
    return $q.reject(response);
  }

  return {
   
    responseError: responseError
  };
});

angular.module('clientnewsApp').config(function ($httpProvider) {
  $httpProvider.interceptors.push('BaseInterceptor');
});

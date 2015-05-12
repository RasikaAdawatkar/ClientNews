'use strict';

angular.module('clientnewsApp').controller('errorCtrl', function ($scope, ErrorService, $modal) {
  $scope.errorMessage = ErrorService.getMessage();

  var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl'
    });

});
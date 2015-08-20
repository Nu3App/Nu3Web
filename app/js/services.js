var urlService = "http://nu3.unifesp.br/nutri-rest-patient/rest/"
//server test: http://200.144.92.167:8080/nu3

angular.module('nu3', [])
.service('userService', function() {
  var init = function($scope) {
    // Form data for the login modal
    $scope = $scope || $rootScope.$new();
    //$scope.loginData = {};
    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope,
      animation: 'slide-in-up',
      focusFirstInput: false
    }).then(function(modal) {
      $scope.modal = modal;
    });
    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };
    // Open the login modal
    $scope.openLogin = function() {
      $scope.modal.show();
    };
  }
  return {
    init: init
  }
})
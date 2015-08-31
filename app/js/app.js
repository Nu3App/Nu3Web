var user = null;
var nu3 = 

  angular
    .module('nu3', ['ngRoute', 'ngMaterial', 'nu3.controllers', 'nu3.services']);

nu3.config(['$routeProvider', '$mdThemingProvider', '$logProvider', '$httpProvider',
function($routeProvider, $mdThemingProvider, $logProvider, $httpProvider) {
  $httpProvider.defaults.useXDomain=true;
  //delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $logProvider.debugEnabled(true);
  $routeProvider.
    when('/login', {
      templateUrl: 'templates/login.html',
    }).
    when('/photoList', {
      templateUrl: 'templates/photolist.html',
      controller: 'PhotoListCtrl'
    }).
    when('/photoList/:photoId', {
      templateUrl: 'templates/photo-detail.html',
      controller: 'PhoneDetailCtrl'
    }).
    otherwise({
      redirectTo: '/login'
    });

    $mdThemingProvider.theme('default')
                          .primaryPalette('orange')
                          .accentPalette('red');
}]);

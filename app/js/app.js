var nu3Web = 

  angular
    .module('nu3', ['ngRoute', 'ngMaterial', 'angular-carousel', 'nu3.controllers']);

nu3Web.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    }).
    when('/register',{
      templateUrl: 'templates/register.html',
      controller: 'RegisterCtrl'
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
}]);

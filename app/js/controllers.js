angular.module('nu3.controllers', [])

.controller('AppCtrl', ['$mdSidenav', '$mdBottomSheet', '$log', '$q', function() {

}])

.controller('LoginCtrl', ['$mdSidenav', '$mdBottomSheet', '$log', '$q', '$scope', function($scope, $interval) {

  $scope.images = [
            {
              src: "./img/food1.jpg",
              alt: "image 1"
            },
            {
              src: "./img/food2.jpg",
              alt: "image 2"
            },
            {
              src: "./img/food3.jpg",
              alt: "image 3"
            },
            {
              src: "./img/food4.jpg",
              alt: "image 4"
            }
  ];
}])

.controller('RegisterCtrl', function() {

})

.controller('PhotoListCtrl', function() {

})

.controller('PhoneDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.photoId = $routeParams.photoId;

}])


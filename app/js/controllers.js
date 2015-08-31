angular.module('nu3.controllers', [])

.controller('AppCtrl', ['$mdSidenav', '$mdBottomSheet', '$log', '$q', function() {

}])

.controller('LoginCtrl', ['$scope', 'AuthenticationService', function($scope, AuthenticationService) {
  
  $scope.user = {
    email: "teste@teste.com",
    senha: null
  }

  $scope.login = function() {
    AuthenticationService.login($scope.user).then(
        function onFulfilled(result){
          console.log("Usuario logado: " + result.idUsuario);
          result.email = $scope.user.email;
          user = result;
         $scope.user.senha = null;
         window.localStorage['user'] = JSON.stringify(result);
         //DBService.insertUser(result).then(function(){
            console.log("Dados do usuário inseridos no banco de dados..." + JSON.stringify(result));
            window.location.href = "/#/photoList";
         //});
        },
        function onRejected(reason, status){
          //do error handling

          var error = "Falha ao logar, tente novamente.";
          //if (status == 401) {
          //  error = "Invalid Username or Password.";
          //}
          $scope.message = error;
          
        }

      );
  };

}])

.controller('RegisterCtrl', function() {

})

.controller('PhotoListCtrl', ['$scope', function($scope) {
  $scope.username = user.idUsuario;
  $scope.user = {
    email: 'teste@teste'
  }

  $scope.sayHello = function() {
    $scope.greeting = 'Hello ' + $scope.username + '!';
  };
}])

.controller('PhoneDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.photoId = $routeParams.photoId;

}])


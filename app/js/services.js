var urlService = "http://nu3.unifesp.br/nutri-rest-patient/rest/"
//server test: http://200.144.92.167:8080/nu3

angular.module('nu3.services', [])
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

.factory("transformRequestAsFormPost",function() {
        // I prepare the request data for the form post.
        function transformRequest( data, getHeaders ) {
            var headers = getHeaders();
            //headers[ "Content-type" ] = "application/x-www-form-urlencoded; charset=utf-8";
            return( serializeData( data ) );
        }
        // Return the factory value.
        return( transformRequest );
        // ---
        // PRVIATE METHODS.
        // ---
        // I serialize the given Object into a key-value pair string. This
        // method expects an object and will default to the toString() method.
        // --
        // NOTE: This is an atered version of the jQuery.param() method which
        // will serialize a data collection for Form posting.
        // --
        // https://github.com/jquery/jquery/blob/master/src/serialize.js#L45
        function serializeData( data ) {
            // If this is not an object, defer to native stringification.
            if ( ! angular.isObject( data ) ) {
                return( ( data == null ) ? "" : data.toString() );
            }
            var buffer = [];
            // Serialize each key in the object.
            for ( var name in data ) {
                if ( ! data.hasOwnProperty( name ) ) {
                    continue;
                }
                var value = data[ name ];
                buffer.push(
                    encodeURIComponent( name ) +
                    "=" +
                    encodeURIComponent( ( value == null ) ? "" : value )
                );
            }
            // Serialize the buffer and clean it up for transportation.
            var source = buffer
                .join( "&" )
                .replace( /%20/g, "+" )
            ;
            return( source );
        }

    }
)
.factory('AuthenticationService', function($rootScope, $http, transformRequestAsFormPost) {
  $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  function AJAXservice(url, dataE, string){
    var deferred = Q.defer();
    $http.post(url, dataE,{transformRequest: transformRequestAsFormPost})
      .success(function (data) {
        console.log(string + JSON.stringify(data));
        if(url == urlService + "image/obtemResumoImagens"){
          console.log("Recuperando image/obtemResumoImagens " + dataE.millisDataInicio);
          data.stamp = dataE.millisDataInicio;
        }
        deferred.resolve(data);
      })
      .error(function (data, status) {
        console.log("Erro: " + JSON.stringify(data) + " Status: " + status);
        deferred.reject(data, status);
      });
    return deferred.promise
  }
  return {
    login: function(user) {
      user.email = user.email.trim().toLowerCase();
      var url = urlService + "auth/loginUsuario";
      return AJAXservice(url, user, "Login Data: ");
    },
    logout: function(user) {
      $http.post('https://logout', {}, { ignoreAuthModule: true })
      .finally(function(data) {
        //localStorageService.remove('authorizationToken');
        delete $http.defaults.headers.common.Authorization;
        $rootScope.$broadcast('event:auth-logout-complete');
      });     
    },
    register: function(user){
      user.email = user.email.trim().toLowerCase();
      var dataE = {"email" : user.email, "senha" : user.senha, "nome" : user.nome};
      var url = urlService + "auth/criaUsuario";
      return AJAXservice(url, dataE, "Login Data: ");
    },  
    loginCancelled: function() {
      authService.loginCancelled();
    }
  };
})




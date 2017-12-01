(function () {
  'use strict';

  angular
  .module('app')
  .component('login', {
    templateUrl: 'app/components/login/login.html',
    controller: loginCtrl,
    controllerAs: 'vm'
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('login')
      .primaryPalette('purple')
      .accentPalette('pink')
      .warnPalette('red');
  });

  loginCtrl.$inject = ['LoginService', 'CredentialsService', '$state', '$rootScope', 'RegisterService', 'ObtenerUsuario'];

  function loginCtrl(LoginService, CredentialsService, $state, $rootScope, RegisterService, ObtenerUsuario) {
    var vm = this;
    vm.imageUser = 'assets/iconos/studyappXL.png';

    vm.loginError = false;
    vm.credentials = {};
    var user = {};


    vm.login = function (credentials) {
      LoginService.save(credentials, function (data) {
        if(data.token) {
          CredentialsService.setToken(data.token);
          CredentialsService.setUser(data.email);
          $rootScope.$emit('isLogin');
          ObtenerUsuario.get().$promise.then(function (data) {
            user = data.user;
            localStorage.setItem('usuarioLogueado', JSON.stringify(data.user));
            $state.go('administrador', ({usuario: user.nombre_usuario}));
          });

        }else{
          vm.loginError = true;
        }        
      }, function (error) {
        console.log(error);
      });
    };

    vm.registrar = function (usuario) {
      vm.usuario.institucion_id = 1;
      vm.usuario.url_foto_usuario = 'Sin Imagen';
      console.log(usuario);
      RegisterService.save(usuario);
      $state.go('login')
    }
  }
})();

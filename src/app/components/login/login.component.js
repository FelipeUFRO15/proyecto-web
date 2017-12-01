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
    var usuarios = {};
    var usuario = {};
    var user = {};

    vm.login = function (credentials) {
      LoginService.save(credentials, function (data) {
        if(data.token) {
          CredentialsService.setToken(data.token);
          CredentialsService.setUser(data.email);
          $rootScope.$emit('isLogin');
          var usuario = data.email.split('@');

          ObtenerUsuario.get().$promise.then(function (data) {
            user = data.user;
            console.log('Email: ' + user.email + ' nombre: ' + user.nombre_usuario);
            localStorage.setItem('usuarioLogueado', user);
            var local = localStorage.getItem('usuarioLogueado');
            console.log('Local: ' + local.email);
            //JSON.stringify(data)
            $rootScope.$emit('logueado', user);
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

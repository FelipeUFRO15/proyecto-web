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

  loginCtrl.$inject = ['LoginService', 'CredentialsService', '$state', '$rootScope'];

  function loginCtrl(LoginService, CredentialsService, $state, $rootScope) {
    var vm = this;
    vm.imageUser = 'assets/iconos/studyappXL.png';

    vm.loginError = false;
    vm.credentials = {};

    vm.login = function (credentials) {
      LoginService.save(credentials, function (data) {
        if(data.token) {
          CredentialsService.setToken(data.token);
          CredentialsService.setUser(data.email);
          $rootScope.$emit('isLogin');
          $state.go('administrador');
        }else{
          vm.loginError = true;
        }        
      }, function (error) {
        console.log(error);
      });
    };
  }
})();

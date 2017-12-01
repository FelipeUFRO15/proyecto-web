(function () {
  'use-strict';

  angular
  .module('app')
  .component('myNavbar', {
    templateUrl: 'app/components/navbar/navbar.html',
    controller: navbarCtrl,
    controllerAs: 'vm'
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('proyecto')
      .primaryPalette('indigo')
      .accentPalette('teal')
      .warnPalette('pink');
    $mdThemingProvider.theme('tabs')
      .primaryPalette('indigo')
      .accentPalette('green')
      .warnPalette('pink');
  });

  navbarCtrl.$inject = ['CredentialsService', '$rootScope', '$state'];


  function navbarCtrl(CredentialsService, $rootScope, $state) {
    var vm = this;
    vm.user = {};
    vm.user = JSON.parse(localStorage.getItem('usuarioLogueado'));

    vm.isLogged = CredentialsService.isLogged();
    vm.logout = function () {
      CredentialsService.clearCredentials();
      vm.isLogged = false;
      $state.go('login');
    }

    $rootScope.$on('isLogin', function () {
      vm.isLogged = true;
    })
  }
})();

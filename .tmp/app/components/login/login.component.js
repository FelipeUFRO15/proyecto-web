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

  function loginCtrl() {
    var vm = this;
    vm.imageUser = 'assets/iconos/studyappXL.png';
  }
})();

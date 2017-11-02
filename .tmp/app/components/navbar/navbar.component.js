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

  function navbarCtrl() {
    // var vm = this;
  }
})();

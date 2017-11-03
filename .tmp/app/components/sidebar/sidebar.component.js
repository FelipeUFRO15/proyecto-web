(function () {
  'use strict';

  angular
  .module('app')
  .component('mySidebar', {
    templateUrl: 'app/components/sidebar/sidebar.html',
    controller: sidebarCtrl,
    controllerAs: 'vm'
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('sideBar')
      .primaryPalette('teal')
      .accentPalette('pink')
      .warnPalette('red');
  });

  function sidebarCtrl($timeout, $mdSidenav, $log) {
    var vm = this;
    vm.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug('close LEFT is done');
        });
    };
  }
})();

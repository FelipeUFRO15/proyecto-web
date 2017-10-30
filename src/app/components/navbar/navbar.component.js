(function () {
  'use-strict';

  angular
  .module('app')
  .component('myNavbar', {
    templateUrl: 'app/components/navbar/navbar.html',
    controller: navbarCtrl,
    controllerAs: 'vm'
  });

  function navbarCtrl() {
    var vm = this;
  }

})();

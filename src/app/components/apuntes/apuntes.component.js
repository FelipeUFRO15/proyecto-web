(function () {
  'use strict';

  angular
  .module('app')
  .component('apuntes', {
    templateUrl: 'app/components/apuntes/apuntes.html',
    controller: apuntesCtrl,
    controllerAs: 'vm'
  });

  function apuntesCtrl() {
    var vm = this;
    vm.apunte = 0;
  }
})();

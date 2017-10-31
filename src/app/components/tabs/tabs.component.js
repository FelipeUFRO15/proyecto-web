(function () {
  'use-strict';

  angular
  .module('app')
  .component('myTab', {
    templateUrl: 'app/components/tabs/tabs.html',
    controller: tabCtrl,
    controllerAs: 'vm'
  });

  function tabCtrl() {
    // var vm = this;
  }
})();

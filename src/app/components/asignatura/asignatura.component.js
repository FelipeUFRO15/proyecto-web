(function () {
  'use strict';

  angular
	.module('app')
	.component('asignatura', {
  templateUrl: 'app/components/asignatura/asignatura.html',
  controller: asignaturaCtrl,
  controllerAs: 'vm'
});

  function asignaturaCtrl() {
    var vm = this;
    vm.horast = 80;
    vm.horasp = 0;
    vm.mod = function (hora) {
      vm.horasp = (vm.horast * (hora / 100));
    };
  }
})();

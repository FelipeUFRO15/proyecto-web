(function () {
  'use strict';

  angular
  .module('app')
  .component('trabajos', {
    templateUrl: 'app/components/trabajos/trabajos.html',
    controller: trabajosCtrl,
    controllerAs: 'vm'
  });

  function trabajosCtrl() {
    var vm = this;
    vm.trabajo = {
      nombre: '',
      fecha: ''
    };

    vm.trabajos = [];

    vm.addTrabajo = function (modelo) {
      vm.trabajos.push({nombre: modelo.nombre, fecha: modelo.fecha});
    };
  }
})();

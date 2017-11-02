(function () {
  'use strict';

  angular
  .module('app')
  .component('administrator', {
    templateUrl: 'app/components/administrator/administrator.html',
    controller: administratorCtrl,
    controllerAs: 'vm'
  });

  function administratorCtrl() {
    var vm = this;

    vm.asignatura = {
      nombre: '',
      docente: ''
    };

    vm.asignaturas = [];

    vm.add = function (modelo) {
      vm.asignaturas.push({nombre: modelo.nombre, docente: modelo.docente});
    };
  }
})();

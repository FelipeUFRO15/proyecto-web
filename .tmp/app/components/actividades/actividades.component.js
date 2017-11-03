(function () {
  'use strict';

  angular
  .module('app')
  .component('actividades', {
    templateUrl: 'app/components/actividades/actividades.html',
    controller: actividadesCtrl,
    controllerAs: 'vm'
  });

  function actividadesCtrl() {
    var vm = this;
    vm.actividad = {
      nombre: '',
      fecha: ''
    };

    vm.actividades = [];

    vm.addActividad = function (modelo) {
      vm.actividades.push({nombre: modelo.nombre, fecha: modelo.fecha});
    };
  }
})();

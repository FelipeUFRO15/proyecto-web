(function () {
  'use strict';

  angular
  .module('app')
  .component('actividades', {
    templateUrl: 'app/components/actividades/actividades.html',
    controller: actividadesCtrl,
    controllerAs: 'vm'
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('actividad')
      .primaryPalette('purple')
      .accentPalette('pink')
      .warnPalette('red');
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

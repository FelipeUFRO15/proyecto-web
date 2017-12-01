(function () {
  'use strict';

  angular
  .module('app')
  .component('trabajos', {
    templateUrl: 'app/components/trabajos/trabajos.html',
    controller: trabajosCtrl,
    controllerAs: 'vm'
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('trabajo')
      .primaryPalette('purple')
      .accentPalette('pink')
      .warnPalette('red');
  });

  function trabajosCtrl() {
    var vm = this;
    vm.user = {};
    vm.user = JSON.parse(localStorage.getItem('usuarioLogueado'));
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

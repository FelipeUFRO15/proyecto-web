(function () {
  'use strict';

  angular
  .module('app')
  .component('notas', {
    templateUrl: 'app/components/notas/notas.html',
    controller: notasCtrl,
    controllerAs: 'vm'
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('nota')
      .primaryPalette('purple')
      .accentPalette('pink')
      .warnPalette('red');
  });

  function notasCtrl() {
    var vm = this;

    vm.nota = {
      nombre: '',
      valor: '',
      ponderacion: ''
    };

    vm.notas = [];

    vm.addNota = function (modelo) {
      vm.notas.push({nombre: modelo.nombre, valor: modelo.valor, ponderacion: modelo.ponderacion});
    };
  }
})();

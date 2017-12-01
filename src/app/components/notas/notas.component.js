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

  notasCtrl.$inject = ['NotasService', 'ActividadesService'];

  function notasCtrl(NotasService, ActividadesService) {
    var vm = this;
    vm.user = {};
    vm.user = JSON.parse(localStorage.getItem('usuarioLogueado'));
    vm.asignaturaVista = {};
    vm.asignaturaVista = JSON.parse(localStorage.getItem('asignaturaVista'));
    vm.notas = {};
    vm.actividades = {};

    NotasService.query().$promise.then(function (data) {
      vm.notas = data;
    });

    ActividadesService.query().$promise.then(function (data) {
      vm.actividades = data;
    });
    
    vm.notas = [];

    vm.addNota = function (modelo) {
      NotasService.save(vm.nota);
    };
  }
})();

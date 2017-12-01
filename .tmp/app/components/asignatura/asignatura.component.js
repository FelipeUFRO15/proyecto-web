(function () {
  'use strict';

  angular
  .module('app')
  .component('asignatura', {
    templateUrl: 'app/components/asignatura/asignatura.html',
    controller: asignaturaCtrl,
    controllerAs: 'vm'
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('asignatura')
      .primaryPalette('purple')
      .accentPalette('pink')
      .warnPalette('red');
  });

  asignaturaCtrl.$inject = ['AsignaturasService'];

  function asignaturaCtrl(AsignaturasService) {
    var vm = this;
    vm.user = {};
    vm.user = JSON.parse(localStorage.getItem('usuarioLogueado'));
    vm.asignaturaVista = {};
    vm.asignaturaVista = JSON.parse(localStorage.getItem('asignaturaVista'));

    
    vm.promedio = 6.0;
    vm.horast = 80;
    vm.horasp = 0;
    vm.asignatura = {};
    vm.mod = function (hora) {
      vm.horasp = (vm.horast * (hora / 100));
    };

    AsignaturasService.get({id: 1}).$promise.then(function (data) {
      vm.asignatura = data;
    });

    console.log(vm.asignatura);
  }
})();

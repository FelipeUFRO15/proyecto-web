(function () {
  'use strict';

  angular
  .module('app')
  .component('apuntes', {
    templateUrl: 'app/components/apuntes/apuntes.html',
    controller: apuntesCtrl,
    controllerAs: 'vm'
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('apunte')
      .primaryPalette('purple')
      .accentPalette('pink')
      .warnPalette('red');
  });

  apuntesCtrl.$inject = ['ApuntesService', 'AsignaturasService'];

  function apuntesCtrl(ApuntesService, AsignaturasService) {
    var vm = this;
    vm.user = {};
    vm.user = JSON.parse(localStorage.getItem('usuarioLogueado'));
    vm.apuntes = {};
    vm.asignaturas = {};

    ApuntesService.query().$promise.then(function (data) {
      vm.apuntes = data;
    });

    AsignaturasService.query().$promise.then(function (data) {
      vm.asignaturas = data;
    });

    vm.addApunte = function (modelo) {
      vm.apunte.fecha = '2017-12-01';
      ApuntesService.save(apunte);
    };
  }
})();

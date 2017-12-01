(function () {
  'use strict';

  angular
  .module('app')
  .component('administrator', {
    templateUrl: 'app/components/administrator/administrator.html',
    controller: administratorCtrl,
    controllerAs: 'vm'
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('admin')
      .primaryPalette('purple')
      .accentPalette('pink')
      .warnPalette('red');
  });

  administratorCtrl.$inject = ['AsignaturasService', 'DocenteService'];

  function administratorCtrl(AsignaturasService, DocenteService) {
    var vm = this;
    vm.user = {};
    vm.user = JSON.parse(localStorage.getItem('usuarioLogueado'));
    vm.asignaturas = {};
    vm.docentes = {};

    AsignaturasService.query().$promise.then(function (data) {
      vm.asignaturas = data;
    });

    DocenteService.query().$promise.then(function (data) {
      vm.docentes = data;
    });
  
    vm.add = function () {
      vm.asignatura.usuario_id = vm.user.id;
      AsignaturasService.save(vm.asignatura);
    };


  }
})();

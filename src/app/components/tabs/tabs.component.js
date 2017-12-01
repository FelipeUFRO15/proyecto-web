(function () {
  'use-strict';

  angular
  .module('app')
  .component('myTab', {
    templateUrl: 'app/components/tabs/tabs.html',
    controller: tabCtrl,
    controllerAs: 'vm'
  });

  tabCtrl.$inject = ['AsignaturasService', '$state'];

  function tabCtrl(AsignaturasService, $state) {
    var vm = this;
    vm.user = {};
    vm.user = JSON.parse(localStorage.getItem('usuarioLogueado'));
    vm.asignaturaVista = {};
    vm.asignaturaVista = JSON.parse(localStorage.getItem('asignaturaVista'));
    vm.currentNavItem = 'tab' + vm.asignaturaVista.id;

    vm.asignaturas = {};

    AsignaturasService.query().$promise.then(function (data) {
      vm.asignaturas = data;
    });

    vm.agregarAsignatura = function () {
      $state.go('administrador', ({usuario: vm.user.nombre_usuario}));
    };
  }
})();

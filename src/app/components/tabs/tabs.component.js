(function () {
  'use-strict';

  angular
  .module('app')
  .component('myTab', {
    templateUrl: 'app/components/tabs/tabs.html',
    controller: tabCtrl,
    controllerAs: 'vm'
  });

  function tabCtrl($log) {
    var vm = this;
    vm.user = {};
    vm.user = JSON.parse(localStorage.getItem('usuarioLogueado'));
    vm.currentNavItem = 'page1';

    vm.asignaturas = [
      {
        nombre: 'DESARROLLO DE APLICACIONES PARA INTERNET',
        numero: 1,
        link: 'apuntes'
      },
      {
        nombre: 'REDES',
        numero: 2,
        link: 'actividades'
      },
      {
        nombre: 'SISTEMAS DE INFORMACIÓN',
        numero: 3,
        link: 'trabajos'
      }
    ];

    vm.goto = function (page) {
      $log.log('Goto ' + page);
    };

    vm.agregarAsignatura = function () {
      $log.log('agregarAsignatura()');
    };
  }
})();

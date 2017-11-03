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

  function administratorCtrl() {
    var vm = this;

    vm.asignatura = {
      nombre: '',
      docente: ''
    };

    vm.asignaturas = [];

    vm.add = function (modelo) {
      vm.asignaturas.push({nombre: modelo.nombre, docente: modelo.docente});
    };
  }
})();

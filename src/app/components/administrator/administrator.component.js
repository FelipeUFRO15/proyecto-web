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

  administratorCtrl.$inject = ['AsignaturasService'];

  function administratorCtrl(AsignaturasService) {
    var vm = this;

    vm.add = function () {
      vm.usuario = localStorage.getItem('usuarioLogueado');
      console.log('Usuario: ' + vm.usuario.email);
      AsignaturasService.save(vm.asignatura);
    };


  }
})();

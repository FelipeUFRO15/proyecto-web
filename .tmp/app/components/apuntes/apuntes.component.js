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

  function apuntesCtrl() {
    var vm = this;
    vm.user = {};
    vm.user = JSON.parse(localStorage.getItem('usuarioLogueado'));
    vm.apunte = {
      titulo: '',
      fecha: '',
      contenido: ''
    };

    vm.apuntes = [];

    vm.addApunte = function (modelo) {
      vm.apuntes.push({titulo: modelo.titulo, fecha: modelo.fecha, contenido: modelo.contenido});
    };
  }
})();

(function () {
  'use strict';

  angular
  .module('app')
  .component('apuntes', {
    templateUrl: 'app/components/apuntes/apuntes.html',
    controller: apuntesCtrl,
    controllerAs: 'vm'
  });

  function apuntesCtrl() {
    var vm = this;
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

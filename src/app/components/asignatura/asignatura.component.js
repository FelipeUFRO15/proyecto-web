(function() {
	'use strict';

	angular
	.module('app')
	.component('asignatura', {
		templateUrl: 'app/components/asignatura/asignatura.html',
		controller: asignaturaCtrl,
		controllerAs: 'vm'
	});

	function asignaturaCtrl (){
		var vm = this;

    vm.apunte = {
      titulo: '',
      contenido: ''
    };

    vm.apuntes = [];

    vm.addApunte = function (modelo) {
      vm.apuntes.push({titulo: modelo.titulo, contenido: modelo.contenido});
    };

    vm.nota = {
      nombre: '',
      valor: ''
    };

    vm.notas = [];

    vm.addNota = function (modelo) {
      vm.notas.push({nombre: modelo.nombre, valor: modelo.valor});
    };
 	}
})();
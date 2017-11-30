(function () {
  'use strict';

  angular
  .module('app')
  .service('AsignaturasService', asignaturasService);

  asignaturasService.$inject = ['$resource', 'API'];

  function asignaturasService ($resource, API) {
    return $resource(API + 'asignaturas/:id', {id: '@id'}, {
      'update' : {
        'method': 'PUT'
      }
    });
  }
})();
(function () {
  'use strict';

  angular
  .module('app')
  .service('TrabajosService', trabajoservice);

  trabajosService.$inject = ['$resource', 'API'];

  function trabajosService ($resource, API) {
    return $resource(API + 'trabajos/:id', {id: '@id'}, {
      'update' : {
        'method': 'PUT'
      }
    });
  }
})();
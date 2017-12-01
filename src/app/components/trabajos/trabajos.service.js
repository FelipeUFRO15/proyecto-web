(function () {
  'use strict';

  angular
  .module('app')
  .service('TrabajosService', trabajosService);

  trabajosService.$inject = ['$resource', 'API'];

  function trabajosService ($resource, API) {
    return $resource(API + 'trabajos/:id', {id: '@id'}, {
      'update' : {
        'method': 'PUT'
      }
    });
  }
})();
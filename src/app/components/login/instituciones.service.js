(function () {
  'use strict';

  angular
  .module('app')
  .service('InstitucionService', institucionService);

  institucionService.$inject = ['$resource', 'API'];

  function institucionService($resource, API) {
    return $resource(API + 'instituciones/:id', {id: '@id'}, {
      'update' : {
        'method': 'PUT'
      }
    });
  }
})();
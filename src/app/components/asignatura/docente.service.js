(function () {
  'use strict';

  angular
  .module('app')
  .service('DocenteService', docenteService);

  docenteService.$inject = ['$resource', 'API'];

  function docenteService($resource, API) {
    return $resource(API + 'docentes/:id', {id: '@id'}, {
      'update' : {
        'method': 'PUT'
      }
    });
  }
})();
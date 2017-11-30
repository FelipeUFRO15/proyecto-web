(function () {
  'use strict';

  angular
  .module('app')
  .service('NotasService', notasService);

  notasService.$inject = ['$resource', 'API'];

  function notasService ($resource, API) {
    return $resource(API + 'notas/:id', {id: '@id'}, {
      'update' : {
        'method': 'PUT'
      }
    });
  }
})();
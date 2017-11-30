(function () {
  'use strict';

  angular
  .module('app')
  .service('ApuntesService', apuntesService);

  apuntesService.$inject = ['$resource', 'API'];

  function apuntesService ($resource, API) {
    return $resource(API + 'apuntes/:id', {id: '@id'}, {
      'update' : {
        'method': 'PUT'
      }
    });
  }
})();
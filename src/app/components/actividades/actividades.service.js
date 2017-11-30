(function () {
  'use strict';

  angular
  .module('app')
  .service('ActividadesService', actividadesService);

  actividadesService.$inject = ['$resource', 'API'];

  function actividadesService ($resource, API) {
    return $resource(API + 'actividades/:id', {id: '@id'}, {
      'update' : {
        'method': 'PUT'
      }
    });
  }
})();
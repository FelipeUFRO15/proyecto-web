angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('login');

  $stateProvider
    .state('login', {
      url: '/login',
      component: 'login'
    })
    .state('administrador', {
      url: '/user/administrator',
      component: 'administrator'
    })
    .state('apuntes', {
      url: '/user/apuntes',
      component: 'apuntes'
    })
    .state('asignatura', {
      url: '/user/asignatura',
      component: 'asignatura'
    })
    .state('notas', {
      url: '/user/notas',
      component: 'notas'
    })
    .state('actividades', {
      url: '/user/actividades',
      component: 'actividades'
    })
    .state('trabajos', {
      url: '/user/trabajos',
      component: 'trabajos'
    });
}

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
    .state('principal', {
      url: '/tabs',
      component: 'myTab'
    })
    .state('administrador', {
      url: '/administrator',
      component: 'administrator'
    })
    .state('sideBar', {
      url: '/sideBar',
      component: 'mySidebar'
    })
    .state('apuntes', {
      url: '/apuntes',
      component: 'apuntes'
    });
}

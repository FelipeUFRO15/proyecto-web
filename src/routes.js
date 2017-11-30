angular
  .module('app')
  .config(routesConfig)
  .run(middlewareConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('login');

  $stateProvider
    .state('login', {
      url: '/login',
      component: 'login',
      isPrivate: false
    })
    .state('administrador', {
      url: '/user/administrator',
      component: 'administrator',
      isPrivate: true
    })
    .state('apuntes', {
      url: '/user/apuntes',
      component: 'apuntes',
      isPrivate: true
    })
    .state('asignatura', {
      url: '/user/asignatura',
      component: 'asignatura',
      isPrivate: true
    })
    .state('notas', {
      url: '/user/notas',
      component: 'notas',
      isPrivate: true
    })
    .state('actividades', {
      url: '/user/actividades',
      component: 'actividades',
      isPrivate: true
    })
    .state('trabajos', {
      url: '/user/trabajos',
      component: 'trabajos',
      isPrivate: true
    });

    $httpProvider.interceptors.push('InterceptorApi');

}

function middlewareConfig($state, CredentialsService, $transitions) {
  $transitions.onStart({}, function (trans) {
    var isPrivate =  trans.$to.isPrivate;
    var to = trans.$to().name;

    if (isPrivate && !CredentialsService.isLogged()) {
      $state.go('login');
    }

    if (to === 'login' && CredentialsService.isLogged()) {
      $state.go('administrator');
    }
  })
}

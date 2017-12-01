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
      url: '/:usuario/administrator',
      component: 'administrator',
      isPrivate: true
    })
    .state('apuntes', {
      url: '/:usuario/apuntes',
      component: 'apuntes',
      isPrivate: true
    })
    .state('asignatura', {
      url: '/:usuario/:asignatura',
      component: 'asignatura',
      isPrivate: true
    })
    .state('notas', {
      url: '/:usuario/notas',
      component: 'notas',
      isPrivate: true
    })
    .state('actividades', {
      url: '/:usuario/actividades',
      component: 'actividades',
      isPrivate: true
    })
    .state('trabajos', {
      url: '/:usuario/trabajos',
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

angular
  .module('app', ['ui.router', 'ngMaterial', 'ngResource'])
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('proyecto')
      .primaryPalette('indigo')
      .accentPalette('teal')
      .warnPalette('pink');
  });

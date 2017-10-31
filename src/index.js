angular
  .module('app', ['ui.router', 'ngMaterial', 'ngResource'])
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('proyecto')
      .primaryPalette('indigo')
      .accentPalette('teal')
      .warnPalette('pink');
    $mdThemingProvider.theme('tabs')
      .primaryPalette('indigo')
      .accentPalette('green')
      .warnPalette('pink');
  });

'use strict';

angular.module('arcfixsearchApp', ['arcfixsearchApp.auth', 'arcfixsearchApp.admin',
    'arcfixsearchApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router',
    'ui.bootstrap', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });

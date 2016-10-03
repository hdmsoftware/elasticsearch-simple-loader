'use strict';

angular.module('arcfixsearchApp.auth', ['arcfixsearchApp.constants', 'arcfixsearchApp.util',
    'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

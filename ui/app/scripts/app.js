'use strict';

/**
 * @ngdoc overview
 * @name homeAutomationApp
 * @description
 * # homeAutomationApp
 *
 * Main module of the application.
 */
angular
  .module('homeAutomationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/listAvailableServices', {
        templateUrl: 'views/listAailableServices.html',
        controller: 'ListAvailableservicesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

/**
 * @ngdoc function
 * @name homeAutomationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the homeAutomationApp
 */
angular.module('homeAutomationApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

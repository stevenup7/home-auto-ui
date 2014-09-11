'use strict';

/**
 * @ngdoc function
 * @name homeAutomationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the homeAutomationApp
 */

angular.module('homeAutomationApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

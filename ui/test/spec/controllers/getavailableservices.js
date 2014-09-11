'use strict';

describe('Controller: GetavailableservicesCtrl', function () {

  // load the controller's module
  beforeEach(module('homeAutomationApp'));

  var GetavailableservicesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GetavailableservicesCtrl = $controller('GetavailableservicesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

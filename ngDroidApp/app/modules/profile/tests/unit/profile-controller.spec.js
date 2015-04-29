'use strict';

describe('Controller: ProfileController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('profile'));

    var ProfileController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ProfileController = $controller('ProfileController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});

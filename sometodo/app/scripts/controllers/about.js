'use strict';

/**
 * @ngdoc function
 * @name sometodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sometodoApp
 */
angular.module('sometodoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

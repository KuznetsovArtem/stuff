'use strict';

/**
 * @ngdoc function
 * @name sometodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sometodoApp
 */
angular.module('sometodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

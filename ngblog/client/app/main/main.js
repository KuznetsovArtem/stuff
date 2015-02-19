'use strict';

angular.module('ngblogApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .when('/item', {
                templateUrl: 'app/item/item.html'
            });
  });
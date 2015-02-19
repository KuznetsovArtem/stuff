'use strict';

angular.module('ngblogApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

    .controller('blogPostCtrl', function($routeParams) {
        var posts = [this.entry = {
            id: 1,
            title: 'Some Post #1',
            body: 'YooHoo, blog body',
            created: new Date()
        },{
            id: 2,
            title: 'Some Post #2',
            body: 'I\'ll be in mongodb',
            created: new Date()
        },{
            id: 3,
            title: 'Post #3',
            body: 'blah-blah-blah',
            created: new Date()
        },{
            id: 4,
            title: 'Post #4',
            body: 'O_O',
            created: new Date()
        }];
        this.entry = posts[$routeParams.id];
        return this;
    })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });
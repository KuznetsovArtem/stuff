/**
 * Created by askuznetsov on 2/19/2015.
 */
'use strict';

angular.module('ngblogApp')
    .controller('BlogPostCtrl', function ($scope, $http) {
        $scope.posts = [];

        $http.get('/api/bp').success(function(posts) {
            $scope.posts = posts;
            console.log(posts);
        });

        $scope.addPost = function() {
            if($scope.post.title === '') {
                return;
            }
            $http.post('/api/bp', {
                title: $scope.post.title,
                body: $scope.post.body
            });
            $scope.post = {};
        };

//        $scope.deleteThing = function(thing) {
//            $http.delete('/api/things/' + thing._id);
//        };
    })
    .controller('postPageCtrl', function($http, $routeParams) {
        var that = this;

        this.editorOptions = {
            language: 'ru',
            uiColor: '#000000'
        };

        $http.get('/api/bp/' + $routeParams.id).success(function(post) {
            that.entry = post;
        });

        return that;
    });

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
    .controller('blogPostCtrl', function($http, $routeParams, $sce) {
        var that = this;

        $http.get('/api/bp/' + $routeParams.id).success(function(post) {
            that.entry = post;
        });

//        var posts = [this.entry = {
//            id: 1,
//            title: 'Some Post #1',
//            body: 'YooHoo, blog body',
//            created: new Date()
//        },{
//            id: 2,
//            title: 'Some Post #2',
//            body: 'I\'ll be in mongodb',
//            created: new Date()
//        },{
//            id: 3,
//            title: 'Post #3',
//            body: 'blah-blah-blah',
//            created: new Date()
//        },{
//            id: 4,
//            title: 'Post #4',
//            body: 'O_O',
//            created: new Date()
//        }];
//        this.entry = posts[$routeParams.id];
        return that;
    });

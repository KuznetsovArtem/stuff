/**
 * Created by askuznetsov on 2/19/2015.
 */
angular.module('ngblogApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/post/new', {
                templateUrl: 'app/blogpost/new.html',
                controller: 'BlogPostCtrl'
            })
            .when('/post/:id?', {
                templateUrl: 'app/blogpost/post.html',
                controller: 'blogPostCtrl',
                controllerAs: 'post'
            })
            .when('/item', {
                templateUrl: 'app/item/item.html'
            });
    });

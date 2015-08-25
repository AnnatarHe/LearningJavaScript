var article = angular.module('article',['ngAnimate', 'ngRoute']);
article.controller('hi',['$scope',function($scope) {
        }])
        .controller('ArticleListController', ['$scope', '$http', function($scope, $http) {
          $scope.articles = $http({
            url: '/fake/articles.json',
            method: 'GET'
          });
          console.log($scope.articles);
        }]);
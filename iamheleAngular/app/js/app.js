var article = angular.module('article',['ngAnimate', 'ngRoute']);
article.controller('hi',['$scope',function($scope) {
  $scope.title = 'hi';
  $scope.hi = 'dddddd';
}]);
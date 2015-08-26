var blog = angular.module('blog', ['ngAnimate', 'ngRoute']);
blog.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/articles', {
    templateUrl: '/dist/scripts/partials/articles.html',
    controller: 'ArticlesController'
  })
  .otherwise({
    redirectTo: '/articles'
  })
}])
.controller('listsController' ,['$scope', '$http', function($scope, $http) {
  let a = 1;
}])
.controller('ArticlesController', ['$scope',function($scope) {

}]);
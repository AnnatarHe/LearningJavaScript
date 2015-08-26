var blog = angular.module('blog', ['ngAnimate', 'ngRoute']);
blog.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/articles', {
    templateUrl: '/dist/scripts/partials/articles.html',
    controller: 'ArticlesController'
  })
  .when('/articles/:articleId', {
    templateUrl: '/dist/scripts/partials/detail.html',
    controller: 'DetailController'
  })
  .when('/about', {
    templateUrl: '/dist/scripts/partials/about.html',
    controller: 'AboutController'
  })
  .otherwise({
    redirectTo: '/articles'
  });
}])
.controller('listsController' ,['$scope', '$http', function($scope, $http) {
  let a = 1;
}])
.controller('ArticlesController', ['$scope',function($scope) {

}])
.controller('DetailController', ['$scope', '$http', '$routeParams', function() {
  console.log($routeParams.articleId);
}])
.controller('AboutController', ['$scope', function() {
  
}])
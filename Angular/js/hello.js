var hellomodule=angular.module('hello',[]);
hellomodule.controller('Hello',['$scope',function($scope){
	$scope.greeting='hello';
}]);

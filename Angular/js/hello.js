// function Hello($scope) {
// 	$scope.greeting = {
// 		text: 'Hello'
// 	};
// }
// angular.module('ngApp', []).controller('Hello',
// 	function ($scope) {
// 		$scope.greeting = {
// 			text:'Hello'
// 		}
// 	}
// );
angular.module('hello',[]).controller('Hello',['$scope',function($scope){
	$scope.greeting='hello';
}]);
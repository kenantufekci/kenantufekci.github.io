var myApp = angular.module('myApp',[]);

myApp.controller('HomeController', ['$scope', '$http', '$interval', '$log', '$anchorScroll', '$location', function($scope, $http, $interval, $log, $anchorScroll, $location) {

    $scope.greeting = 'Hola!';

}]);

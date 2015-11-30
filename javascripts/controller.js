'use strict'

var app = angular.module('project', ['angularUtils.directives.dirPagination']);

app.controller('listController', function($scope,$http,$timeout) {

  $scope.currentPage = 1;
  $scope.pageSize = 5;
  // data 陣列名稱宣告
  $scope.tallys = [];
  $scope.books = [];

  // import json-a
  $http.get('/json/talk01-01.json').success(function(data) {
    $scope.tallys = data;
    $('.polis-list').delay(500).fadeIn('slow');
  });

  // import json-b
  $http.get('/json/talk01-02.json').success(function(data) {
    $scope.books = data;
    $('.polis-list').delay(500).fadeIn('slow');
  });

});

app.controller('paginationController', function($scope) {
  $scope.pageChangeHandler = function(num) {
  };
});

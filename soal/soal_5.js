var testangular = angular.module('testangular',[
  'ngCookies'
]);
testangular.controller('soal_5', ['$scope', '$cookieStore', function($scope, $cookieStore){
  $scope.struktur_list = {
    nama:'NoName',
  };
  $scope.  = angular.copy($scope.struktur_list.nama);
  $scope.list = [
    $scope.struktur_list,
    $scope.struktur_list,
    $scope.struktur_list,
    $scope.struktur_list,
  ];
}]);

var testangular = angular.module('testangular', []);

testangular.controller('soal_4', ['$scope', function($scope) {
	$scope.user = 0;
    $scope.namaKaryawan = ["Budy","Icha","Fajar","Candra","Anton","Winny","Danu"];
    $scope.namaKaryawanKeys = Object.keys($scope.namaKaryawan);
}]);
var sismiop = angular.module('sismiop', ['ngCookies']);

sismiop.controller('menu', ['$scope', '$cookieStore', function($scope, $cookieStore) {
    $scope.kasus = 'ingat';
    $scope.namaUser = {
        pertama: 'rOhCmat',
    };
    $scope.uang = 0;
    console.log($cookieStore.get('val'));
    $scope.saveCookie = function() {
        $cookieStore.put('val','Terisi');
    };
    $scope.removeCookie = function() {
        $cookieStore.remove('val');
    }
}]);
sismiop.controller('inputan', ['$scope', function($scope) {
    $scope.inputStatis = 'Rahmadhany';
    $scope.inputSelect = '0';
    $scope.dataSelection = {
        '0': '-- Pilih Makanan Favorit -- ',
        '1': 'French Fries',
        '2': 'Steak',
        '3': 'Toast',
        '4': 'Froyo',
        '5': 'Pina Colada',
    };
    $scope.dataSelectionKeys = Object.keys($scope.dataSelection);
    $scope.intputCheckbox = false;

    $scope.inputNumber = 0;
    $scope.tanggalJadian = new Date();
    $scope.inputTime = new Date();

    $scope.inputPaste = false;
    $scope.inputCut = false;
    $scope.inputCopy = false;
}]);
sismiop.controller('submenu', ['$scope', '$http', function($scope, $http) {
    $scope.kasus = 'lupa';
    $scope.list = [{
        nama: '',
        umur: ''
    }, {
        nama: '',
        umur: ''
    }, {
        nama: '',
        umur: ''
    }, {
        nama: '',
        umur: ''
    }, {
        nama: '',
        umur: ''
    }, ];
    $scope.submit = function() {
        $http({
            method: 'POST',
            url: 'ping.php',
            data: $.param({
                list: $scope.list
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function(response) {
            console.log(response.data);
        });
    };
}]);

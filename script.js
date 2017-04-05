var sismiop = angular.module('sismiop', []);

sismiop.controller('menu', ['$scope', function($scope) {
    $scope.kasus = 'ingat';
    $scope.namaUser = '';
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
}]);
sismiop.controller('submenu', ['$scope', '$http', function($scope, $http) {
    $scope.kasus = 'lupa';
    $scope.list = [{
            nama: '',
            umur: ''
        },
        {
            nama: '',
            umur: ''
        },
        {
            nama: '',
            umur: ''
        },
        {
            nama: '',
            umur: ''
        },
        {
            nama: '',
            umur: ''
        },
    ];
    $scope.submit = function() {
        $http({
            method: 'POST',
            url: 'ping.php',
            data: $.param({
              list:$scope.list
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function(response) {
            console.log(response.data);
        });
    };
}]);

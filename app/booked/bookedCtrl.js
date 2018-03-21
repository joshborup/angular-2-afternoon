angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrvc){
    mainSrvc.getPackageInfo().then(function(response){
        $scope.allPackages = response.data;

        if($stateParams.id){
            $scope.packagesIndex = $scope.allPackages.findIndex(function(package){
                return package.id === parseInt($stateParams.id);
            })

            if($scope.packagesIndex !== -1){
                $scope.package = $scope.allPackages[$scope.packagesIndex];
            }
        }
    })
})
angular
    .module('app', [ 'mp.colorPicker' ])
    .controller('mainController', MainController)
;

//  controller inject
MainController.$inject = ['$scope'];


function MainController($scope) {
    $scope.color = "#ffffff";
    $scope.recent = [];

    $scope.init = function() {
        $scope.recent = ['#ff0000', '#ff3000', '#ff5000', '#ff7000', '#ff9000', '#ffb000', '#ffd000', '#fff000'];

    };
}

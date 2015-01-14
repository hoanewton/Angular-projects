angular.module('madLib', ['ngMessages'])
   .controller('MadLibCtrl',['$scope',function($scope) {
     $scope.formInvalid = false;
     $scope.formSubmitted = false;
     // $scope.gender = true;
     
   		$scope.generateMadLib = function(form){ 
        if (form.$invalid){
          $scope.formInvalid = true;
          $scope.formSubmitted = true;
          $scope.formValid = false;
          console.log(madLibForm.$invalid);
          console.log('Hey, it is not valid');
        } else {
          console.log('form is valid yo');
          $scope.formInvalid = false;
          $scope.formValid = true; // always needs tobe set to "true" like this
        }
       };

   		$scope.reset = function() {
        console.log('reset bro')
        $scope.madLibForm.$setPristine();
        $scope.formValid = false;
        $scope.formSubmitted = false;
        $scope.formInvalid = false;
        $scope.data = {};
        $scope.gender = true;
   		};
      
    }]);
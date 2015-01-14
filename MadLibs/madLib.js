angular.module('madLib', ['ngMessages'])
   .controller('MadLibCtrl',['$scope',function($scope) {
     $scope.formSubmitted = false;
     $scope.formInvalid = true;
     // $scope.gender = true;

   		$scope.generateMadLib = function(form){ 
        if (form.$invalid){
          $scope.formInvalid = true;
          $scope.formSubmitted = true;
          $scope.formValid = false;

          console.log('Hey, it is not valid');
        } else {
          console.log('form is valid yo');
          if($scope.data.gender == 'male'){
            $scope.data.pronoun = "he";
            $scope.data.pPronoun = "his";
            $scope.data.pn = "him";
          } else {
            $scope.data.pronoun = "she";
            $scope.data.pPronoun = "her";
            $scope.data.pn = "her";
          }
          console.log()
          $scope.formInvalid = false;
          $scope.formValid = true; // always needs tobe set to "true" like this
        }
       };

   		$scope.reset = function() {
        console.log('reset bro')
        $scope.madLibForm.$setPristine();
        $scope.formValid = false;
        $scope.formSubmitted = false;
        $scope.formInvalid = true;
        $scope.data = {};
        // $scope.gender = true;
   		};
      
    }]);
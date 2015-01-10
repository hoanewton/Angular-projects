angular.module('madLib', ['ngMessages'])
   .controller('MadLibCtrl',['$scope',function($scope) {
     $scope.formInvalid = false;
     
   		$scope.generateMadLib = function(form){ 
        if (madLibForm.$invalid){
          $scope.formInvalid = true;
        } else {
          console.log('hello');
          $scope.formSubmitted = true;
        }
       };

   		$scope.reset = function() {
        $scope.madLibForm.$setPristine();
        $scope.formSubmitted = false;
        $scope.data = {};
   		};
      
    }]);

// <button class="btn btn-primary" type="reset" ng-click="captchaForm.$setPristine()">Reset</button>
// <button type="submit" id="submit_button" class="btn btn-success btn-primary" ng-click="doSubmit(captchaForm)">

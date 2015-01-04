angular.module('madLib', ['ngMessages'])
   .controller('MadLibCtrl',['$scope',function($scope) {
   		$scope.generate = function(form){ 
	   		
            $scope.submitted == true;

         }

         // $scope.submit = function(form){ 
         
         // },

   		// $scope.reset = function() {
   		// 	console.log('Trying to switch Views here!')

   		// 	// $scope.data.personName = "";
   		// 	// $scope.data.jobTitle = "";
   		// 	// $scope.data.tediousTask = "";
   		// 	// $scope.data.dirtyTask = "";
   		// 	// $scope.data.uselessSkill = "";
   		// 	// $scope.data.celebrity = "";
   		// 	// $scope.data.adjective = "";
   		// 	// $scope.data.obnoxiousCelebrity = "";
   		// 	// $scope.data.hugeNumber = "";
   		// 	$scope.madLibForm.$submitted = false;
     //        $scope.madLibForm.$setPristine();
   		// }

    }]);

// <button class="btn btn-primary" type="reset" ng-click="captchaForm.$setPristine()">Reset</button>
// <button type="submit" id="submit_button" class="btn btn-success btn-primary" ng-click="doSubmit(captchaForm)">

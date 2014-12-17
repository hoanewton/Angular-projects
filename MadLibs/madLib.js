angular.module('madLib', ['ngMessages'])
   .controller('MadLibCtrl', ['$scope', function($scope) {
   		$scope.submit = function(){ 
	   		if( $scope.madLibForm.$valid ) {
	   		 console.log('The form is valid'); 

	   		 $('.words-container').hide();
	   		 $('.paragraph-container').show();
	   		} else {
   			 console.log(madLibForm.$error);
	   		 console.log('The form is invalid');

	   		 $('.words-container').show();
	   		 $('.paragraph-container').hide(); 

	   		}
   		},

   		$scope.switchViews = function() {
   			console.log('Trying to switch Views here. Damn it!')
   			$scope.data.personName = "";
   			$scope.data.jobTitle = "";
   			$scope.data.tediousTask = "";
   			$scope.data.dirtyTask = "";
   			$scope.data.uselessSkill = "";
   			$scope.data.celebrity = "";
   			$scope.data.adjective = "";
   			$scope.data.obnoxiousCelebrity = "";
   			$scope.data.hugeNumber = "";
   			$scope.madLibForm.$submitted = false;
   			
   			$('.words-container').show();
	   		$('.paragraph-container').hide(); 
   		}

    }]);



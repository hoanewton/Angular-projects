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
   			$scope.personName = "";
   			$scope.jobTitle = "";
   			$scope.tediousTask = "";
   			$scope.dirtyTask = "";
   			$scope.celebrity = "";

   			$('.words-container').show();
	   		$('.paragraph-container').hide(); 
   		}

    }]);



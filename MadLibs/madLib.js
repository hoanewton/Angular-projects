angular.module('madLib', ['ngMessages'])
   .controller('MadLibCtrl', function($scope) {
   		$scope.submit = function(){ 

   			console.log($scope.data); 
   			console.log($scope.madLibForm); 

	   		if( $scope.madLibForm.$valid ) {
	   		 console.log('The form is valid'); 
	   		} else {
	   		 console.log('The form is invalid'); 
	   		}

   		}
    });



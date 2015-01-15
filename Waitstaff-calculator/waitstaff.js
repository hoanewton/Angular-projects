angular.module('waitstaff', ['ngMessages'])
   .controller('WaitstaffCtrl', ['$scope', function($scope) {

   	var price;
   	var taxAmount;
   	var tipAmount;
   	var subTotal;
   	var tipTotal;
   	mealCount = 0;

   	$scope.submit = function(form) {
   			console.log('submitted');
   		form.$submitted = true;
   			console.log(form.$submitted);

   		if (form.$valid) {
   			mealCount += 1;
   			console.log(mealCount);
   		}
   	}


   	$scope.taxAmount = function(price, taxPercentage) {
   		return price * taxPercentage / 100;
   	},

   	$scope.tipAmount = function(price, tipPercentage) {
   		return tipAmount = price * tipPercentage / 100;
   	},

   	$scope.subTotal = function(price, taxPercentage) {
   		return subTotal = ((price * taxPercentage / 100) + price);
   	},

   	$scope.total = function() {
   		return subTotal + tipAmount;
   	},

   	$scope.tipTotal = function() {
   		return tipTotal = tipTotal + tipAmount;
   	}



  }]);
      // $scope.$on('displayData', function(event, data) {
      //     $scope.content = data;
      // });

 //   .controller('MultiplicationCtrl', function($scope, $attrs, $rootScope) {
 //      function polulateNumbers (x) {
 //      	var numbers = [];
 //      	for (var i=0; i<x; i++) {
 //      		numbers[i] = i+1;
 //      	};
 //      	return numbers;
 //      }

 //      $scope.compute = function(a, b) {
 //            return a * b;
 //      };
 //      $scope.$watch('numberLimit', function(limit) {
 //         $scope.numbers = polulateNumbers(limit);
 //      });
 //      $scope.numberLimit = $attrs.initialNumberLimit || 10;

 //      var activeFactorA, activeFactorB;
 //      $scope.setActiveFactors = function(a, b) {
 //         activeFactorA = a;
 //         activeFactorB = b;
 //      };
 //      $scope.matchesFactor = function (a, b) {
 //         return a === activeFactorA || b === activeFactorB;
 //      };

 //      $scope.clearActiveFactors = function() {
 //         activeFactorA = activeFactorB = null;
 //      };

 //      $scope.setActiveNumber = function(number) {
 //        $rootScope.$broadcast('displayData', number);
 //      };
 // });

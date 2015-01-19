angular.module('waitstaff', ['ngMessages'])
   .controller('WaitstaffCtrl', ['$scope', function($scope) {
      
    $scope.setDefaultForm = function(){
      $scope.data = {
        mealPrice: 0,
        taxRate: 0,
        tipRate: 0
      }
    }(),
   	

   	$scope.mealCount = 0,
   	$scope.formValid = false,
   	$scope.formSubmitted = false,
    $scope.subTotal = 0,
    $scope.tipAmount = 0,
    $scope.taxAmount = 0,
    $scope.total = 0,

   	$scope.submit = function(form) {
   		$scope.formSubmitted = true;
   		
   		if (form.$valid) {
   			$scope.formValid = true;
   			$scope.mealCount += 1;
   			form.$setPristine();
        $scope.setDefaultForm;
   			$scope.formSubmitted = false;
   		}
   	},

   	$scope.cancel = function(form) {
   			console.log('canceled');
   			form.$setPristine();
   			$scope.setDefaultForm();
   	},

//    	$scope.taxAmount = function(price, taxPercentage) {
//    		return price * taxPercentage / 100;
//    	},

   	$scope.tipAmount = function(price, tipPercentage) {
   		return tipAmount = price * tipPercentage / 100;
   	},

   	$scope.calculateSubtotal = function() {
   		$scope.subTotal = (($scope.data.mealPrice * $scope.data.taxRate / 100) +               $scope.data.mealPrice);
       $scope.calculateTotal();
   	},
      
    $scope.calculateTaxAmount = function() {
      $scope.taxAmount = $scope.data.mealPrice * $scope.data.taxRate / 100;
    },
      
    $scope.calculateTipAmount = function() {
      $scope.tipAmount = $scope.data.mealPrice * $scope.data.tipRate / 100;
      $scope.calculateTotal();
    },

   	$scope.calculateTotal = function() {
   		  $scope.total = $scope.subTotal + $scope.tipAmount;
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

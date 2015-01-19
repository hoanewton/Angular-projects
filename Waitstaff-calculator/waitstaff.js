angular.module('waitstaff', ['ngMessages'])
   .controller('WaitstaffCtrl', ['$scope', function($scope) {
      
    $scope.setDefaultForm = function(){
      $scope.data = {
        mealPrice: 0,
        taxRate: 0,
        tipRate: 0
      }
    },
   	$scope.setDefaultForm(),

   	$scope.mealCount = 0,
   	$scope.formValid = false,
   	$scope.formSubmitted = false,
    $scope.subTotal = 0,
    $scope.tipAmount = 0,
    $scope.taxAmount = 0,
    $scope.total = 0,
    $scope.tipTotal = 0,
    $scope.averageTipPerMeal = 0,

   	$scope.submit = function() {
   		$scope.formSubmitted = true;
   		
   		if ($scope.waitstaffForm.$valid) {
   			$scope.formValid = true;
   			$scope.mealCount += 1;
   			$scope.waitstaffForm.$setPristine();
        $scope.setDefaultForm();
   			$scope.formSubmitted = false;

   			$scope.calculateTipTotal();
   			$scope.calculateAverageTipPerMeal();
   		}
   	},

   	$scope.cancel = function() {
 			$scope.waitstaffForm.$setPristine();
 			$scope.setDefaultForm();
   	},

   	$scope.calculateSubtotal = function() {
      $scope.calculateTotal();
   		
   		if ($scope.waitstaffForm.$invalid) {
   			return 0;
   		} else {
   			return $scope.subTotal = (($scope.data.mealPrice * $scope.data.taxRate / 100) + $scope.data.mealPrice);
   		}
   	},
      
    $scope.calculateTaxAmount = function() {
      $scope.taxAmount = $scope.data.mealPrice * $scope.data.taxRate / 100;
    },
      
    $scope.calculateTipAmount = function() {
	      $scope.calculateTotal();

      if ($scope.waitstaffForm.$invalid) {
   			return 0;
   		} else {
   			return $scope.tipAmount = $scope.data.mealPrice * $scope.data.tipRate / 100;
   		}
    },

   	$scope.calculateTotal = function() {
   		  $scope.total = $scope.subTotal + $scope.tipAmount;
   	},

   	$scope.calculateTipTotal = function() {
   		return $scope.tipTotal += $scope.tipAmount;
   	},

   	$scope.calculateAverageTipPerMeal = function () {
   		return $scope.averageTipPerMeal = $scope.tipTotal / $scope.mealCount;
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

angular.module('waitstaff', ['ngMessages'])
   .controller('WaitstaffCtrl', ['$scope', function($scope) {
      
    $scope.setDefaultForm = function(){
      $scope.data = {
        mealPrice: 0,
        taxRate: 0,
        tipRate: 0
      }
    }(),
   	

   	$scope.formValid = false,
   	$scope.formSubmitted = false,
    $scope.subTotal = 0,
    $scope.tipAmount = 0,
    $scope.taxAmount = 0,
    $scope.total = 0,
    $scope.tipTotal = 0,
   	$scope.mealCount = 0,
    $scope.averageTipPerMeal = 0,

   	$scope.submit = function() {
   		$scope.formSubmitted = true;
   		
   		if ($scope.waitstaffForm.$valid) {
   			$scope.formValid = true;
        $scope.setDefaultForm;
   			$scope.waitstaffForm.$setPristine();
   			$scope.formSubmitted = false;
   			$scope.calculateTipAmount();
   			$scope.calculateTipTotal();
   			$scope.calculateMealCount();
   			$scope.calculateAverageTipPerMeal();
   		}
   	},

   	$scope.cancel = function() {
			$scope.waitstaffForm.$setPristine();
			$scope.setDefaultForm;
   	},

   	$scope.reset = function() {
   		$scope.setDefaultForm;
   		$scope.formValid = false,
	   	$scope.formSubmitted = false,
	    $scope.subTotal = 0,
	    $scope.tipAmount = 0,
	    $scope.taxAmount = 0,
	    $scope.total = 0,
	    $scope.tipTotal = 0,
	   	$scope.mealCount = 0,
	    $scope.averageTipPerMeal = 0
   	},

   	$scope.calculateTipAmount = function() {
   		$scope.tipAmount = $scope.data.mealPrice * $scope.data.tipRate / 100;
   	},

   	$scope.calculateSubtotal = function() {
   		$scope.subTotal = ($scope.data.mealPrice * $scope.data.taxRate / 100) + $scope.data.mealPrice;
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

   	$scope.calculateTipTotal = function () {
   		$scope.tipTotal += $scope.tipAmount;
   	},

   	$scope.calculateMealCount = function () {
   		$scope.mealCount += 1;
   	},

   	$scope.calculateAverageTipPerMeal = function () {
   		$scope.averageTipPerMeal = $scope.tipTotal / $scope.mealCount;
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

var app = angular.module('petModule', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when ('/',
	{
		templateUrl: 'pets/cat.html',
		controller: 'petCtrl'		
	})
	.when ('/pets/dog',
	{
		templateUrl: 'pets/dog.html',
		controller: 'petCtrl'
	})
	.when ('/pets/hamster',
	{
		templateUrl: 'pets/hamster.html',
		controller: 'petCtrl'
	})
		.when ('/pets/anteater',
	{
		templateUrl: 'pets/anteater.html',
		controller: 'petCtrl'
	})
	.otherwise({ redirectTo: '/'})

	// add barking on dog page
// app.controller('bark', function($scope, $interval) {
//       // array for text 
//       var $scope.bark = ['woof!', 'arf!', 'bark!', 'BARK! BARK! BARK!', 'Hoooooooowwwl'];
//    		//array for styles
//       var $scope.barkStyles = ['doberman', 'spaniel', 'lab']; 
//    		// an array to hold the text and it's style
//       $scope.barkArray = []; // empty array
//       $interval = 3000;

//       $scope.addContent = function (){
//         // create object
//         var barking = {};
//         // text property of above object
//         barking.text = $scope.bark[Math.floor(Math.random() * $scope.bark.length)];
        
//         // style property of barking object
//         barking.style = $scope.barkStyles[Math.floor(Math.random() * $scope.barkStyles.length)];
//       	}
//   		// push barking object into barkArray to continue adding content
//         $scope.barkArray.push(barking);
// //       
// 			// stop the barking
// 			//var stop;
// //         $scope.bark = function() {
// //           if ( angular.isDefined(stop) ) return;
// //       	}
// //         $scope.stopBark = function() {
// //           if (angular.isDefined(stop)) {
// //             $interval.cancel(stop);
// //             stop = undefined;
// //           }
//         }());
 //end of bark

}); // end of script
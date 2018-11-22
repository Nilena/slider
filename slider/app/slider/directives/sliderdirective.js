(function() {
angular
.module('myApp')
.directive('sliderDir',sliderdirective);

function sliderdirective() {

	var sliderObj={

		restrict:'AE',
		link:link,
		templateUrl:"app/slider/templates/imagetemplate.html"
	};
	
	return sliderObj;
		function link(scope, element, attrs) {	

			scope.slides= [
			{
				images:"assets/images/music/3.jpg",
				status:true,
				desc:'KeyboardCode'
			},
			{
				images:"assets/images/music/4.jpg",
				status:true,
				desc:'keyboardCode'
			},
			{
				images:"assets/images/music/5.jpg",
				status:true,
				desc:'KeyboardCode'
			}];

			scope.currentIndex=0;

			scope.setcurrentIndex = function (index){
			scope.currentIndex== index;
			}
			console.log(scope.currentIndex);

			// scope.checkcurrentIndex = function (index){
			// 	 return scope.currentIndex === index;
			// }

			scope.nextslide = function(index){
				setcurrentIndex();
				console.log(scope.currentIndex);
				if (scope.currentIndex>0 )
					++scope.currentIndex;
				}	
			}		
		}
})();
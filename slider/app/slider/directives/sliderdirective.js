(function() {
angular
.module('myApp')
.directive('sliderDir',sliderdirective);
  sliderdirective.$inject = ['$interval'];
function sliderdirective($interval) {
	
		let subArr= [];
	var sliderObj={

		restrict:'AE',
		link:link,
		templateUrl:"app/slider/templates/imagetemplate.html"
	};
	
	return sliderObj;
		function link(scope, element, attrs) {	
scope.i = 0;
		 scope.slides= [
			{
				images:"assets/images/music/3.jpg",
				status:false,
				desc:'KeyboardCode'
			},
			{
				images:"assets/images/music/4.jpg",
				status:false,
				desc:'keyboardCode'
			},
			{
				images:"assets/images/music/5.jpg",
				status:false,
				desc:'KeyboardCode'
			},
			{
				images:"assets/images/music/1.jpg",
				status:false,
				desc:'KeyboardCode'
			},
			{
				images:"assets/images/music/2.jpg",
				status:false,
				desc:'KeyboardCode'
			},
			{
				images:"assets/images/music/6.jpg",
				status:false,
				desc:'KeyboardCode'
			}
		];

			function init() {
				scope.currentImage=scope.slides[scope.i];
			}
			init(); 

			scope.nextSlide = function(){
				// scope.statuscheck = scope.slides[i].status;
				
				scope.i += 1;
				if(scope.i == scope.slides.length){
						scope.i=0;
				}
				init();
			}	

			scope.previousSlide = function() {
				scope.i-= 1;
				if(i< 0)
				{
						scope.i=scope.slides.length-1;
				}
				init();
				}

				$interval(function() {
                scope.nextSlide();
           		 }, 2000);


			scope.thisImage = function(index) {
				scope.i = index;

				init();
			}
			// scope.interArr = function (index){

			// 	for( j=0; j<=scope.slides.length-2 ; j++)
			// 	{
			// 		 subArr[j] = scope.slides[index];
			// 		 scope.currentImage = subArr[j];
			// 		j++;

			// 	}
			// }


			}		
		}
})();
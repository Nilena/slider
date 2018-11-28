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
		let timer;
		scope.interArr= [];
		 scope.slides= [
			{
				images:"assets/images/music/1.png",
				status:false,
				desc:'KeyboardCode'
			},
			{
				images:"assets/images/music/2.png",
				status:false,
				desc:'keyboardCode'
			},
			{
				images:"assets/images/music/3.png",
				status:false,
				desc:'KeyboardCode'
			},
			{
				images:"assets/images/music/4.png",
				status:false,
				desc:'KeyboardCode'
			},
			{
				images:"assets/images/music/5.png",
				status:false,
				desc:'KeyboardCode'
			},
			{
				images:"assets/images/music/6.png",
				status:false,
				desc:'KeyboardCode'
			}
		];
			let j =0;
			function addImage(){

				for( let k =0; k<3; k++ )
				{
					scope.interArr.push(scope.slides[j]);
					j++;
				}
				
				if( j === 6){
					j=0;
				}
			}
			addImage();
		function removeImage() {

			scope.interArr=[];
		}

			function init() {
				scope.currentImage=scope.interArr[scope.i];
			}
			init(); 

			scope.nextSlide = function(){
				// scope.statuscheck = scope.slides[i].status;
				
				scope.i += 1;
				if(scope.i == scope.interArr.length){
						scope.i=0;
						removeImage();
						addImage();
				}
				init();
				$interval.cancel(timer);
				time();			}	

			scope.previousSlide = function() {
				scope.i-= 1;
				if(scope.i< 0)
				{
					removeImage();
						addImage();
						scope.i=scope.interArr.length-1;

						
				}
				init();
				$interval.cancel(timer);
				console.log(timer);
				time();
				}

				function time(){

				timer = $interval(function() {
                scope.nextSlide();
           		 }, 4000);
				}
				time();

			scope.thisImage = function(index) {
				scope.i = index;
				init();
				timer=$interval.cancel(timer);
				time();
				
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
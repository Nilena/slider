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
				images:"assets/images/music/1.jpg",
				status:false,
				desc:'KeyboardCode'
			},
			{
				images:"assets/images/music/2.jpg",
				status:false,
				desc:'keyboardCode'
			},
			{
				images:"assets/images/music/3.jpg",
				status:false,
				desc:'KeyboardCode'
			},
			{
				images:"assets/images/music/4.jpg",
				status:false,
				desc:'KeyboardCode'
			},
			{
				images:"assets/images/music/5.jpg",
				status:false,
				desc:'KeyboardCode'
			},
			{
				images:"assets/images/music/6.jpg",
				status:false,
				desc:'KeyboardCode'
			}
		];
			let j =0;
			 let stopTime;
		
		scope.stop = function (){

				console.log("i");
				
        // stopTime = $interval(updateTime, 1000);

        //   // listen on DOM destroy (removal) event, and cancel the next UI update
        //   // to prevent updating time after the DOM element was removed.
        //   element.on('$destroy', function() {
            $interval.cancel(timer);
        //   });

			}

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
				scope.time();
				}	

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
					scope.time();

				}

				scope.time = function(){
					console.log('j');
				timer = $interval(function() {
                scope.nextSlide();
           		 }, 4000);
				}
				scope.time();

			scope.thisImage = function(index) {
				scope.i = index;
				init();
				timer=$interval.cancel(timer);
			scope.time();
				
			}
		
			}		
		}
})();
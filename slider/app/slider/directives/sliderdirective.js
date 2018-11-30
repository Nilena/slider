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
		
		scope.interArr= [];
		var ind   = 0;
		let k   = 0;
		let l = 0;
		let m = 3;
		let slideTimer;

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
			var ind = 0;
			// l to start
			 // m to end 
			let start = 0;
			let end = 3;

			

			
			scope.interArr = [];

			function addImage(){
				scope.interArr = [];
				for(let j = start; j < end; j++){
					scope.interArr.push(scope.slides[j]);
				}
			}
			addImage();

			

			scope.nextSlide = function(){
				if(ind === 2){
					start = 3;
					end = 6;
					addImage();
				}

				if(ind === 5){
					start = 0;
					end = 3;
					addImage();
				}

				$interval.cancel(slideTimer);
				scope.timer();
				if(ind >= scope.slides.length-1){
					ind = 0;
				} else{
					ind += 1;
				}
				scope.statusChanger();
			}

			scope.previousSlide = function(){
				if(ind === 0){
					start = 3;
					end = 6;
					addImage();
				}

				if(ind === 3){
					start = 0;
					end = 3;
					addImage();
				}

				$interval.cancel(slideTimer);
				scope.timer();
				if(ind <= 0){
					ind = scope.slides.length-1;
				} else{
					ind -= 1;
				}
				scope.statusChanger();
			}

			scope.thisImage = function(index){
				console.log(index);
				ind = index;
				scope.stop();
				scope.timer();
				scope.statusChanger();
			}
				scope.stop = function(){
				$interval.cancel(slideTimer);
				}

			scope.timer = function (){
				let slideTimer = $interval(function(){
					scope.nextSlide()},5000);
			}
			scope.timer();

			scope.statusChanger = function (index) {
				if (ind==index)
				{
					return true;
				}else {
					return false;
				}
			}
			scope.statusChanger();

		}		
	}	
})();

		// 	 let stopTime;
		
		// scope.stop = function (){
		// 	// console.log("i");
  //           $interval.cancel(timer);
		// 	}

		// 	function addImage(){
		// 		scope.interArr= [];

		// 		for( let k = l ; k< m; k++ )
		// 		{
		// 			scope.interArr.push(scope.slides[j]);
		// 			// j++;
		// 		}
				//  if( j === 6){
				// 	j=0;
				// }
		// 	}
		// 	addImage();

		// function removeImage() {

		// 	scope.interArr=[];
		// }

		// 	function init() {
		// 		scope.currentImage=scope.interArr[scope.i];
		// 	}
		// 	init(); 

		// 	scope.nextSlide = function(){
		// 	if(ind === 2){
		// 			l = 3;
		// 			m = 6;
		// 			addImage();
		// 		}

		// 		if(ind === 5){
		// 			l = 0;
		// 			m = 3;
		// 			addImage();
		// 		}	
		// 		init();
		// 		$interval.cancel(timer);
		// 		scope.time();
		// 		if(ind >= scope.slides.length-1){
		// 			ind = 0;
		// 		} else{
		// 			ind += 1;
		// 		}
		// 	}	
			
		// 		// scope.i += 1;
		// 		// if(scope.i == scope.interArr.length){
		// 		// 		scope.i=0;
		// 		// 		removeImage();
		// 		// 		addImage();
		// 		// }
				
		// 	scope.previousSlide = function() {
		// 		if(ind === 0){
		// 			l = 3;
		// 			m = 6;
		// 			addImage();
		// 		}

		// 		if(ind === 3){
		// 			l = 0;
		// 			m = 3;
		// 			addImage();
		// 		}

		// 		$interval.cancel(timer);
		// 		scope.time();
		// 		if(ind <= 0){;
		// 			ind = scope.slideShow.length-1;
		// 		} else{
		// 			ind -= 1;
		// 		}
		// 		init();
				// scope.i-= 1;
				// if(scope.i< 0)
				// {
				// 	removeImage();
				// 		addImage();
				// 		scope.i=scope.interArr.length-1;

						
				// }
				
				// $interval.cancel(timer);
				// console.log(timer);
			// 	// 	scope.time();
			// }

			// 	scope.time = function(){
			// 		console.log('j');
			// 	timer = $interval(function() {
   //              scope.nextSlide();
   //         		 }, 4000);
			// 	}
			// 	scope.time();

			// scope.thisImage = function(index) {
			// 	scope.i = index;
			// 	init();
			// 	timer=$interval.cancel(timer);
			// scope.time();
				
			// }
			// scope.statusChanger = function (index) {
			// 	if (scope.i==index)
			// 	{
			// 		return true;
			// 	}else {
			// 		return false;
			// 	}
			// }


//sambath




			
		
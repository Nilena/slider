(function(){
	angular
	.module('sliderApp')
	.directive('sliderDirective',sliderDirective);
		sliderDirective.$inject = ['$interval'];

	function sliderDirective($interval){
		var directive = {
			link: sliderLink,
			templateUrl: `app/slider/template/sliderTemplate.html`,
			restrict: `EA`
		};
		return directive;
		function sliderLink(scope,element,attrs){
			var init= 0;
			let slideTimer;
			let start = 0;
			let end = 3;

			timer();

			scope.slideShow = [
			{
				id:0,
				src:"assets/images/music/1.jpg",
				status:false
			},

			{
				id:1,
				src:"assets/images/music/2.jpg",
				status:false
			},

			{
				id:2,
				src:"assets/images/music/3.jpg",
				status:false
			},

			{
				id:3,
				src:"assets/images/music/4.jpg",
				status:false
			},

			{
				id:4,
				src:"assets/images/music/5.jpg",
				status:false
			},
			
			{
				id:5,
				src:"assets/images/music/6.jpg",
				status:false
			}];
			scope.buttonSlide = [];

			function addImage(){
				scope.buttonSlide = [];
				for(let i = start; i < end; i++){
					scope.buttonSlide.push(scope.slideShow[i]);
				}
			}
			addImage();

			statusChanger();

			scope.next = function(){
				if(init === 2){
					start = 3;
					end = 6;
					addImage();
				}

				if(init === 5){
					start = 0;
					end = 3;
					addImage();
				}

				$interval.cancel(slideTimer);
				timer();
				if(init >= scope.slideShow.length-1){
					init = 0;
				} else{
					init += 1;
				}
				statusChanger();
			}

			scope.previous = function(){
				if(init === 0){
					start = 3;
					end = 6;
					addImage();
				}

				if(init === 3){
					start = 0;
					end = 3;
					addImage();
				}

				$interval.cancel(slideTimer);
				timer();
				if(init <= 0){;
					init = scope.slideShow.length-1;
				} else{
					init -= 1;
				}
				statusChanger();
			}

			scope.thisImage = function(index){
				console.log(index);
				init = index;
				$interval.cancel(slideTimer);
				timer();
				statusChanger();
			}

			function timer(){
				slideTimer = $interval(function(){scope.next()},5000);
			}

			function statusChanger(){
				for(let i = 0; i < scope.slideShow.length; i++){
					if((init === i)){
						scope.slideShow[i].status = true;
					}
					else{
						scope.slideShow[i].status = false;
					}
				}
			}
		}
	}
})();
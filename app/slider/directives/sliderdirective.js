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
		}		
}
})();
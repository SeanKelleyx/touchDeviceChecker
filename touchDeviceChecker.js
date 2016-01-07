(function($){
	'use strict';
	var hasTouch = false;
	$.fn.checkForTouch = function(options){
		var $element = $(this);
		window.addEventListener('touchstart', function setHasTouch () {
			hasTouch = true;
			$element.trigger('touchDeviceDetected', []);
			window.removeEventListener('touchstart', setHasTouch);
		}, false);
	};
})(jQuery);
(function($){
	'use strict';
	var hasTouch = false;

	function _getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	    }
	    return "";
	}


	function _setCookie(cname, cvalue, exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires="+d.toUTCString();
	    document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	function _checkForCookie(){
			var touch = _getCookie("browserHasTouch");
			if(touch==="true"){
				console.log("has cookie");
				return true;
			}
			return false;
	}

	var _touchDetected = function($element){
		hasTouch = true;
		$element.trigger('touchDeviceDetected', []);
	}

	$.fn.checkForTouch = function(options){
		var $element = $(this);
		if(_checkForCookie()){
			_touchDetected($element);
		}else{
			window.addEventListener('touchstart', function setHasTouch () {
				_touchDetected($element);
				_setCookie("browserHasTouch", "true", 365);
				window.removeEventListener('touchstart', setHasTouch);
			}, false);
		}
	};

	$.fn.isTouchDetected = function(options){
		return hasTouch;
	};

})(jQuery);

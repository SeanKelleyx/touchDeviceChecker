touchDeviceChecker
==================
`touchDeviceChecker` is a simple jQuery plugin to detect a touch device.  
The plugin can be used to check if touch has been detected staticly or using the `touchDeviceDetected` event.
Usage 
-----
You must include the `touchDeviceChecker.js` file: `<script type="text/javascript" src="pathtofile/touchDeviceChecker.js"></script>`  
You then want to initialize the touch checker `$(this).checkForTouch();`  
You now have two options for checking for a touch device  
  1) you can check if a touch device has been detected `$(this).isTouchDetected()` (will return true/false)  
  2) you can listen for the `touchDeviceDetected` event, this will only fire when the touch device is first detected,  
     `$(this).on("touchDeviceDetected", function(){ /* do something here */ });`  

Options
-------
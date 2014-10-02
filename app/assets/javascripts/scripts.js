// This is the custom code to get Curtains set up on the site.

$(document).ready(function(){
   $('.curtains').curtain();
   
	var scrollorama = $.scrollorama({
		blocks:'.curtains'
	});
    
  scrollorama.animate('#intro-title',{
  	duration:100, property:'left', end:-800
  });

  scrollorama.animate('#textbike-photo',{
		delay:100, duration:750, property:'rotate', start:-10, end:10
	});
    
});
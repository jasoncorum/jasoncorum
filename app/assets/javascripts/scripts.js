// This is the custom code to get Curtains set up on the site.

$(document).ready(function(){
   $('.curtains').curtain();
   
	var scrollorama = $.scrollorama({
		blocks:'.curtains'
	});
    
    scrollorama.animate('#intro h1',{
    	duration:300, property:'left', end:-849
    });

  	scrollorama.animate('#textbike-photo',{
			delay:100, duration:750, property:'rotate', start:-10, end:10
		});
    
});
$(document).ready(function() {
  $('.menu-button, .close-button').click(function() {
    $('.nav-wrap ul, .close-button').slideToggle(500);
  });
  
  $(window).resize(function() {		
		if ($(window).width() > 940 ) {			
			$('.nav-wrap ul, .close-button').removeAttr('style');
		 }
	});
	
    $('.buttonS').hover(function() {
      $(this).addClass('animated tada');
    }, function() {
      $(this).removeClass('animated tada');
    });
	
    $('.logo_button').hover(function() {
      $(this).addClass('animated jello');
    }, function() {
      $(this).removeClass('animated jello');
    });
});
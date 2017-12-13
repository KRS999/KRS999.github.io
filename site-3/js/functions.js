$(document).ready(function() {
	//Меню
  $('.menu-button, .close-button').click(function() {
    $('.nav-wrap ul, .close-button').slideToggle(500);
  });
  
  $(window).resize(function() {		
		if ($(window).width() > 940 ) {			
			$('.nav-wrap ul, .close-button').removeAttr('style');
		 }
	});
	//Меню
	
	//Анимации при наведении
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
	//Анимации при наведении
	
	$('.bxslider').bxSlider({
		nextText:'',
		prevText:'',
		useCSS: false,
		easing: 'jswing',
		speed: 500,
		auto: true, //автопролистования слайдов
		autoHover: true, //остановить автопролистования слайдов при наведении мыши
		minSlides: 1,
		maxSlides: 1
	   });

	new WOW().init();
	
	$('#t-form select').styler();
});
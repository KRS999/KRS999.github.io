$(document).ready(function() {
	$('.open-menu').click(function(){
		$(".menu").fadeToggle();
		$(this).toggleClass('open');
	});
	$(window).resize(function() {		
		if ($(window).width() > 767) {
			$('.open-menu').removeClass('open'); //Возвращаем состояния иконки меню после увелечения экрана
			$('.menu').removeAttr('style'); //Скрываем меню после увл. экрана
		 }
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
		   $('.header_wrap').addClass('pd');
		}
		if ($(this).scrollTop() < 50) { //Скрываем меню при 100 Offset
		   $('.header_wrap').removeClass('pd');
		}
	});
});
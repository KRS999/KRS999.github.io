$(document).ready(function() {
	$('.clients__slider').slick({
		autoplay: true,//Автопрокрутка
		speed: 1000, //Скорость анимации
		autiplaySpeed: 3000, //Таймер автопрокрутки=
		cssEase: 'cubic-bezier(0.950, 0.050, 0.795, 0.800)',
		arrows: true, //Отключить стрелки false //Отключено
		pauseOnDotsHover: true, //Пауза слайда при наведении на точки
		slidesToShow: 2, //Кол-во слайдов
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
		]
	});
	//Открываем меню
	$('.hamburger').click(function(){
		$(".header__top_nav").fadeToggle();
		$(this).toggleClass('is-active');
	});
	//Добавляем клас для шапки
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
		   $('.header__top').addClass('header__top_bg');
		}
		if ($(this).scrollTop() < 50) {
		   $('.header__top').removeClass('header__top_bg');
		}
	});
	//Фикс бага после обновы страницы
	if ($(this).scrollTop() > 50) {
	   $('.header__top').addClass('header__top_bg');
	}
	//Восстанавливаем меню
	$(window).resize(function() {
		if ($(window).width() > 991) {
			$('.hamburger').removeClass('is-active'); //Возвращаем состояния иконки меню после увелечения экрана
			$('.header__top_nav').removeAttr('style'); //Скрываем меню после увл. экрана
		 }
	});
	//Video in Sign in
	var videoAlert = document.querySelector('.video__alert');
	var videoPlay = document.querySelector('.video__play');
	var videoClose = document.querySelector('.close__alert');
	var videoAlertWrap = document.querySelector('.video__alert_wrap');
	var youtubeVideo = document.querySelector('.youtube__video');
	
	var signInForm = document.querySelector('.sign__in_form');
	var signInFormWrap = document.querySelector('.sign__in__form_wrap');
	var signIn = document.querySelector('.sign__in');
	var closeForm = document.querySelector('.close__form');
	
	videoPlay.onclick = function(e){
		e.preventDefault();
		$(".youtube__video").each(function() {
			$(this)[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
		});
		videoAlert.classList.add('video__alert_on');
		videoAlertWrap.classList.add('video__alert_wrap_on');
	}
	videoClose.onclick = function(e){
		e.preventDefault();
		$(".youtube__video").each(function() {
			$(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
		});
		videoAlert.classList.remove('video__alert_on');
		videoAlertWrap.classList.remove('video__alert_wrap_on');
	}
	
	signIn.onclick = function(e){
		e.preventDefault();
		signInForm.classList.add('sign__in__form_on');
		signInFormWrap.classList.add('sign__in__form__wrap_on')
	}
	closeForm.onclick = function(e){
		e.preventDefault();
		signInForm.classList.remove('sign__in__form_on');
		signInFormWrap.classList.remove('sign__in__form__wrap_on')
	}
	//Скролл до блоков
	$(".header__top_menu a, .mouse, .arrow__to_home").mPageScroll2id({
		offset : 0 //расстояни
	});
	//Select
	$('.header__select').selectric();
});
if (/SymbOS/.test(window.navigator.userAgent)) {
    $('.headhesive').hide();
	
}
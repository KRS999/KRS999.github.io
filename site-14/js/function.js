$(document).ready(function() {
	$('.slider_wrap').slick({
		adaptiveHeight: true, //Адаптивный по высоте
		autoplay: false,//Автопрокрутка
		speed: 1000, //Скорость анимации
		autiplaySpeed: 3000, //Таймер автопрокрутки
		//centerMode: true, //Центрируем слайдер
		//centerPadding: '0px', //Внутренний
		dots: true, //Точки
		cssEase: 'ease-in', //Вид анимации
		arrows: false, //Отключить стрелки false //Отключено
		fade: true, //Слайды меняются с друним эффектом
		//infinite: true, //Отключить или включить бесконечность
		//edgeFriction: '0.10', //Растянуть слайд если отключена бесканечность
		pauseOnDotsHover: true, //Пауза слайда при наведении на точки
		//lazyLoad: 'progressive', //Погрузка Image
		//vertical: false, //Слайд Верстикально
		//slidesPerRow: 2,
		//zIndex: 1,
		//rows: 2, //Строки слайдов
		//slidesToShow: 2,
		//slidesToScroll: 2,
	  /*responsive: [
		{
		  breakpoint: 1000,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		  }
		},
	  ]*/
	});
	$('.user-works-slider').slick({
		adaptiveHeight: false, //Адаптивный по высоте
		autoplay: false,//Автопрокрутка
		speed: 300, //Скорость анимации
		centerMode: true,
		autiplaySpeed: 3000, //Таймер автопрокрутки
		dots: false, //Точки
		cssEase: 'ease-in', //Вид анимации
		arrows: true, //Отключить стрелки false //Отключено
		//fade: true, //Слайды меняются с друним эффектом
		infinite: false, //Отключить или включить бесконечность
		//edgeFriction: '0.10', //Растянуть слайд если отключена бесканечность
		pauseOnDotsHover: true, //Пауза слайда при наведении на точки
		slidesToShow: 1,
		variableWidth: true, //Убрать авто ширину
		initialSlide: 2, //начать с второго слайда
		draggable: false
	});
	//YOUTUBE
	var checkVideo = true;
	$('.playBtn, .close-video').click(function(e){
		e.preventDefault();
		if(checkVideo){
			$(".video").fadeToggle();
			$(".close-video").fadeToggle();
			$("iframe").each(function() {
				$(this)[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
			});
		}else{
		e.preventDefault();
			$(".video").fadeToggle();
			$(".close-video").fadeToggle();
			$("iframe").each(function() {
				$(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
			});
		}
		checkVideo = !checkVideo;
	});
	//YOUTUBE
	
	$('.clientMore').click(function(e){
		e.preventDefault();
		$('.client_img li:nth-child(6),.client_img li:nth-child(7),.client_img li:nth-child(8),.client_img li:nth-child(9),.client_img li:nth-child(10)').slideToggle();
	});
	
	$('.open-menu').click(function(){
		$(".menu").toggleClass('menu-open');
		$('.open-menu').toggleClass('open');
	});
	$(window).resize(function() {		
		if ($(window).width() > 767) {
			$('.open-menu').removeClass('open'); //Возвращаем состояния иконки меню после увелечения экрана
			$(".menu").removeClass('menu-open'); //Скрываем меню после увл. экрана
		 }
	});
	/*$(window).scroll(function() {		
		if ($(window).height() > 767) {
			$('#nav-icon2, .header__wrap .nav-icon2').removeClass('open'); //Возвращаем состояния иконки меню после пролистывания вниз
			$('.menu').removeAttr('style'); //Скрываем меню после пролистывания вниз
		 }
	});*/
	//Скролл до блоков
	/*
	$(".menu a").mPageScroll2id({
	offset : 100 //расстояние
	});
	*/
});




var header = new Headhesive('.header-section');
var options = {
  offset: 100, // ставим расстояния появляния второго меню,

  // If using a DOM element, we can choose which side to use as offset (top|bottom)
  offsetSide: 'top',

  // Классы
  classes: {

    // Класс для изменения второго меню
    clone: 'headhesive',

    // Класс для появляния меню-2
    stick: 'headhesive--stick',

    // Unstick class
    unstick: 'headhesive--unstick'
  },

  // Throttle scroll event to fire every 250ms to improve performace
  throttle: 250,

  // Callbacks
  onInit:    function () {},
  onStick:   function () {},
  onUnstick: function () {},
  onDestroy: function () {},
}
header.destroy();
var header = new Headhesive('.header-section', options);
/*$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
       $('.menu-header-2').removeAttr('style');
    }
    if ($(this).scrollTop() < 100) { //Скрываем меню при 100 Offset
       $('.menu-header').removeAttr('style');
    }
});*/
/*Функция для отображения текущей даты в Footer*/

if (/SymbOS/.test(window.navigator.userAgent)) {
    $('.headhesive').hide();
	
}
//alert(window.navigator.userAgent)
/*if(device.windows()){
	$('.headhesive').hide();
}*/
var d = new Date();
var copyYear = d.getFullYear();//год

function copyYears() {
  if (copyYear != 2017){ //Выводим дату если Переменная copyYear не равно 2017
    document.getElementById('copyYear').innerHTML = ' - ' + copyYear;
  }else{
    document.getElementById('copyYear').innerHTML = ' - NaN';
  }
}
copyYears(); //Запускаем функцию
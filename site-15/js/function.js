$(document).ready(function() {
	$('.pricing-slider').slick({
		//adaptiveHeight: true, //Адаптивный по высоте
		//autoplay: false,//Автопрокрутка
		speed: 1000, //Скорость анимации
		//autiplaySpeed: 3000, //Таймер автопрокрутки
		//centerMode: true, //Центрируем слайдер
		//centerPadding: '0px', //Внутренний
		dots: true, //Точки
		cssEase: 'ease-out', //Вид анимации
		arrows: false, //Отключить стрелки false //Отключено
		fade: true, //Слайды меняются с друним эффектом
		//infinite: true, //Отключить или включить бесконечность
		//edgeFriction: '0.10', //Растянуть слайд если отключена бесканечность
		pauseOnDotsHover: true, //Пауза слайда при наведении на точки
		//lazyLoad: 'progressive', //Погрузка Image
		//vertical: false, //Слайд Верстикально
		//slidesPerRow: 4,
		//zIndex: 1,
		rows: 2, //Строки слайдов
		draggable: false,
		responsive: [{
			breakpoint: 992,
			settings: {
				rows: 1
			}
		},
	]
});
	var menuCheck = true;
	$('.open-menu').click(function(){
		$(".menu").fadeToggle();
		$('.open-menu').toggleClass('eopen');
		/*
		if(menuCheck){
		$('.headhesive').css({borderColor: 'transparent',
							  boxShadow: '0 0 15px transparent',
							  backgroundColor: 'transparent'});
		}else{
		$('.headhesive').css({borderColor: '#008FD9',
							  boxShadow: '0 0 15px rgba(0,143,217,3)',
							  backgroundColor: 'black'});
		}
		menuCheck = !menuCheck;
		*/
	});
	$(window).resize(function() {		
		if ($(window).width() > 576) {
			//$('#nav-icon2, .header__wrap .nav-icon2').removeClass('open'); //Возвращаем состояния иконки меню после увелечения экрана
			$('.menu').removeAttr('style'); //Скрываем меню после увл. экрана
		 }
	});
	/*$(window).scroll(function() {		
		if ($(window).height() > 767) {
			$('#nav-icon2, .header__wrap .nav-icon2').removeClass('open'); //Возвращаем состояния иконки меню после пролистывания вниз
			$('.menu').removeAttr('style'); //Скрываем меню после пролистывания вниз
		 }
	});*/
	//Скролл до блоков
	$(".menu a").mPageScroll2id({
	offset : 100 //расстояние
	});
});




var header = new Headhesive('.header_top');
var options = {
  offset: 50, // ставим расстояния появляния второго меню,

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
var header = new Headhesive('.header_top', options);
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
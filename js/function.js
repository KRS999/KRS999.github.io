$(document).ready(function() {
	$('.nav-icon2').click(function(){
		if('.nav-icon2 === click'){
			$(".menu").fadeToggle();
			$(".nav-icon2, #nav-icon2").toggleClass('open');
			$(".menu ul li").addClass('animated bounceInUp');
			$(".menu ul li").attr('data-wow-delay', '0.5s');
		}else{
			return;
		}
	});
	$(window).resize(function() {		
		if ($(window).width() > 767) {
			$('.nav-icon2').removeClass('open'); //Возвращаем состояния иконки меню после увелечения экрана
			$('.menu').removeAttr('style'); //Скрываем меню после увл. экрана
			$(".menu ul li").removeClass('animated bounceInUp');
		 }
	});
	/*$(window).scroll(function() {		
		if ($(window).height() > 767) {
			$('#nav-icon2, .header__wrap .nav-icon2').removeClass('open'); //Возвращаем состояния иконки меню после пролистывания вниз
			$('.menu').removeAttr('style'); //Скрываем меню после пролистывания вниз
		 }
	});*/
	//Скролл до блоков
	$(".menu a, .logo a").mPageScroll2id({
	offset : 100 //расстояние
	});
	
	//Проценты Skills
	$(window).scroll(function() {
		if ($(window).height() < 1800) {
		var percent_number_step = $.animateNumber.numberStepFactories.append('%');
		$('#html__, #css__').animateNumber(
		  {
			number: 50,

			easing: 'easeInQuad',

			numberStep: percent_number_step
		  },
		  10000
		);

		$('#js__').animateNumber(
		  {
			number: 20,

			easing: 'easeInQuad',

			numberStep: percent_number_step
		  },
		  10000
		);
	}
});
	/*if(window.innerHeight == 2000){
	var percent_number_step = $.animateNumber.numberStepFactories.append('%');
	$('#html__, #css__').animateNumber(
		  {
			number: 50,

			easing: 'easeInQuad',

			numberStep: percent_number_step
		  },
		  10000
		);

		$('#js__').animateNumber(
		  {
			number: 20,

			easing: 'easeInQuad',

			numberStep: percent_number_step
		  },
		  10000
		);
	}*/
});


var header = new Headhesive('.header__wrap');
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
var header = new Headhesive('.header__wrap', options);
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
    document.getElementById('copyYear').innerHTML = '';
  }
}
copyYears(); //Запускаем функцию
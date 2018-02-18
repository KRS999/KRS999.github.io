$(document).ready(function() {
	$('.slider').bxSlider({
		//pager: false
	});
	$('.clients_slider_wrap').bxSlider({
		controls: false,
		mode: 'fade',
		auto: true
	});
	$('.testselect1').SumoSelect({
		showTitle: false
	});
	//INPUT - 1
	$('#inputPl, #input').click(function() {
		$('#inputPl').removeClass('top');
	});
	$('#input').focusout(function() {
		if ($(this).val().trim() == '') {
			$('#inputPl').addClass('top');
		}
	});
	//INPUT - 1
	//INPUT - 2
	$('#inputPl-2, #input-2').click(function() {
		$('#inputPl-2').removeClass('top');
	});
	$('#input-2').focusout(function() {
		if ($(this).val().trim() == '') {
			$('#inputPl-2').addClass('top');
		}
	});
	//INPUT - 2
	//INPUT - 3
	$('#inputPl-3, #input-3').click(function() {
		$('#inputPl-3').removeClass('top');
	});
	$('#input-3').focusout(function() {
		if ($(this).val().trim() == '') {
			$('#inputPl-3').addClass('top');
		}
	});
	//INPUT - 3
	//TEXTAREA
	$('#textareaPl, #textarea').click(function() {
		$('#textareaPl').removeClass('top');
	});
	$('#textarea').focusout(function() {
		if ($(this).val().trim() == '') {
			$('#textareaPl').addClass('top');
		}
	});
	//TEXTAREA
	//Меню
		$(".navBurgers,.navBurger").click(function() {
			$('.navBurgers').toggleClass("active");
			$(".overlay").toggleClass("open");
			// this line ▼ prevents content scroll-behind
		});
			$('.overlay').click(function() {
			$(this).removeClass('open');
			$('.navBurgers').removeClass('active');
		});
	//Меню
	$('.open-menu').click(function(){
		$(".mini-menu").fadeToggle();
		$('.open-menu').toggleClass('open');
	});
	//Скролл до блоков
	$(".menu a").mPageScroll2id({
	offset : 100 //расстояние
	});
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
    document.getElementById('copyYear').innerHTML = ' - NaN';
  }
}
copyYears(); //Запускаем функцию
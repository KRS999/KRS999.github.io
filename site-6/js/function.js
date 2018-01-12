$(document).ready(function() {
	$('.slider').slick({
		adaptiveHeight: true, //Адаптивный по высоте
		autoplay: true,//Автопрокрутка
		speed: 1000, //Скорость анимации
		autiplaySpeed: 3000, //Таймер автопрокрутки
		//centerMode: true, //Центрируем слайдер
		//centerPadding: '0px', //Внутренний
		dots: true, //Точки
		//cssEase: 'ease-in', //Вид анимации
		arrows: false, //Отключить стрелки false //Отключено
		//fade: true, //Слайды меняются с друним эффектом
		//infinite: true, //Отключить или включить бесконечность
		//edgeFriction: '0.10', //Растянуть слайд если отключена бесканечность
		pauseOnDotsHover: true, //Пауза слайда при наведении на точки
		//lazyLoad: 'progressive', //Погрузка Image
		//vertical: true, //Слайд Верстикально
		//slidesPerRow: 4,
		//zIndex: 1,
		//rows: 1, //Строки слайдов
		//slidesToShow: 3, //Кол-во точки остаются
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
	
//Настройки для слайдер компаний
	$('.slider_wrap').slick({
		adaptiveHeight: true, //Адаптивный по высоте
		autoplay: true,//Автопрокрутка
		speed: 1000, //Скорость анимации
		autiplaySpeed: 3000, //Таймер автопрокрутки
		dots: false, //Точки
		arrows: true, //Отключить стрелки false //Отключено
		pauseOnDotsHover: true, //Пауза слайда при наведении на точки
		slidesToShow: 5,
	    responsive: [
		{
		  breakpoint: 1350,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 3,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 666,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 500,
		  settings: {
			slidesToShow: 1,
		  }
		}
	]
	});
//Настройки для слайдер компаний
	
//Открываем меню
	$('.open_menu').click(function(){
		$(".header_menu_wrap").fadeToggle();
		$('.open_menu').toggleClass('open');
	});
//Открываем меню
	
//Открываем catalog grid
	$('.open_catalogBox').click(function(event){
		event.preventDefault();
		$(".catalog_bar_wrap").fadeToggle();
	});
//Открываем catalog grid
	
//Открываем каталог
	var clickCheck = true;
	$('.open_catalog').click(function(){
		if(clickCheck){
			$(".catalog_wrap_tab_box").addClass('catalog_active');
			$('.open_catalog').toggleClass('open');
		}else{
			$(".catalog_wrap_tab_box").removeClass('catalog_active');
			$('.open_catalog').toggleClass('open');
		}
		
		clickCheck = !clickCheck;
	});
//Открываем каталог
	
//Открываем - закрываем поиск
	$('.open_search, .menuClose').click(function(event){
		event.preventDefault();
		$(".header_search").fadeToggle();
		$(".header_search_wrap").addClass('search_active');
	});
//Открываем - закрываем поиск
	
//Убиваем класс
	$('.menuClose').click(function(){
		$(".header_search_wrap").removeClass('search_active');
	});
//Убиваем класс
	
//Открываем - закрываем рег и вход
	$('.open_reg_login, .regClose').click(function(event){
		event.preventDefault();
		$(".reg-login").fadeToggle();
		$(".reg_login_wrap").addClass('reg_login_active');
	});
//Открываем - закрываем рег и вход
	
//Убиваем класс
	$('.regClose').click(function(){
		$(".reg_login_wrap").removeClass('reg_login_active');
	});
//Убиваем класс
	
//Скрываем меню и кнопку
	$(window).resize(function() {		
		if ($(window).width() > 767) {
			$('.open_menu, .header__wrap .nav-icon2').removeClass('open'); //Возвращаем состояния иконки меню после увелечения экрана
			$('.header_menu_wrap, .search_active').removeAttr('style'); //Скрываем меню после увл. экрана
		 }
	});
});

//Табы
function stopDefAction(evt) {
    evt.preventDefault();
}
var deleteLink = document.querySelector('.reg_login_tab');
deleteLink.addEventListener(
    'click', stopDefAction, false
);
function tabs(el){
	var tabCollection = document.getElementsByClassName('tab');
	for(var i = 0; i < tabCollection.length; i++){
		tabCollection[i].classList.remove('active');
	}
	var tabsLiCollection = document.querySelectorAll('.reg_login_tab a');
	for(var i = 0; i < tabsLiCollection.length; i++){
		tabsLiCollection[i].classList.remove('active');
	}
	el.classList.add('active');
	document.getElementById(el.getAttribute('href')).classList.add('active');
}
//Табы

//Фиксируем меню
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
//Фиксируем меню
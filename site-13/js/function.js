$(document).ready(function() {
	$('.slider_wrap').slick({
		adaptiveHeight: true, //Адаптивный по высоте
		autoplay: false,//Автопрокрутка
		speed: 1000, //Скорость анимации
		autiplaySpeed: 3000, //Таймер автопрокрутки
		//centerMode: true, //Центрируем слайдер
		//centerPadding: '0px', //Внутренний
		dots: true, //Точки
		//cssEase: 'ease-in', //Вид анимации
		arrows: true, //Отключить стрелки false //Отключено
		//fade: true, //Слайды меняются с друним эффектом
		//infinite: true, //Отключить или включить бесконечность
		//edgeFriction: '0.10', //Растянуть слайд если отключена бесканечность
		pauseOnDotsHover: true, //Пауза слайда при наведении на точки
		//lazyLoad: 'progressive', //Погрузка Image
		//vertical: false, //Слайд Верстикально
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
	/*
	$('.slider_user_boxs').bxSlider({
		controls: false,
		mode: 'fade',
		auto: true
	});
	*/
	$('.slider_user_boxs').slick({
		adaptiveHeight: true, //Адаптивный по высоте
		autoplay: false,//Автопрокрутка
		speed: 1000, //Скорость анимации
		autiplaySpeed: 3000, //Таймер автопрокрутки
		dots: true, //Точки
		cssEase: 'ease-in', //Вид анимации
		draggable: false,
		arrows: true, //Отключить стрелки false //Отключено
		fade: true, //Слайды меняются с друним эффектом
		pauseOnDotsHover: true, //Пауза слайда при наведении на точки
	});
//Открываем партфолио
	var clickChecked = true;
	$('.menuPrt').click(function(e){
		e.preventDefault();
		if(clickChecked){
			$(".tabs-header ul").slideDown(500);
			$('.menuPrt').css({borderColor: "#333",
							  color: "#333",
							  fontFamily: "Roboto-Medium"});
		}else{
			$(".tabs-header ul").slideUp(500);
			$('.menuPrt').css({borderColor: "#8e8e8e",
							  color: "#8e8e8e",
							  fontFamily: "Roboto-Regular"});
		}
		
		clickChecked = !clickChecked;
	});
//Открываем партфолио
//Открываем поиск
	var clickCheckedSearch = true;
	$('.search_button a span').click(function(e){
		e.preventDefault();
		$(".header_form").toggleClass('searchActive');
		if(clickCheckedSearch){
			$('.search_button a span').css({
				backgroundImage: 'url(./img/icon-close.png)'
			});
		}else{
			$('.search_button a span').css({
				backgroundImage: 'url(./img/icon-1.png)'
			});
		}
		clickCheckedSearch = !clickCheckedSearch;
	});
//Открываем поиск
//Открываем меню
	var clickCheckedMenu = true;
	$('.open-menu').click(function(){
		$(".header_menu_wrap").fadeToggle();
		$('.open-menu').toggleClass('open');
		/*
		if(clickCheckedMenu){
			$('#nav-icon3').css({
				borderColor: '#fff'
			});
			$('#nav-icon3 span').css({
				backgroundColor: '#fff'
			});
		}else{
			$('#nav-icon3').css({
				borderColor: '#333'
			});
			$('#nav-icon3 span').css({
				backgroundColor: '#333'
			});
		}
		clickCheckedMenu = !clickCheckedMenu;
		*/
	});
//Открываем меню
	$(window).resize(function() {		
		if ($(window).width() > 992) {
			$('.open-menu').removeClass('open'); //Возвращаем состояния иконки меню после увелечения экрана
			$('.header_menu_wrap').removeAttr('style'); //Скрываем меню после увл. экрана
		 }
	});
	//Скролл до блоков
	$(".myMenu a").mPageScroll2id({
		offset : 100 //расстояние
	});
	$(".example1").hashTabs() //Табы
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
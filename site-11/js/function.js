$(document).ready(function() {
	$('.company-slider').slick({
		adaptiveHeight: true, //Адаптивный по высоте
		autoplay: true,//Автопрокрутка
		speed: 1000, //Скорость анимации
		autiplaySpeed: 3000, //Таймер автопрокрутки
		//centerMode: true, //Центрируем слайдер
		//centerPadding: '0px', //Внутренний
		dots: false, //Точки
		//cssEase: 'ease-in', //Вид анимации
		arrows: false, //Отключить стрелки false //Отключено
		//fade: true, //Слайды меняются с друним эффектом
		//infinite: true, //Отключить или включить бесконечность
		//edgeFriction: '0.10', //Растянуть слайд если отключена бесканечность
		pauseOnDotsHover: true, //Пауза слайда при наведении на точки
		slidesToShow: 5,
		slidesToScroll: 5,
		//lazyLoad: 'progressive', //Погрузка Image
		//vertical: false, //Слайд Верстикально
		//slidesPerRow: 4,
		//zIndex: 1,
		//rows: 1, //Строки слайдов
		//slidesToShow: 3, //Кол-во точки остаются
	  responsive: [
		{
		  breakpoint: 1000,
		  settings: {
			  slidesToShow: 4,
			  slidesToScroll: 4,
			  arrows: true, 
		  }
		},
		{
		  breakpoint: 785,
		  settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  arrows: true, 
		  }
		},
		{
		  breakpoint: 570,
		  settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  arrows: true, 
		  }
		},
		{
		  breakpoint: 470,
		  settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: true, 
		  }
		},
	  ]
	});
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
	$('.user, .menuClose').click(function(e){
		e.preventDefault();
		$(".info-none").fadeToggle();
	});
});
var header = new Headhesive('.menu_wrap');
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
var header = new Headhesive('.menu_wrap', options);
if (/SymbOS/.test(window.navigator.userAgent)) {
    $('.headhesive').hide();
	
}
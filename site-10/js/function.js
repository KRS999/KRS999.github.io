$(document).ready(function() {
	$('.favorable-slider,.service-img-slider,.service-content-slider-wrap,.tours-slider').slick({
		adaptiveHeight: true, //Адаптивный по высоте
		autoplay: false,//Автопрокрутка
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
	$('.open-menu').click(function(){
		$(".menu").toggleClass('open__menu');
		$('.open-menu').toggleClass('open');
	});
	
	$(window).resize(function() {		
		if ($(window).width() > 830) {
			$('.open-menu').removeClass('open'); //Возвращаем состояния иконки меню после увелечения экрана
			$(".menu").removeClass('open__menu');
		 }
	});
	//Скролл до блоков
	$(".menu a").mPageScroll2id({
	offset : 100 //расстояние
});
});

var header = new Headhesive('.header-section');
var options = {
  offset: 140, // ставим расстояния появляния второго меню,

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
if (/SymbOS/.test(window.navigator.userAgent)) {
    $('.headhesive').hide();
	
}
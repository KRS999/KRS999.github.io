$(document).ready(function() {
	$('.team__slider_wrap').slick({
		adaptiveHeight: true, //Адаптивный по высоте
		autoplay: true,//Автопрокрутка
		speed: 1000, //Скорость анимации
		autiplaySpeed: 3000, //Таймер автопрокрутки
		//centerMode: true, //Центрируем слайдер
		//centerPadding: '0px', //Внутренний
		dots: false, //Точки
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
		slidesToShow: 3, //Кол-во точки остаются
		prevArrow: $('.team__slider_prev'),
		nextArrow: $('.team__slider_next'),
	  responsive: [
		{
		  breakpoint: 1000,
		  settings: {
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1
		  }
		},
	  ]
	});
	$('.testimonials__slider').slick({
		adaptiveHeight: true,
		autoplay: true,
		speed: 1000,
		autiplaySpeed: 3000,
		dots: true,
		cssEase: 'ease-in',
		arrows: false,
		fade: true,
		slidesToShow: 1,
		draggable: false
	});
	
	// Create a clone of the menu, right next to original.
$('.header__nav_wrap').addClass('original').clone().insertAfter('.header__nav_wrap').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {
	var orgElementPos = $('.original').offset();
	orgElementTop = orgElementPos.top;      
  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}
	$('.menu__btn_wrap').click(function(){
		$(".header__menu").slideToggle();
		$('.menu__btn_wrap').toggleClass('open');
	});
	$(window).resize(function() {		
		if ($(window).width() > 768) {
			$('.menu__btn_wrap').removeClass('open'); //Возвращаем состояния иконки меню после увелечения экрана
			$('.header__menu').removeAttr('style'); //Скрываем меню после увл. экрана
		 }
	});
	//Скролл до блоков
	$(".header__menu a, .header__top_boxs a, .arrow, .arrow__home").mPageScroll2id({
	offset : 0 //расстояние
});
});

//Skills Rate
let rate = document.getElementsByClassName('rate');
let skillsRateLoad = document.getElementsByClassName('skills__rate_load');
for(let i = 0; i < rate.length; i++){
	let rateValue = rate[i].getAttribute('rate');
	rate[i].innerHTML = rateValue;
	for(let j = 0; j < skillsRateLoad.length; j++){
		let loadRateAttr = 'loadRate';
			skillsRateLoad[j].setAttribute(loadRateAttr, rate[j].getAttribute('rate'));//Добавляем атрибут к блоку skillsRateLoad и присваиваем значения из rate
			skillsRateLoad[j].style.width = skillsRateLoad[j].getAttribute(loadRateAttr);//Присваиваем значения атрибута
	}
}
//Skills Rate
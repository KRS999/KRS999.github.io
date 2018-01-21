
$(document).ready(function() {
	$('.header_mobile_slider_wrap, .screen-slider').slick({
		adaptiveHeight: true, //Адаптивный по высоте
		autoplay: true,//Автопрокрутка
		speed: 1000, //Скорость анимации
		autiplaySpeed: 3000, //Таймер автопрокрутки
		//centerMode: true, //Центрируем слайдер
		//centerPadding: '0px', //Внутренний
		dots: true, //Точки
		cssEase: 'ease', //Вид анимации
		arrows: false, //Отключить стрелки false //Отключено
		fade: true, //Слайды меняются с друним эффектом
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
	//Скролл до блоков
		$(".footer_wrap_top a, .drawer-list a").mPageScroll2id({
		offset : 80 //расстояние
	});
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$('label.hamburger').addClass('hamburgers');
			$('.menu-section').addClass('menu-sections');
		}
		else if ($(this).scrollTop()<100){
			$('label.hamburger').removeClass('hamburgers');
			$('.menu-section').removeClass('menu-sections');
		}
	});
});
var d = new Date();
var copyYear = d.getFullYear();//год
document.getElementById('year').innerHTML = copyYear;
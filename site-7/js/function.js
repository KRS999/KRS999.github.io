$(document).ready(function() {
	$('.what-slider').slick({
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
	$('.call-slider').slick({
		//adaptiveHeight: true, //Адаптивный по высоте
		autoplay: false,//Автопрокрутка
		speed: 1000, //Скорость анимации
		autiplaySpeed: 3000, //Таймер автопрокрутки
		dots: false, //Точки
		arrows: true, //Отключить стрелки false //Отключено
		pauseOnDotsHover: true, //Пауза слайда при наведении на точки
	});
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//Загрузить еще
$('#show-more').click(function() {
$('#show-work').fadeIn();
$(this).hide();
});
//Загрузить еще
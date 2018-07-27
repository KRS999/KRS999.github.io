$(document).ready(function() {
	$('.team-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.team-slider-nav'
	});
	$('.team-slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.team-slider',
		dots: false,
		arrows: true,
		infinite: true,
		focusOnSelect: true,
		draggable: false,
		slide: 'div',
		prevArrow: $('.team__slider_prev'),
		nextArrow: $('.team__slider_next'),
		cssEase: 'cubic-bezier(0.950, 0.050, 0.795, 0.800)',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
		],
	});
	//Запускаем team slide после закрытия
	var styleElem = document.head.appendChild(document.createElement("style"));
	$('.team-slider-nav, .team__slider_prev, .team__slider_next').click(function(){
		styleElem.innerHTML = ".team .team__wrap .slick-current:after {bottom: -96px;}";
		$('.team__slider_item').slideDown();
	});
	//Скрываем панель инф
	$('.team-close-item').click(function(e){
		e.preventDefault();
		styleElem.innerHTML = ".team .team__wrap .slick-current:after {bottom: -160px;}";
		$('.team__slider_item').slideUp();
	});
	//Жесть
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		variableWidth: false,
		asNavFor: '.slider-nav'
	});
	$('.slider-for2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		variableWidth: false,
		asNavFor: '.slider-nav2'
	});
	$('.slider-for3').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		variableWidth: false,
		asNavFor: '.slider-nav3'
	});
	$('.slider-for4').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		variableWidth: false,
		asNavFor: '.slider-nav4'
	});
	$('.slider-for5').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		variableWidth: false,
		asNavFor: '.slider-nav5'
	});
	$('.slider-nav').slick({
		slidesToShow: 12,
		slidesToScroll: 12,
		asNavFor: '.slider-for',
		dots: true,
		arrows: false,
		infinite: false,
		variableWidth: false,
		focusOnSelect: true,
	});
	$('.slider-nav2').slick({
		slidesToShow: 12,
		slidesToScroll: 12,
		asNavFor: '.slider-for2',
		dots: true,
		arrows: false,
		infinite: false,
		variableWidth: false,
		focusOnSelect: true,
	});
	$('.slider-nav3').slick({
		slidesToShow: 12,
		slidesToScroll: 12,
		asNavFor: '.slider-for3',
		dots: true,
		arrows: false,
		infinite: false,
		variableWidth: false,
		focusOnSelect: true,
	});
	$('.slider-nav4').slick({
		slidesToShow: 12,
		slidesToScroll: 12,
		asNavFor: '.slider-for4',
		dots: true,
		arrows: false,
		infinite: false,
		variableWidth: false,
		focusOnSelect: true,
	});
	$('.slider-nav5').slick({
		slidesToShow: 12,
		slidesToScroll: 12,
		asNavFor: '.slider-for5',
		dots: true,
		arrows: false,
		infinite: false,
		variableWidth: false,
		focusOnSelect: true,
	});
	//Появления слоя при ховере
	$('.slider-nav').on('mouseover', '.slick-slide', function (e) {
		var $currTarget = $(e.currentTarget), 
			index = $currTarget.data('slick-index'),
			slickObj = $('.slider-for').slick('getSlick');
		slickObj.slickGoTo(index);
	});
	//Появления слоя при ховере
	$('.slider-nav2').on('mouseover', '.slick-slide', function (e) {
		var $currTarget = $(e.currentTarget), 
			index = $currTarget.data('slick-index'),
			slickObj = $('.slider-for2').slick('getSlick');
		slickObj.slickGoTo(index);
	});
	//Появления слоя при ховере
	$('.slider-nav3').on('mouseover', '.slick-slide', function (e) {
		var $currTarget = $(e.currentTarget), 
			index = $currTarget.data('slick-index'),
			slickObj = $('.slider-for3').slick('getSlick');
		slickObj.slickGoTo(index);
	});
	//Появления слоя при ховере
	$('.slider-nav4').on('mouseover', '.slick-slide', function (e) {
		var $currTarget = $(e.currentTarget), 
			index = $currTarget.data('slick-index'),
			slickObj = $('.slider-for4').slick('getSlick');
		slickObj.slickGoTo(index);
	});
	//Появления слоя при ховере
	$('.slider-nav5').on('mouseover', '.slick-slide', function (e) {
		var $currTarget = $(e.currentTarget), 
			index = $currTarget.data('slick-index'),
			slickObj = $('.slider-for5').slick('getSlick');
		slickObj.slickGoTo(index);
	});
	//Жесть Энд
	$('.clients__top_slider').slick({
		adaptiveHeight: false, //Адаптивный по высоте
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
		slidesToShow: 6,
		slidesToScroll: 1,
		infinite: true,
		prevArrow: $('.clients__slider_prev'),
		nextArrow: $('.clients__slider_next'),
		//lazyLoad: 'progressive', //Погрузка Image
		//vertical: false, //Слайд Верстикально
		//slidesPerRow: 4,
		//zIndex: 1,
		//rows: 1, //Строки слайдов
		//slidesToShow: 3, //Кол-во точки остаются
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});
	$('.clients__bottom_slider').slick({
		autoplay: true,
		speed: 1000,
		autiplaySpeed: 3000,
		dots: true,
		arrows: false,
		pauseOnDotsHover: true,
		slidesToShow: 1,
		fade: true,
		cssEase: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
	});
	//Круглый стратусбар
	$('.circlechart').circlechart();
	var circleChart = $('.circlechart').attr('data-percentage');
	console.log(circleChart)
	//Скролл до блоков
	$(".header__top_menu a, .global__arrow").mPageScroll2id({
	offset : 89 //расстояние
	});
	
	//Menu Fixed
	// Create a clone of the menu, right next to original.
	$('.header__top').addClass('original').clone().insertAfter('.header__top').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

	scrollIntervalID = setInterval(stickIt, 10);

	function stickIt() {
		var orgElementPos = $('.original').offset();
		orgElementTop = orgElementPos.top;
		var offset = 100;
	  if ($(window).scrollTop() >= (orgElementTop) + offset) {
		// scrolled past the original position; now only show the cloned, sticky element.

		// Cloned element should always have same left position and width as original element.     
		orgElement = $('.original');
		coordsOrgElement = orgElement.offset();
		leftOrgElement = coordsOrgElement.left;  
		widthOrgElement = orgElement.css('width');
		$('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).css('background', 'rgba(0,0,0,.8)').fadeIn();
		$('.original').css('visibility','visible');
	  } else {
		// not scrolled past the menu; only show the original menu.
		$('.cloned').fadeOut();
		//$('.original').css('visibility','visible');
	  }
	}
	
	function goSlick(){
		$('.slider-for, .slider-for2, .slider-for3, .slider-for4, .slider-for5').slick('reinit');
		$('.slider-nav, .slider-nav2, .slider-nav3, .slider-nav4, .slider-nav5').slick('reinit');
	}
	//Вырубаем слайд
	$('.close-slider-for').click(function(){
		$(this).toggleClass('clickMenuSix');
		$('.slider-for, .slider-for2, .slider-for3, .slider-for4, .slider-for5').slideToggle();
		goSlick();
	})
	//Врубаем слайд если он скрыт кнопкой close
	$('.slider-nav, .slider-nav2, .slider-nav3, .slider-nav4, .slider-nav5').click(function(e){
		e.preventDefault();
		$('.slider-for, .slider-for2, .slider-for3, .slider-for4, .slider-for5').slideDown();
		$('.close-slider-for').removeClass('clickMenuSix');
		goSlick();
	});
	//Функционал гамбургера
	$('.hamburger').click(function(){
		$(".header__top_menu").fadeToggle();
		$('.header__top_menu ul').toggleClass('menu__anim');
		$('.hamburger').toggleClass('is-active');
		$('body').toggleClass('oh');
		$('.header__top.cloned').toggleClass('header__top__cloned_fix');
	});
	$('.header__top_menu a').click(function(){
		$('.hamburger').removeClass('is-active');
		$('.header__top_menu').removeAttr('style');
		$('.header__top_menu ul').removeClass('menu__anim');
		$('body').removeClass('oh');
		$('.header__top.cloned').removeClass('header__top__cloned_fix');
	});
	$(window).resize(function() {
		if ($(window).width() > 767) {
			$('.hamburger').removeClass('is-active');
			$('.header__top_menu').removeAttr('style');
			$('.header__top_menu ul').removeClass('menu__anim');
			$('body').removeClass('oh');
			$('.header__top.cloned').removeClass('header__top__cloned_fix');
		 }
	});
	//Добавляем ховеры, просто накидка
	var imgItem = $('.img__header_item');
	var imgHover = $('<div class="img__header__item_hover">');
	imgHover.append('<h1>Sample image</h1>');
	imgHover.append('<p>Graphic design</p>');
	imgItem.append(imgHover);
	//Запускаем меню таб
	$('.open__tab_btn').click(function(e){
		e.preventDefault();
		$(this).toggleClass('open__tab_btn-active');
		$('.tabs-header ul').slideToggle();
	});
});
//Добавляем анимацию плюс стили чтоб не лагало
function smakAnim(){
	$('.clients_top, .contact_top, .about, .works_center').css({
		'background' : '#ffffff',
		'position' : 'relative',
		'z-index' : '1',
	});
	$('.works_bottom, .skills, .header, .header__center, .contact_bottom, .footer ').css({
		'overflow' : 'hidden'
	});
	$('h1').addClass('wow slideInDown').attr('data-wow-offset="0"');
	$('.global__titles_block').attr('data-wow-offset', '150').addClass('wow slideInUp');
	$('.services__top_item, .services__bottom_item, .skills__item, .tabs_wrap, .global__btn, .contact__bottom_form, .contact__top_item, .about__item, .team__slider_wrap, .works__bottom_item, .clients__top_slider, .slider__arrows, .clients__bottom_slider').addClass('wow slideInUp').attr('data-wow-offset', '250');
	$('.copy, .footer__btn, .footer__links').addClass('wow slideInUp').attr('data-wow-offset', '0');
}
function smakAnimOff(){
	return false;
}
//Активируем анимацию
var check = $('#opt2');
check.click(function(){
	localStorage.setItem('checked', check[0].checked);
	switch(check[0].checked){
		case true : smakAnim();
			break;
		case false : smakAnimOff();
			break;
	}
	location.reload();
});
var localValue = JSON.parse(localStorage.getItem('checked'));
check[0].checked = localValue;
switch(check[0].checked){
	case true : smakAnim();
		break;
	case false : smakAnimOff();
		break;
}

$('.close__animate').click(function(e){
	e.preventDefault();
	$('.animate').addClass('animate__off');
});

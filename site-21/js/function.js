$(document).ready(function() {
	$('.clients-slider').slick({
		adaptiveHeight: false, //Адаптивный по высоте
		autoplay: true,//Автопрокрутка
		speed: 1000, //Скорость анимации
		autiplaySpeed: 3000, //Таймер автопрокрутки
		dots: true, //Точки
		arrows: false, //Отключить стрелки false //Отключено
		pauseOnDotsHover: true, //Пауза слайда при наведении на точки
		slidesToShow: 4, //Кол-во точки остаются
		slidesToScroll: 1,
		initialSlide: 2,
		responsive: [
			{
				breakpoint: 768,
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
	//Tabs
	$('#horizontalTab').jqTabs({direction: 'horizontal', duration: 500});
	//Scripts by KRS999 :D
	$(window).resize(function() {		
		if ($(window).width() > 576) {
			$('.header-top__menu').removeClass('header-top__menu_on');
			$('.header__menu').removeClass('header__menu_on');
			$('.menu-on').removeClass('menu-onn');
		 }
	});
	var projects =  $('.projects-center');
	console.log(projects.offset().top);
	var offFun = false;
	$(window).on('scroll', function(){
		//Fixed header
		if($(this).scrollTop() > 50){
			$('.header-top').addClass('header-top__on');
			$('.logo a img').css({
				width: '50px',
				transition: '.6s'
			});
			$('.menu-on').css({
				width: '40px',
				height: '40px',
			});
		}else if($(this).scrollTop() < 50){
			$('.header-top').removeClass('header-top__on');
			$('.logo a img').css({
				width: '93px'
			});
			$('.menu-on').css({
				width: '50px',
				height: '50px',
			});
		}
		//Projects number
		if($(this).scrollTop() >= projects.offset().top){
			if(!offFun){
				goProjects();
			}
			offFun = true;
		}
	});
	//Bag fix
	if($(this).scrollTop() > 50){
		$('.header-top').addClass('header-top__on');
		$('.logo a img').css({
			width: '50px',
			transition: '.6s'
		});
		$('.menu-on').css({
			width: '40px',
			height: '40px',
		});
	}
	var title = document.querySelectorAll('.projects-bottom__item__title');
	var animateTime = 5;
	function goProjects(){
		function titleFun(sel, call){
			for(var i = 0; i < title.length; i++){
				call(i, title[i].getAttribute('data-projects'));
			}
		}
		titleFun(title, function(index, titleAttr){
			console.log(titleAttr);
			titleAttr = 0;
			function timeAnimate(){
				var times = setTimeout(function(){
					titleAttr = titleAttr + 1;
					title[index].innerHTML = titleAttr;
					timeAnimate();
				}, animateTime);
				if(titleAttr >= title[index].getAttribute('data-projects')){
					clearTimeout(times);
					console.log('Off');
				}
			}
			timeAnimate();
		});
	}
	//Fix number
	if($(this).scrollTop() >= projects.offset().top){
		goProjects();
		offFun = true;
	}
	$('.menu-p').on('click', function(e){
		e.preventDefault();
		$('.jq-tab-menu').slideToggle();
		$(this).toggleClass('menu-p__active');
	});
	$('.menu-on').on('click', function(e){
		e.preventDefault();
		$('.header-top__menu').toggleClass('header-top__menu_on');
		$('.header__menu').toggleClass('header__menu_on');
		$(this).toggleClass('menu-onn');
	});
	//Скролл до блоков
	$(".header__menu a, .home-arrow").mPageScroll2id({
	offset : 100 //расстояние
	});
});
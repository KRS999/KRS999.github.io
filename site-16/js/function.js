$(document).ready(function() {
    var show = true;
	var countbox = "#services";
	$(window).on("scroll load resize", function(){
		if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
		var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
		var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
		var w_height = $(window).height();        // Высота окна браузера
		var d_height = $(document).height();      // Высота всего документа
		var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$(".designs").spincrement({
				from: 0,                // Стартовое число
				to: 694,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
				decimalPlaces: 0,       // Сколько знаков оставлять после запятой
				decimalPoint: ".",      // Разделитель десятичной части числа
				thousandSeparator: ",", // Разделитель тыcячных
				duration: 4000          // Продолжительность анимации в миллисекундах
			});
			$(".created").spincrement({
				from: 0,
				to: 324,
				duration: 4000
			});
			$(".coded").spincrement({
				from: 0,
				to: 134,
				duration: 4000
			});
			$(".finished").spincrement({
				from: 0,
				to: 27,
				duration: 4000
			});
			show = false;
		}
	});
	//YOUTUBE
	var checkVideo = true;
	$('.playBtn, .closeBtn').click(function(e){
		e.preventDefault();
		if(checkVideo){
			$(".video").fadeToggle();
			$(".closeBtn").fadeToggle();
			$("iframe").each(function() {
				$(this)[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
			});
		}else{
		e.preventDefault();
			$(".video").fadeToggle();
			$(".closeBtn").fadeToggle();
			$("iframe").each(function() {
				$(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
			});
		}
		checkVideo = !checkVideo;
	});
	//YOUTUBE
	$(window).scroll(function(){
		if($(this).scrollTop()>50){
			$('.menu-icon').addClass('menu-icon-fix');
		}
		else if ($(this).scrollTop()<50){
			$('.menu-icon').removeClass('menu-icon-fix');
		}
	});
	$('.menu-icon').click(function(){
		$(".menu").toggleClass('menu-fix');
		$(this).toggleClass('open');
	});
	$(window).resize(function() {		
		if ($(window).width() > 767) {
			$('#nav-icon2, .header__wrap .nav-icon2').removeClass('open'); //Возвращаем состояния иконки меню после увелечения экрана
			$('.menu').removeAttr('style'); //Скрываем меню после увл. экрана
		 }
	});
	/*$(window).scroll(function() {		
		if ($(window).height() > 767) {
			$('#nav-icon2, .header__wrap .nav-icon2').removeClass('open'); //Возвращаем состояния иконки меню после пролистывания вниз
			$('.menu').removeAttr('style'); //Скрываем меню после пролистывания вниз
		 }
	});*/
	//Скролл до блоков
	$(".menu a, .arrow a").mPageScroll2id({
	offset : 100 //расстояние
});
});
$(document).ready(function() {
	$(window).resize(function() {		
		if ($(window).width() > 767) {
			clickChecked = true; //Ставим false чтобы раскрытие сработало
			$('#nav-icon3 span').css({backgroundColor: "#000"}); //Обнуляем цвет
			$('#nav-icon3').removeClass('open'); //Возвращаем состояния иконки меню после увелечения экрана
			$('.header_bottom_menu').removeAttr('style'); //Скрываем меню после увл. экрана
		 }
	});
	/*$(window).scroll(function() {		
		if ($(window).height() > 767) {
			$('#nav-icon2, .header__wrap .nav-icon2').removeClass('open'); //Возвращаем состояния иконки меню после пролистывания вниз
			$('.menu').removeAttr('style'); //Скрываем меню после пролистывания вниз
		 }
	});*/
	//Скролл до блоков
	$(".header_bottom_menu a, .footer_wrap a").mPageScroll2id({
	offset : 80 //расстояние
});
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
       $('.header-bottom').addClass('fixed');
       $('.header-top').addClass('fixedTop');
    }
    if ($(this).scrollTop() < 50) { //Скрываем меню при 100 Offset
       $('.header-bottom').removeClass('fixed');
       $('.header-top').removeClass('fixedTop');
    }
});

//Открываем меню
	var clickChecked = true;
	$('.open_menu').click(function(){
		if(clickChecked){
			$(".header_bottom_menu").slideDown(500);
			$('.open_menu').toggleClass('open');
			$('#nav-icon3 span').css({backgroundColor: "white"});
		}else{
			$(".header_bottom_menu").slideUp(500);
			$('.open_menu').toggleClass('open');
			$('#nav-icon3 span').css({backgroundColor: "#000"});
		}
		
		clickChecked = !clickChecked;
	});
//Открываем меню

//Открываем партфолио
	var clickChecked = true;
	$('.menuPrt').click(function(e){
		e.preventDefault();
		if(clickChecked){
			$(".tabs").slideDown(500);
			$('.menuPrt').css({backgroundColor: "rgba(105,105,105,.1)"});
		}else{
			$(".tabs").slideUp(500);
			$('.menuPrt').css({backgroundColor: "white"});
		}
		
		clickChecked = !clickChecked;
	});
//Открываем партфолио


if (/SymbOS/.test(window.navigator.userAgent)) {
    $('.headhesive').hide();
	
}
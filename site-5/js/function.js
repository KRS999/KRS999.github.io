$(document).ready(function() {
	  $('#reg_open, .reg_ .regClose').click(function() {
		$('.reg_').fadeToggle();
	  });
	$('.header-section .nav-icon2, .menuClose').click(function(){
		$(".header_menu").fadeToggle();
		$(this).toggleClass('none');
	});
	$(window).resize(function() {		
		if ($(window).width() > 768) {
			$('.header_menu').removeAttr('style'); //Скрываем меню после увл. экрана
		 }
	});
});
//Раскрываем поиск
var searchOpen = document.getElementById('search_open');
var searchClose = document.getElementById('search_close');
var searchWrap = document.getElementById('search_wrap');

function openSearch (){
	searchWrap.classList.add('search_active');
}
function closeSearch (){
	searchWrap.classList.remove('search_active');
}
searchOpen.addEventListener('click', openSearch);
searchClose.addEventListener('click', closeSearch);
//Табы
function stopDefAction(evt) {
    evt.preventDefault();
}
var deleteLink = document.querySelector('.reg_tab');
var stopTab = 0;
deleteLink.addEventListener(
    'click', stopDefAction, false
);

function tabs(el){
	//Анимируем переключение, скорость появление редактируем через CSS
	//$('.tab').slideToggle(0);
	var tabCollection = document.getElementsByClassName('tab');
	for(var i = 0; i < tabCollection.length; i++){
		tabCollection[i].classList.remove('active');
	}
	var tabsLiCollection = document.querySelectorAll('.reg_tab a');
	for(var i = 0; i < tabsLiCollection.length; i++){
		tabsLiCollection[i].classList.remove('active');
	}
	el.classList.add('active');
	document.getElementById(el.getAttribute('href')).classList.add('active');
}







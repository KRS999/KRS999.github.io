$(document).ready(function() {
  $('.open-form, .close-form').click(function() {
    $('.facebook-form').fadeToggle(500);
  });
  $('.headhesive .menu-open-2').click(function() {
    $('.headhesive .menu-header').fadeToggle(300);
  });
  $('.menu-open').click(function() {
    $('.h2 .menu-header-2').fadeToggle(300);
	  $('.headhesive .menu-header-2').removeAttr('style');
  });
	
  $(".menu-header a, .menu-header-2 a").mPageScroll2id({
	offset : 100 //расстояние
});
});

var header = new Headhesive('.header__bottom');
var h = window.innerHeight;
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
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
       $('.menu-header-2').removeAttr('style');
    }
    if ($(this).scrollTop() < 100) { //Скрываем меню при 100 Offset :D, что за велосипеды я пищу вай паля
       $('.menu-header').removeAttr('style');
    }
});

//var w = window.innerWidth;
var header = new Headhesive('.header__bottom', options);








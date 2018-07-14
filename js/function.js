$(function(){
  /*--------- show and hide the menu  ---*/
	$('.button').on("click", function(){
		$('.main').toggleClass('content_off');
		if($('body').hasClass('nav_is_visible') == true){
			$('body').removeClass('nav_is_visible');
			$('.button').removeClass('close');
		}
		else{
			$('body').addClass('nav_is_visible');
			$('.button').addClass('close');
		}
	});
	$('body').addClass('work_is_visible');
	
	function removeClasses() {
		$(".menu ul li").each(function() {
			var custom_class = $(this).find('a').data('class');
			$('body').removeClass(custom_class);
		});
	}
  
	$('.menu_links a').on('click',function(e){
		e.preventDefault();
		removeClasses();
		var custom_class = $(this).data('class');
		$('body').addClass(custom_class);
		menuLinkActive(this);
	});
});
/*
$('.button').click(function(){
	$('.menu').toggleClass('menu__on');
});
*/
//Добавить класс Active на ссылку
function menuLinkActive(e){
var menuLinks = $('.menu_links a');
	for(var i = 0; i < menuLinks.length; i++){
		$(menuLinks[i]).removeClass('active');
	}
	$(e).addClass('active');
}
//Мои работы
$(document).ready(function(){
	function createWork(img, href, alt){
		var workHref = 'https://vk.com';
		var workImg = 'img/site-3.jpg'; //Путь к картинкам
		var workAlt = 'img/site-3.jpg'; //Названия картинок
		var workLinks = $('<a href= "' + href + '" target="_blank"></a>').wrapInner('<img src="' + img + '" alt="' + alt + '">');//Создаем ссылку с картинкой
		var workItem = $('<div class="col-lg-4 col-md-6 col-sm-6 my__work_item">').wrapInner(workLinks); //Создаем Items
		var workList = $('.my_work').append(workItem);//Добавляем Items в блок Работ
	}
	
	workBase.forEach(function(work){
		createWork(work.img, work.href, work.alt);
	});
});
//ProgressBar
$('#js').LineProgressbar({
	percentage: 30,
	height: '15px',
	fillBackgroundColor: '#F7DF1E'
});

$('#jq').LineProgressbar({
	percentage: 15,
	height: '15px',
	fillBackgroundColor: '#0768AC'
});

$('#rt').LineProgressbar({
	percentage: 0,
	height: '15px',
	fillBackgroundColor: '##00D8FF'
});

$('#html').LineProgressbar({
	percentage: 50,
	height: '15px',
	fillBackgroundColor: '#E44D26'
});

$('#css').LineProgressbar({
	percentage: 50,
	height: '15px',
	fillBackgroundColor: '#0170BA'
});

//Preloader
$(function preloader(){
	$(window).on('load', function(){
		var timer = setTimeout(function(){
			$('.transition-loader').fadeOut();
		}, 5000);
	});
});

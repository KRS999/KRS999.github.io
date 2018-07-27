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
$(document).ready(function(){
	var empty1 = $('.empty-1');
	var empty2 = $('.empty-2');
	var empty3 = $('.empty-3');
//Мои работы
	function createWork(img, href){
		
		//var preloader = $('<div class="transition-loader work-items-loader">').wrapInner('<div class="transition-loader-inner"><label></label><label></label><label></label><label></label><label></label><label></label></div');
		
		var worksImg = $('<div class="works__item_img">');//Создаем Div для картинок
		//worksImg.append(preloader);
		var workLinks = $('<a href= "' + href + '" target="_blank"></a>').wrapInner(worksImg);//Создаем ссылку с картинкой
		var workItem = $('<div class="col-lg-4 col-md-6 col-sm-6 my__work_item">').wrapInner(workLinks); //Создаем Items
		$(worksImg).css({
			'backgroundImage' : 'url("' + img + '")'
		});
		if(workItem.length > 0){
			empty1.hide();
		}
		var workList = $('.my_work').append(workItem);//Добавляем Items в блок Работ
	}
	
	workBase.forEach(function(work){
		createWork(work.img, work.href);
	});
	
	//Мои проекты
	function createProject(img, href){
		
		//var preloader = $('<div class="transition-loader work-items-loader">').wrapInner('<div class="transition-loader-inner"><label></label><label></label><label></label><label></label><label></label><label></label></div');
		var projectImg = $('<div class="works__item_img">');//Создаем Div для картинок
		//worksImg.append(preloader);
		var projectLinks = $('<a href= "' + href + '" target="_blank"></a>').wrapInner(projectImg);//Создаем ссылку с картинкой
		var projectItem = $('<div class="col-lg-4 col-md-6 col-sm-6 my__work_item">').wrapInner(projectLinks); //Создаем Items
		$(projectImg).css({
			'backgroundImage' : 'url("' + img + '")'
		});
		console.log(empty3.length);
		if(projectItem.length > 0){ //Скрываем empty если Item больше нуля
			empty3.hide();
		}
		var projectList = $('.my_project').append(projectItem);//Добавляем Items в блок Работ
	}
	
	projectBase.forEach(function(project){
		createProject(project.img, project.href);
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
		}, 3000);
	});
});
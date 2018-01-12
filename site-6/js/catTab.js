function stopDefAction(evt) {
    evt.preventDefault();
}
var deleteLink_ = document.querySelector('.catalog_box_tab');
deleteLink_.addEventListener(
	'click', stopDefAction, false
);
function tabs_2(el){
	var tabCollection = document.getElementsByClassName('tab_2');
	for(var i = 0; i < tabCollection.length; i++){
		tabCollection[i].classList.remove('active_2');
	}
	var tabsLiCollection = document.querySelectorAll('.catalog_box_tab a');
	for(var i = 0; i < tabsLiCollection.length; i++){
		tabsLiCollection[i].classList.remove('active_2');
	}
	el.classList.add('active_2');
	document.getElementById(el.getAttribute('href')).classList.add('active_2');
}
//Табы
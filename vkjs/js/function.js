$(document).ready(function() {
	// id 6623279

	// https://oauth.vk.com/authorize?client_id=6623279&display=page&redirect_uri=&scope=friends,messages&response_type=token&v=5.52

	//3e90e1b25645b7ea72421dcca7172ac9ce787cfe303dd3d423f8eda4286a8db8549b01e4a9d48f864144e
	const TOKEN = '3e90e1b25645b7ea72421dcca7172ac9ce787cfe303dd3d423f8eda4286a8db8549b01e4a9d48f864144e';
	const URL = 'https://api.vk.com/method/friends.search?count=60&fields=photo_100&access_token=3e90e1b25645b7ea72421dcca7172ac9ce787cfe303dd3d423f8eda4286a8db8549b01e4a9d48f864144e&v=5.52';

	/*HTML Objects*/
	
	var userHomeImg = $('.home-top__img img');
	var userNames = $('.names');
	var userStatus = $('.status');
	var userOnline = $('.online');
	
	
	function getUrl(method, params){
		if(!method) throw new Error('Метод не указан!');
		params = params || {};
		params['access_token'] = TOKEN;
		return 'https://api.vk.com/method/' + method + '?' + $.param(params) + '&v=5.52';
	}

	function sendRequest(method, params, callback){
		$.ajax({
			url: getUrl(method, params),
			method: 'GET',
			dataType: 'JSONP',
			success: callback
		});
		console.log('https://api.vk.com/method/' + method + '?' + $.param(params));
	}
	//USER
	function loadUser(){
		sendRequest('users.get', {
			fields: 'photo_100, status, online',
			}, function(data){
	//		console.log(data.response);
			drawFriends(data.response)
		});
	}
	loadUser();
	//FRIENDS
	function loadFriends(){
		sendRequest('friends.search', {
			count: 60,
			fields: 'photo_100, status',
			}, function(data){
	//		console.log(data.response);
			drawFriends(data.response)
		});
	}
	loadFriends();
	function drawFriends(user){
		for(var i = 0; i < user.length; i++){
			var online = online = user[i].online ? 'Online' : 'Offline';
			userHomeImg[0].src = user[i].photo_100;
			userNames.text(user[i].first_name + ' ' + user[i].last_name);
			userStatus.text(user[i].status);
			userOnline.text(online);
		}
	}



































/*



function getUrl(method, params){
	if(!method) throw new Error('Метод не указан!');
	params = params || {};
	params['access_token'] = TOKEN;
	return 'https://api.vk.com/method/' + method + '?' + $.param(params) + '&v=5.52';
}

function sendRequest(method, params, func){
	$.ajax({
		url: getUrl(method, params),
		method: 'GET',
		dataType: 'JSONP',
		success: func
	});
	console.log('https://api.vk.com/method/' + method + '?' + $.param(params));
}

function loadFriends(){
	sendRequest('friends.search', {
		count: 60,
		fields: 'photo_100, status,nickname, sex, bdate, city, country, timezone, online, can_write_private_message',
		}, function(data){
//		console.log(data.response);
		drawFriends(data.response)
	});
}

function drawFriends(friends){
	var html = '';
//	var online = online = f.online ? 'Online' : 'Offline';
	console.log(friends.items[0].photo_100);
	for(var i = 0; i < friends.items.length; i++){
		var f = friends.items[i];
		console.log(friends.items[i]);
		html += 
			'<li>' + 
			'<a target="_blank" href="https://vk.com/id' + f.id + '">'
			+ '<img src="' + f.photo_100 + '"/>'
				+'<div>'
					+'<h4>' + f.first_name + ' ' + f.last_name + '</h4>'+
					'<button>Написать</button>'
				+'</div>'
			+ '</a>'
			+ '</li>';
	}
	$('ul').html(html);
}

*/
});
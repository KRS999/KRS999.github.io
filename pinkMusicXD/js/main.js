(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _myScripts = require('./myScripts');

var myScripts = _interopRequireWildcard(_myScripts);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

},{"./myScripts":2}],2:[function(require,module,exports){
'use strict';

(function () {
	//MinimalComments HardCode
	//Гулящие полоски
	particlesJS.load('particles-js', 'libs/particles/particles.json', function () {});
	//Urls
	var musicUrl = 'https://mp3ton.info';
	var musicPopUrl = 'https://mp3ton.info/populyarnye/';
	var musicProxy = 'https://cors.io/?';
	var musicProxy2 = 'https://cors-anywhere.herokuapp.com/';
	var musicSearchUrl = 'https://mp3ton.info/?do=search&mode=advanced&subaction=search&story=';
	var musicArr = [];
	var musicObj = {};
	var musicHtml = '';
	var infoHtml = '';
	//DOM
	var player = $('.player');
	var musicItems = $('.music-items');
	var musicBtns = $('[data-btn]');
	var playerPlaylist = $('.player-playlist');
	var infoBox = $('.info');
	var infoSong = $('.album__bottom');
	var preloader = $('.preloader');
	var preloaderAjax = $('.preloader-ajax');
	var playerSearchBox = $('.player__search');
	var playerSeachInput = $('.player__search input');
	var amplitudeShuffle = $('#shuffle');
	var amplitudeRepeat = $('#repeat');
	//Settings App
	var onlineMusicSettings = JSON.parse(localStorage.getItem('music-settings')) || {
		'shuffle': false,
		'repeat': false,
		'volume': 100,
		'animateTimer': 600
	};
	var onlineMusicApp = {
		//Общий запрос
		onlineMusicRequest: function onlineMusicRequest(url, call, ajaxLoad) {
			//Если в аргкмент приходит true то вызываем ajax preloader
			if (ajaxLoad === true) {
				$(preloaderAjax).fadeIn();
			}
			$.ajax({
				url: musicProxy2 + url,
				method: 'GET',
				dataType: 'html',
				success: call,
				complete: function complete(data) {
					if (data.status === 200) {
						$(preloader).fadeOut(onlineMusicSettings.animateTimer);
						$(preloaderAjax).fadeOut(onlineMusicSettings.animateTimer);
					} else {
						console.log('Сервер не доступен!');
					}
				},
				error: function error(err) {
					console.error(err);
				}
			});
		},

		//Общий запрос на вывод музыки
		onlineMusicPlay: function onlineMusicPlay(url, ajaxPreloader) {
			this.onlineMusicRequest(url, function (data) {
				var musicList = $(data).find('.play-item');
				var musicListLength = $(musicList).length;
				//Обнкляем при повторном запросе
				musicHtml = '';
				musicArr = [];
				musicItems.empty();
				$.each(musicList, function (i, el) {
					musicObj = {};
					var musicMp3 = '' + musicUrl + $(el).attr('data-file');
					//console.log(el);
					var musicArtist = $(el).find('.ps-title').text();
					var musicName = $(el).find('.track-namew').text();
					var musicTime = '0' + $(el).find('.p-right').text();
					var musicCover = '' + musicUrl + $(el).find('.main-news-image img').attr('src');
					var musicLink = $(el).find('.play-desc').attr('href');
					//console.log(musicLink);
					//Создаем объекты
					musicObj.url = musicMp3;
					musicObj.artist = musicArtist;
					musicObj.name = musicName;
					musicObj.time = musicTime;
					musicObj.cover_art_url = musicCover;
					//Вносим объекты в массив
					musicArr.push(musicObj);
					//Элементы
					musicHtml += '\n\t\t\t\t\t<div class="song-wrap">\n\t\t\t\t\t\t<div class="song amplitude-song-container amplitude-play-pause" amplitude-song-index="' + i + '">\n\t\t\t\t\t\t\t<div class="song-cover">\n\t\t\t\t\t\t\t\t<img src="' + musicCover + '" alt="">\n\t\t\t\t\t\t\t\t<i class="large material-icons now-playing">play_arrow</i>\n\t\t\t\t\t\t\t\t<i class="large material-icons yes-playing">pause</i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="song-meta-container">\n\t\t\t\t\t\t\t\t<span>' + musicArtist + '</span>\n\t\t\t\t\t\t\t\t<span class="song-name">' + musicName + '</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a href="#" data-href="' + musicLink + '" class="song__option music__btn"><i class="material-icons">more_horiz</i></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t';
				});
				if (musicListLength === 0) {
					musicHtml = '\n\t\t\t\t\t<p class="empty">\u041D\u0435\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E!</p>\n\t\t\t\t\t';
				}
				//Выносим контент
				musicItems.append(musicHtml);
				//Передаем массив для проигравания
				Amplitude.pause();
				Amplitude.init({
					"songs": musicArr,
					"volume": onlineMusicSettings.volume
				});
				//Настройки
				if (onlineMusicSettings.shuffle === true) {
					$(amplitudeShuffle).addClass('amplitude-shuffle-on');
					Amplitude.setShuffle();
				}
				if (onlineMusicSettings.repeat === true) {
					$(amplitudeRepeat).addClass('amplitude-repeat-on');
					Amplitude.setRepeat();
				}
				//Скоролинг вверх
				scrollTopDown(musicItems);
			}, ajaxPreloader);
		},
		onlineMusicInformation: function onlineMusicInformation(url) {
			infoHtml = '';
			$(infoSong).empty();
			this.onlineMusicRequest(url, function (data) {
				//console.log(data);
				var info = $(data).find('ul.finfo');
				var infoTitle = $(data).find('.fright h1 span').text();
				var infoFormat = $(info).children('li').eq(1).children('span')[0].nextSibling.data;
				var infoSize = $(info).children('li').eq(2).children('span')[0].nextSibling.data;
				var infoBitrate = $(info).children('li').eq(3).children('span')[0].nextSibling.data;
				var infoTime = $(info).children('li').eq(4).children('span')[0].nextSibling.data.trim();
				var infoDownloadLink = '' + musicUrl + $(data).find('.fplay').attr('data-file');
				infoHtml = '\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<h1>' + infoTitle + '</h1>\n\t\t\t\t\t\t<li>\u0424\u043E\u0440\u043C\u0430\u0442: <span>' + infoFormat + '</span></li>\n\t\t\t\t\t\t<li>\u0420\u0430\u0437\u043C\u0435\u0440: <span>' + infoSize + '</span></li>\n\t\t\t\t\t\t<li>\u0411\u0438\u0442\u0440\u0435\u0439\u0442: <span>' + infoBitrate + '</span></li>\n\t\t\t\t\t\t<li>\u0414\u043B\u0438\u0442\u0435\u0442\u043B\u044C\u043D\u043E\u0441\u0442\u044C: <span>0' + infoTime + '</span></li>\n\t\t\t\t\t\t<li><a href="' + infoDownloadLink + '">\u0421\u043A\u0430\u0447\u0430\u0442\u044C</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t';
				$(infoSong).append(infoHtml);
				$(infoBox).addClass('info-on');
			}, true);
		}
	};
	//Вызываем приложения
	onlineMusicApp.onlineMusicPlay(musicPopUrl);
	//События
	$(musicBtns).on('click', function (e) {
		e.preventDefault();
		switch ($(this).attr('data-btn')) {
			case 'menu':
				console.log(1);
				break;
			case 'playlist':
				$(playerPlaylist).toggleClass('player-playlist_on');
				$(player).toggleClass('player-off');
				break;
			case 'info-close':
				$(infoBox).removeClass('info-on');
				break;
			case 'player-search':
				$(playerSearchBox).addClass('player__search-on');
				$(playerSeachInput).focus();
				break;
			case 'close-search':
				$(playerSearchBox).removeClass('player__search-on');
				break;
			case 'music-search':
				onlineMusicApp.onlineMusicPlay('' + musicSearchUrl + playerSeachInput.val(), true);
				break;
			case 'shuffle':
				if ($(this).hasClass('amplitude-shuffle-on') === true) {
					onlineMusicSettings.shuffle = false;
					reloadSettings();
				} else {
					onlineMusicSettings.shuffle = true;
					reloadSettings();
				}
				break;
			case 'repeat':
				if ($(this).hasClass('amplitude-repeat-on') === true) {
					onlineMusicSettings.repeat = false;
					reloadSettings();
				} else {
					onlineMusicSettings.repeat = true;
					reloadSettings();
				}
				break;
			case 'library':
				onlineMusicApp.onlineMusicPlay(musicPopUrl, true);
				break;
			default:
				return false;
				break;
		}
	});
	//Вызов окна информации
	$(musicItems).on('click', 'a.song__option', function (e) {
		e.preventDefault();
		var dataHref = $(this).attr('data-href');
		onlineMusicApp.onlineMusicInformation(dataHref);
	});
	//Функции
	//Запуск настрояк
	function reloadSettings() {
		localStorage.setItem('music-settings', JSON.stringify(onlineMusicSettings));
	}
	reloadSettings();
	//ScrollTopDown
	function scrollTopDown(el) {
		$(el).animate({
			'scrollTop': 0
		}, onlineMusicSettings.animateTimer);
	}
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvanMvYnVpbGQvbWFpbi5qcyIsImRldi9qcy9idWlsZC9teVNjcmlwdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFJLGFBQWEsUUFBUSxhQUFSLENBQWpCOztBQUVBLElBQUksWUFBWSx3QkFBd0IsVUFBeEIsQ0FBaEI7O0FBRUEsU0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLE1BQUksT0FBTyxJQUFJLFVBQWYsRUFBMkI7QUFBRSxXQUFPLEdBQVA7QUFBYSxHQUExQyxNQUFnRDtBQUFFLFFBQUksU0FBUyxFQUFiLENBQWlCLElBQUksT0FBTyxJQUFYLEVBQWlCO0FBQUUsV0FBSyxJQUFJLEdBQVQsSUFBZ0IsR0FBaEIsRUFBcUI7QUFBRSxZQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkO0FBQXlCO0FBQUUsS0FBQyxPQUFPLE9BQVAsR0FBaUIsR0FBakIsQ0FBc0IsT0FBTyxNQUFQO0FBQWdCO0FBQUU7OztBQ043UTs7QUFFQSxDQUFDLFlBQVk7QUFDWjtBQUNBO0FBQ0EsYUFBWSxJQUFaLENBQWlCLGNBQWpCLEVBQWlDLCtCQUFqQyxFQUFrRSxZQUFZLENBQUUsQ0FBaEY7QUFDQTtBQUNBLEtBQUksV0FBVyxxQkFBZjtBQUNBLEtBQUksY0FBYyxrQ0FBbEI7QUFDQSxLQUFJLGFBQWEsbUJBQWpCO0FBQ0EsS0FBSSxjQUFjLHNDQUFsQjtBQUNBLEtBQUksaUJBQWlCLHNFQUFyQjtBQUNBLEtBQUksV0FBVyxFQUFmO0FBQ0EsS0FBSSxXQUFXLEVBQWY7QUFDQSxLQUFJLFlBQVksRUFBaEI7QUFDQSxLQUFJLFdBQVcsRUFBZjtBQUNBO0FBQ0EsS0FBSSxTQUFTLEVBQUUsU0FBRixDQUFi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QUFDQTtBQUNBO0FBQ0Q7QUFDRCxRQUFLLFFBQUw7QUFDQyxRQUFJLEVBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIscUJBQWpCLE1BQTRDLElBQWhELEVBQXNEO0FBQ3JELHlCQUFvQixNQUFwQixHQUE2QixLQUE3QjtBQUNBO0FBQ0EsS0FIRCxNQUdPO0FBQ04seUJBQW9CLE1BQXBCLEdBQTZCLElBQTdCO0FBQ0E7QUFDQTtBQUNEO0FBQ0QsUUFBSyxTQUFMO0FBQ0MsbUJBQWUsZUFBZixDQUErQixXQUEvQixFQUE0QyxJQUE1QztBQUNBO0FBQ0Q7QUFDQyxXQUFPLEtBQVA7QUFDQTtBQTVDRjtBQThDQSxFQWhERDtBQWlEQTtBQUNBLEdBQUUsVUFBRixFQUFjLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsZ0JBQTFCLEVBQTRDLFVBQVUsQ0FBVixFQUFhO0FBQ3hELElBQUUsY0FBRjtBQUNBLE1BQUksV0FBVyxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsV0FBYixDQUFmO0FBQ0EsaUJBQWUsc0JBQWYsQ0FBc0MsUUFBdEM7QUFDQSxFQUpEO0FBS0E7QUFDQTtBQUNBLFVBQVMsY0FBVCxHQUEwQjtBQUN6QixlQUFhLE9BQWIsQ0FBcUIsZ0JBQXJCLEVBQXVDLEtBQUssU0FBTCxDQUFlLG1CQUFmLENBQXZDO0FBQ0E7QUFDRDtBQUNBO0FBQ0EsVUFBUyxhQUFULENBQXVCLEVBQXZCLEVBQTJCO0FBQzFCLElBQUUsRUFBRixFQUFNLE9BQU4sQ0FBYztBQUNiLGdCQUFhO0FBREEsR0FBZCxFQUVHLG9CQUFvQixZQUZ2QjtBQUdBO0FBQ0QsQ0ExTUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfbXlTY3JpcHRzID0gcmVxdWlyZSgnLi9teVNjcmlwdHMnKTtcblxudmFyIG15U2NyaXB0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9teVNjcmlwdHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfSIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblx0Ly9NaW5pbWFsQ29tbWVudHMgSGFyZENvZGVcblx0Ly/Qk9GD0LvRj9GJ0LjQtSDQv9C+0LvQvtGB0LrQuFxuXHRwYXJ0aWNsZXNKUy5sb2FkKCdwYXJ0aWNsZXMtanMnLCAnbGlicy9wYXJ0aWNsZXMvcGFydGljbGVzLmpzb24nLCBmdW5jdGlvbiAoKSB7fSk7XG5cdC8vVXJsc1xuXHR2YXIgbXVzaWNVcmwgPSAnaHR0cHM6Ly9tcDN0b24uaW5mbyc7XG5cdHZhciBtdXNpY1BvcFVybCA9ICdodHRwczovL21wM3Rvbi5pbmZvL3BvcHVseWFybnllLyc7XG5cdHZhciBtdXNpY1Byb3h5ID0gJ2h0dHBzOi8vY29ycy5pby8/Jztcblx0dmFyIG11c2ljUHJveHkyID0gJ2h0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tLyc7XG5cdHZhciBtdXNpY1NlYXJjaFVybCA9ICdodHRwczovL21wM3Rvbi5pbmZvLz9kbz1zZWFyY2gmbW9kZT1hZHZhbmNlZCZzdWJhY3Rpb249c2VhcmNoJnN0b3J5PSc7XG5cdHZhciBtdXNpY0FyciA9IFtdO1xuXHR2YXIgbXVzaWNPYmogPSB7fTtcblx0dmFyIG11c2ljSHRtbCA9ICcnO1xuXHR2YXIgaW5mb0h0bWwgPSAnJztcblx0Ly9ET01cblx0dmFyIHBsYXllciA9ICQoJy5wbGF5ZXInKTtcblx0dmFyIG11c2ljSXRlbXMgPSAkKCcubXVzaWMtaXRlbXMnKTtcblx0dmFyIG11c2ljQnRucyA9ICQoJ1tkYXRhLWJ0bl0nKTtcblx0dmFyIHBsYXllclBsYXlsaXN0ID0gJCgnLnBsYXllci1wbGF5bGlzdCcpO1xuXHR2YXIgaW5mb0JveCA9ICQoJy5pbmZvJyk7XG5cdHZhciBpbmZvU29uZyA9ICQoJy5hbGJ1bV9fYm90dG9tJyk7XG5cdHZhciBwcmVsb2FkZXIgPSAkKCcucHJlbG9hZGVyJyk7XG5cdHZhciBwcmVsb2FkZXJBamF4ID0gJCgnLnByZWxvYWRlci1hamF4Jyk7XG5cdHZhciBwbGF5ZXJTZWFyY2hCb3ggPSAkKCcucGxheWVyX19zZWFyY2gnKTtcblx0dmFyIHBsYXllclNlYWNoSW5wdXQgPSAkKCcucGxheWVyX19zZWFyY2ggaW5wdXQnKTtcblx0dmFyIGFtcGxpdHVkZVNodWZmbGUgPSAkKCcjc2h1ZmZsZScpO1xuXHR2YXIgYW1wbGl0dWRlUmVwZWF0ID0gJCgnI3JlcGVhdCcpO1xuXHQvL1NldHRpbmdzIEFwcFxuXHR2YXIgb25saW5lTXVzaWNTZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ211c2ljLXNldHRpbmdzJykpIHx8IHtcblx0XHQnc2h1ZmZsZSc6IGZhbHNlLFxuXHRcdCdyZXBlYXQnOiBmYWxzZSxcblx0XHQndm9sdW1lJzogMTAwLFxuXHRcdCdhbmltYXRlVGltZXInOiA2MDBcblx0fTtcblx0dmFyIG9ubGluZU11c2ljQXBwID0ge1xuXHRcdC8v0J7QsdGJ0LjQuSDQt9Cw0L/RgNC+0YFcblx0XHRvbmxpbmVNdXNpY1JlcXVlc3Q6IGZ1bmN0aW9uIG9ubGluZU11c2ljUmVxdWVzdCh1cmwsIGNhbGwsIGFqYXhMb2FkKSB7XG5cdFx0XHQvL9CV0YHQu9C4INCyINCw0YDQs9C60LzQtdC90YIg0L/RgNC40YXQvtC00LjRgiB0cnVlINGC0L4g0LLRi9C30YvQstCw0LXQvCBhamF4IHByZWxvYWRlclxuXHRcdFx0aWYgKGFqYXhMb2FkID09PSB0cnVlKSB7XG5cdFx0XHRcdCQocHJlbG9hZGVyQWpheCkuZmFkZUluKCk7XG5cdFx0XHR9XG5cdFx0XHQkLmFqYXgoe1xuXHRcdFx0XHR1cmw6IG11c2ljUHJveHkyICsgdXJsLFxuXHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdFx0XHRkYXRhVHlwZTogJ2h0bWwnLFxuXHRcdFx0XHRzdWNjZXNzOiBjYWxsLFxuXHRcdFx0XHRjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoZGF0YSkge1xuXHRcdFx0XHRcdGlmIChkYXRhLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0XHQkKHByZWxvYWRlcikuZmFkZU91dChvbmxpbmVNdXNpY1NldHRpbmdzLmFuaW1hdGVUaW1lcik7XG5cdFx0XHRcdFx0XHQkKHByZWxvYWRlckFqYXgpLmZhZGVPdXQob25saW5lTXVzaWNTZXR0aW5ncy5hbmltYXRlVGltZXIpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn0KHQtdGA0LLQtdGAINC90LUg0LTQvtGB0YLRg9C/0LXQvSEnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbiBlcnJvcihlcnIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHQvL9Ce0LHRidC40Lkg0LfQsNC/0YDQvtGBINC90LAg0LLRi9Cy0L7QtCDQvNGD0LfRi9C60Lhcblx0XHRvbmxpbmVNdXNpY1BsYXk6IGZ1bmN0aW9uIG9ubGluZU11c2ljUGxheSh1cmwsIGFqYXhQcmVsb2FkZXIpIHtcblx0XHRcdHRoaXMub25saW5lTXVzaWNSZXF1ZXN0KHVybCwgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0dmFyIG11c2ljTGlzdCA9ICQoZGF0YSkuZmluZCgnLnBsYXktaXRlbScpO1xuXHRcdFx0XHR2YXIgbXVzaWNMaXN0TGVuZ3RoID0gJChtdXNpY0xpc3QpLmxlbmd0aDtcblx0XHRcdFx0Ly/QntCx0L3QutC70Y/QtdC8INC/0YDQuCDQv9C+0LLRgtC+0YDQvdC+0Lwg0LfQsNC/0YDQvtGB0LVcblx0XHRcdFx0bXVzaWNIdG1sID0gJyc7XG5cdFx0XHRcdG11c2ljQXJyID0gW107XG5cdFx0XHRcdG11c2ljSXRlbXMuZW1wdHkoKTtcblx0XHRcdFx0JC5lYWNoKG11c2ljTGlzdCwgZnVuY3Rpb24gKGksIGVsKSB7XG5cdFx0XHRcdFx0bXVzaWNPYmogPSB7fTtcblx0XHRcdFx0XHR2YXIgbXVzaWNNcDMgPSAnJyArIG11c2ljVXJsICsgJChlbCkuYXR0cignZGF0YS1maWxlJyk7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhlbCk7XG5cdFx0XHRcdFx0dmFyIG11c2ljQXJ0aXN0ID0gJChlbCkuZmluZCgnLnBzLXRpdGxlJykudGV4dCgpO1xuXHRcdFx0XHRcdHZhciBtdXNpY05hbWUgPSAkKGVsKS5maW5kKCcudHJhY2stbmFtZXcnKS50ZXh0KCk7XG5cdFx0XHRcdFx0dmFyIG11c2ljVGltZSA9ICcwJyArICQoZWwpLmZpbmQoJy5wLXJpZ2h0JykudGV4dCgpO1xuXHRcdFx0XHRcdHZhciBtdXNpY0NvdmVyID0gJycgKyBtdXNpY1VybCArICQoZWwpLmZpbmQoJy5tYWluLW5ld3MtaW1hZ2UgaW1nJykuYXR0cignc3JjJyk7XG5cdFx0XHRcdFx0dmFyIG11c2ljTGluayA9ICQoZWwpLmZpbmQoJy5wbGF5LWRlc2MnKS5hdHRyKCdocmVmJyk7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhtdXNpY0xpbmspO1xuXHRcdFx0XHRcdC8v0KHQvtC30LTQsNC10Lwg0L7QsdGK0LXQutGC0Ytcblx0XHRcdFx0XHRtdXNpY09iai51cmwgPSBtdXNpY01wMztcblx0XHRcdFx0XHRtdXNpY09iai5hcnRpc3QgPSBtdXNpY0FydGlzdDtcblx0XHRcdFx0XHRtdXNpY09iai5uYW1lID0gbXVzaWNOYW1lO1xuXHRcdFx0XHRcdG11c2ljT2JqLnRpbWUgPSBtdXNpY1RpbWU7XG5cdFx0XHRcdFx0bXVzaWNPYmouY292ZXJfYXJ0X3VybCA9IG11c2ljQ292ZXI7XG5cdFx0XHRcdFx0Ly/QktC90L7RgdC40Lwg0L7QsdGK0LXQutGC0Ysg0LIg0LzQsNGB0YHQuNCyXG5cdFx0XHRcdFx0bXVzaWNBcnIucHVzaChtdXNpY09iaik7XG5cdFx0XHRcdFx0Ly/QrdC70LXQvNC10L3RgtGLXG5cdFx0XHRcdFx0bXVzaWNIdG1sICs9ICdcXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVwic29uZy13cmFwXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cInNvbmcgYW1wbGl0dWRlLXNvbmctY29udGFpbmVyIGFtcGxpdHVkZS1wbGF5LXBhdXNlXCIgYW1wbGl0dWRlLXNvbmctaW5kZXg9XCInICsgaSArICdcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVwic29uZy1jb3ZlclwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgc3JjPVwiJyArIG11c2ljQ292ZXIgKyAnXCIgYWx0PVwiXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGkgY2xhc3M9XCJsYXJnZSBtYXRlcmlhbC1pY29ucyBub3ctcGxheWluZ1wiPnBsYXlfYXJyb3c8L2k+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGkgY2xhc3M9XCJsYXJnZSBtYXRlcmlhbC1pY29ucyB5ZXMtcGxheWluZ1wiPnBhdXNlPC9pPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XCJzb25nLW1ldGEtY29udGFpbmVyXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4+JyArIG11c2ljQXJ0aXN0ICsgJzwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cInNvbmctbmFtZVwiPicgKyBtdXNpY05hbWUgKyAnPC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGhyZWY9XCIjXCIgZGF0YS1ocmVmPVwiJyArIG11c2ljTGluayArICdcIiBjbGFzcz1cInNvbmdfX29wdGlvbiBtdXNpY19fYnRuXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPm1vcmVfaG9yaXo8L2k+PC9hPlxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdCc7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAobXVzaWNMaXN0TGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0bXVzaWNIdG1sID0gJ1xcblxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVwiZW1wdHlcIj5cXHUwNDFEXFx1MDQzNVxcdTA0NDdcXHUwNDM1XFx1MDQzM1xcdTA0M0UgXFx1MDQzRFxcdTA0MzUgXFx1MDQzRFxcdTA0MzBcXHUwNDM5XFx1MDQzNFxcdTA0MzVcXHUwNDNEXFx1MDQzRSE8L3A+XFxuXFx0XFx0XFx0XFx0XFx0Jztcblx0XHRcdFx0fVxuXHRcdFx0XHQvL9CS0YvQvdC+0YHQuNC8INC60L7QvdGC0LXQvdGCXG5cdFx0XHRcdG11c2ljSXRlbXMuYXBwZW5kKG11c2ljSHRtbCk7XG5cdFx0XHRcdC8v0J/QtdGA0LXQtNCw0LXQvCDQvNCw0YHRgdC40LIg0LTQu9GPINC/0YDQvtC40LPRgNCw0LLQsNC90LjRj1xuXHRcdFx0XHRBbXBsaXR1ZGUucGF1c2UoKTtcblx0XHRcdFx0QW1wbGl0dWRlLmluaXQoe1xuXHRcdFx0XHRcdFwic29uZ3NcIjogbXVzaWNBcnIsXG5cdFx0XHRcdFx0XCJ2b2x1bWVcIjogb25saW5lTXVzaWNTZXR0aW5ncy52b2x1bWVcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8v0J3QsNGB0YLRgNC+0LnQutC4XG5cdFx0XHRcdGlmIChvbmxpbmVNdXNpY1NldHRpbmdzLnNodWZmbGUgPT09IHRydWUpIHtcblx0XHRcdFx0XHQkKGFtcGxpdHVkZVNodWZmbGUpLmFkZENsYXNzKCdhbXBsaXR1ZGUtc2h1ZmZsZS1vbicpO1xuXHRcdFx0XHRcdEFtcGxpdHVkZS5zZXRTaHVmZmxlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG9ubGluZU11c2ljU2V0dGluZ3MucmVwZWF0ID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0JChhbXBsaXR1ZGVSZXBlYXQpLmFkZENsYXNzKCdhbXBsaXR1ZGUtcmVwZWF0LW9uJyk7XG5cdFx0XHRcdFx0QW1wbGl0dWRlLnNldFJlcGVhdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8v0KHQutC+0YDQvtC70LjQvdCzINCy0LLQtdGA0YVcblx0XHRcdFx0c2Nyb2xsVG9wRG93bihtdXNpY0l0ZW1zKTtcblx0XHRcdH0sIGFqYXhQcmVsb2FkZXIpO1xuXHRcdH0sXG5cdFx0b25saW5lTXVzaWNJbmZvcm1hdGlvbjogZnVuY3Rpb24gb25saW5lTXVzaWNJbmZvcm1hdGlvbih1cmwpIHtcblx0XHRcdGluZm9IdG1sID0gJyc7XG5cdFx0XHQkKGluZm9Tb25nKS5lbXB0eSgpO1xuXHRcdFx0dGhpcy5vbmxpbmVNdXNpY1JlcXVlc3QodXJsLCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHR2YXIgaW5mbyA9ICQoZGF0YSkuZmluZCgndWwuZmluZm8nKTtcblx0XHRcdFx0dmFyIGluZm9UaXRsZSA9ICQoZGF0YSkuZmluZCgnLmZyaWdodCBoMSBzcGFuJykudGV4dCgpO1xuXHRcdFx0XHR2YXIgaW5mb0Zvcm1hdCA9ICQoaW5mbykuY2hpbGRyZW4oJ2xpJykuZXEoMSkuY2hpbGRyZW4oJ3NwYW4nKVswXS5uZXh0U2libGluZy5kYXRhO1xuXHRcdFx0XHR2YXIgaW5mb1NpemUgPSAkKGluZm8pLmNoaWxkcmVuKCdsaScpLmVxKDIpLmNoaWxkcmVuKCdzcGFuJylbMF0ubmV4dFNpYmxpbmcuZGF0YTtcblx0XHRcdFx0dmFyIGluZm9CaXRyYXRlID0gJChpbmZvKS5jaGlsZHJlbignbGknKS5lcSgzKS5jaGlsZHJlbignc3BhbicpWzBdLm5leHRTaWJsaW5nLmRhdGE7XG5cdFx0XHRcdHZhciBpbmZvVGltZSA9ICQoaW5mbykuY2hpbGRyZW4oJ2xpJykuZXEoNCkuY2hpbGRyZW4oJ3NwYW4nKVswXS5uZXh0U2libGluZy5kYXRhLnRyaW0oKTtcblx0XHRcdFx0dmFyIGluZm9Eb3dubG9hZExpbmsgPSAnJyArIG11c2ljVXJsICsgJChkYXRhKS5maW5kKCcuZnBsYXknKS5hdHRyKCdkYXRhLWZpbGUnKTtcblx0XHRcdFx0aW5mb0h0bWwgPSAnXFxuXFx0XFx0XFx0XFx0XFx0PHVsPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxoMT4nICsgaW5mb1RpdGxlICsgJzwvaDE+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGxpPlxcdTA0MjRcXHUwNDNFXFx1MDQ0MFxcdTA0M0NcXHUwNDMwXFx1MDQ0MjogPHNwYW4+JyArIGluZm9Gb3JtYXQgKyAnPC9zcGFuPjwvbGk+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGxpPlxcdTA0MjBcXHUwNDMwXFx1MDQzN1xcdTA0M0NcXHUwNDM1XFx1MDQ0MDogPHNwYW4+JyArIGluZm9TaXplICsgJzwvc3Bhbj48L2xpPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxsaT5cXHUwNDExXFx1MDQzOFxcdTA0NDJcXHUwNDQwXFx1MDQzNVxcdTA0MzlcXHUwNDQyOiA8c3Bhbj4nICsgaW5mb0JpdHJhdGUgKyAnPC9zcGFuPjwvbGk+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGxpPlxcdTA0MTRcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDM1XFx1MDQ0MlxcdTA0M0JcXHUwNDRDXFx1MDQzRFxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0NEM6IDxzcGFuPjAnICsgaW5mb1RpbWUgKyAnPC9zcGFuPjwvbGk+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGxpPjxhIGhyZWY9XCInICsgaW5mb0Rvd25sb2FkTGluayArICdcIj5cXHUwNDIxXFx1MDQzQVxcdTA0MzBcXHUwNDQ3XFx1MDQzMFxcdTA0NDJcXHUwNDRDPC9hPjwvbGk+XFxuXFx0XFx0XFx0XFx0XFx0PC91bD5cXG5cXHRcXHRcXHRcXHQnO1xuXHRcdFx0XHQkKGluZm9Tb25nKS5hcHBlbmQoaW5mb0h0bWwpO1xuXHRcdFx0XHQkKGluZm9Cb3gpLmFkZENsYXNzKCdpbmZvLW9uJyk7XG5cdFx0XHR9LCB0cnVlKTtcblx0XHR9XG5cdH07XG5cdC8v0JLRi9C30YvQstCw0LXQvCDQv9GA0LjQu9C+0LbQtdC90LjRj1xuXHRvbmxpbmVNdXNpY0FwcC5vbmxpbmVNdXNpY1BsYXkobXVzaWNQb3BVcmwpO1xuXHQvL9Ch0L7QsdGL0YLQuNGPXG5cdCQobXVzaWNCdG5zKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRzd2l0Y2ggKCQodGhpcykuYXR0cignZGF0YS1idG4nKSkge1xuXHRcdFx0Y2FzZSAnbWVudSc6XG5cdFx0XHRcdGNvbnNvbGUubG9nKDEpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3BsYXlsaXN0Jzpcblx0XHRcdFx0JChwbGF5ZXJQbGF5bGlzdCkudG9nZ2xlQ2xhc3MoJ3BsYXllci1wbGF5bGlzdF9vbicpO1xuXHRcdFx0XHQkKHBsYXllcikudG9nZ2xlQ2xhc3MoJ3BsYXllci1vZmYnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdpbmZvLWNsb3NlJzpcblx0XHRcdFx0JChpbmZvQm94KS5yZW1vdmVDbGFzcygnaW5mby1vbicpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3BsYXllci1zZWFyY2gnOlxuXHRcdFx0XHQkKHBsYXllclNlYXJjaEJveCkuYWRkQ2xhc3MoJ3BsYXllcl9fc2VhcmNoLW9uJyk7XG5cdFx0XHRcdCQocGxheWVyU2VhY2hJbnB1dCkuZm9jdXMoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjbG9zZS1zZWFyY2gnOlxuXHRcdFx0XHQkKHBsYXllclNlYXJjaEJveCkucmVtb3ZlQ2xhc3MoJ3BsYXllcl9fc2VhcmNoLW9uJyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbXVzaWMtc2VhcmNoJzpcblx0XHRcdFx0b25saW5lTXVzaWNBcHAub25saW5lTXVzaWNQbGF5KCcnICsgbXVzaWNTZWFyY2hVcmwgKyBwbGF5ZXJTZWFjaElucHV0LnZhbCgpLCB0cnVlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdzaHVmZmxlJzpcblx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FtcGxpdHVkZS1zaHVmZmxlLW9uJykgPT09IHRydWUpIHtcblx0XHRcdFx0XHRvbmxpbmVNdXNpY1NldHRpbmdzLnNodWZmbGUgPSBmYWxzZTtcblx0XHRcdFx0XHRyZWxvYWRTZXR0aW5ncygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG9ubGluZU11c2ljU2V0dGluZ3Muc2h1ZmZsZSA9IHRydWU7XG5cdFx0XHRcdFx0cmVsb2FkU2V0dGluZ3MoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3JlcGVhdCc6XG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhbXBsaXR1ZGUtcmVwZWF0LW9uJykgPT09IHRydWUpIHtcblx0XHRcdFx0XHRvbmxpbmVNdXNpY1NldHRpbmdzLnJlcGVhdCA9IGZhbHNlO1xuXHRcdFx0XHRcdHJlbG9hZFNldHRpbmdzKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b25saW5lTXVzaWNTZXR0aW5ncy5yZXBlYXQgPSB0cnVlO1xuXHRcdFx0XHRcdHJlbG9hZFNldHRpbmdzKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdsaWJyYXJ5Jzpcblx0XHRcdFx0b25saW5lTXVzaWNBcHAub25saW5lTXVzaWNQbGF5KG11c2ljUG9wVXJsLCB0cnVlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSk7XG5cdC8v0JLRi9C30L7QsiDQvtC60L3QsCDQuNC90YTQvtGA0LzQsNGG0LjQuFxuXHQkKG11c2ljSXRlbXMpLm9uKCdjbGljaycsICdhLnNvbmdfX29wdGlvbicsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZhciBkYXRhSHJlZiA9ICQodGhpcykuYXR0cignZGF0YS1ocmVmJyk7XG5cdFx0b25saW5lTXVzaWNBcHAub25saW5lTXVzaWNJbmZvcm1hdGlvbihkYXRhSHJlZik7XG5cdH0pO1xuXHQvL9Ck0YPQvdC60YbQuNC4XG5cdC8v0JfQsNC/0YPRgdC6INC90LDRgdGC0YDQvtGP0Lpcblx0ZnVuY3Rpb24gcmVsb2FkU2V0dGluZ3MoKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ211c2ljLXNldHRpbmdzJywgSlNPTi5zdHJpbmdpZnkob25saW5lTXVzaWNTZXR0aW5ncykpO1xuXHR9XG5cdHJlbG9hZFNldHRpbmdzKCk7XG5cdC8vU2Nyb2xsVG9wRG93blxuXHRmdW5jdGlvbiBzY3JvbGxUb3BEb3duKGVsKSB7XG5cdFx0JChlbCkuYW5pbWF0ZSh7XG5cdFx0XHQnc2Nyb2xsVG9wJzogMFxuXHRcdH0sIG9ubGluZU11c2ljU2V0dGluZ3MuYW5pbWF0ZVRpbWVyKTtcblx0fVxufSkoKTsiXX0=

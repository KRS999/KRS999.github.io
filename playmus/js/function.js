$(document).ready(function(){$("audio").audioPlayer();var a=$(".search-music"),s=$(".music-list"),t=($(".play-music"),$(".audio")),e=$(".artist-c"),i=$(".name-c"),n=$(".down"),r=$(".genre");function l(){var a=$(".music-url");$(".music-item");$.ajax({url:a.val(),method:"GET",success:function(i){setTimeout(function(){for(var a="",t=$(i).find(".ListTrack__item"),e=0;e<t.length;e++)a+='<li><a href="'+t[e].dataset.linkMp3+'"class="play-music global-box va"><div class="left-titles"><span class="artist">'+t[e].dataset.artist+'</span><span class="name">'+t[e].dataset.name+'</span></div><div class="right-titles"><span class="bitrate">'+t[e].dataset.bitrate+'</span><span class="duration">0'+t[e].dataset.duration+'</span></div></a><a href="'+t[e].dataset.linkMp3+'" class="download-music global-box va"></a></li>',s.html(a)},0)}})}l();for(var c=0;c<s.length;c++)$(s[c]).on("click",".play-music",function(a){a.preventDefault(),$(".play-music").hasClass("play-music")!=$(".play-music").hasClass("active")?$(this).toggleClass("active"):$(".play-music").hasClass("active")&&($(".play-music").removeClass("active"),$(this).toggleClass("active")),s.animate({"padding-bottom":"100px"}),$(".audio-wrap").addClass("audio-wrap_active"),$(t[0]).attr("src",a.currentTarget.href),e.text(a.currentTarget.children[0].childNodes[0].innerHTML),i.text(a.currentTarget.children[0].childNodes[1].innerHTML),t[0].play(),$(".audioplayer").addClass("audioplayer-playing")});r.on("click","a",function(a){a.preventDefault(),console.log(a.currentTarget.href),$(".music-url").attr("value",a.currentTarget.href),l()}),n.on("click",function(a){a.preventDefault(),s.animate({"padding-bottom":"0px"}),$(".audio-wrap").removeClass("audio-wrap_active")}),a.on("click",function(a){a.preventDefault(),l()}),/Firefox/.test(window.navigator.userAgent)&&s.on("click",".download-music",function(a){var t;a.preventDefault(),(t=new XMLHttpRequest).open("GET","firefox",!0),t.onreadystatechange=function(){4==t.readyState&&window.open(a.target.href)},t.send(null)}),/SymbOS/.test(window.navigator.userAgent)&&$(".audio-wrap").hide()});
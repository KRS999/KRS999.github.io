//plugin e-search.js by Eduardo Torres, for more documentation visit: https://github.com/edukni/Search-input-jquery-plugin
(function($){
    $.fn.extend({
        search: function(callback,timeout){
            timeout = timeout || 1e3; // 1 second default timeout
            var timeoutReference,
            search = function(el){
                if (!timeoutReference) return;
                timeoutReference = null;
                callback.call(el);
            };
            return this.each(function(i,el){
                var $el = $(el);
                $el.is(':input') && $el.on('keyup keypress paste',function(e){
                    if (e.type=='keyup' && e.keyCode!=8) return;
                    if (timeoutReference) clearTimeout(timeoutReference);
                    timeoutReference = setTimeout(function(){
                        //Делаем первую букву большим
                         var inputValue = el.value.charAt(0).toUpperCase() + el.value.slice(1);
                         //console.log(inputValue);
                        //var nameTrim = inputValue.replace(/\s+/g, '');
                        //var nameTrim2 = nameTrim.replace(/[^\w\s]/gi, '');
                        var nameTrim = inputValue;
                        var nameTrim2 = nameTrim;
                        //console.log(nameTrim2);
			     		if(nameTrim2){
                            $(".weather__country ul").children().fadeOut();
                            $(".weather__country ul [data-country*="+nameTrim2+"], .weather__country ul [data-city*="+nameTrim2+"]").fadeIn('fast');
                            $(".weather__country ul li").removeClass('active');
                            $(".weather__country ul [data-country*="+nameTrim2+"], .weather__country ul [data-city*="+nameTrim2+"]").addClass('active');
			     		}else{
                            $(".weather__country ul").children().fadeIn();
                        }
                        //Проверяем
                        if(nameTrim2.length > 0) {
                            if($(".weather__country ul li.active").length == 0) {
                                //Нечего не найдено
                                let empty = document.createElement('p');
                                $(empty).addClass('weather__country-empty center');
                                $(empty).text('Нечего не найдено.');
                                $(".weather__country ul").append(empty);
                            }else{
                                $('.weather__country-empty').remove();
                            }
                        }else{
                            $('.weather__country-empty').remove();
                        }
                        search(el);
                        //console.log(el);
                    }, timeout);
                })
            });
        }
    });
})(jQuery);





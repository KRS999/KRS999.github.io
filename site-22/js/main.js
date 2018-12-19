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

window.onload = function () {
  var header = document.querySelector('.header');
  var headerTop = document.querySelector('.header__top');
  var downScroll = document.querySelector('#down-scroll');
  var featuresBox = document.querySelector('.features');
  var testimonialsBox = document.querySelector('.testimonials');
  var footerBox = document.querySelector('.footer');
  var contactBox = document.querySelector('.contact');
  var scrollTopBtn = document.querySelector('.scroll__top');
  var headerMenu = document.querySelector('.header__menu');
  var headerMenuLinks = document.querySelectorAll('.header__menu a');
  var menuBtn = document.querySelector('#menu-btn');
  var menuClose = document.querySelector('.menu__close');
  var showAnimate = true;
  var windowTop = void 0;
  //Функция для расчета расстояния до блока
  var boxOffset = function boxOffset(box) {
    return box.getBoundingClientRect().top + windowTop - document.documentElement.clientTop;
  };
  //Функция для изменения классов Header
  var headerTopFixed = function headerTopFixed() {
    windowTop = window.pageYOffset;
    //Добавляем/убираем класс с Header
    if (windowTop >= 50) {
      headerTop.classList.add('header__top-on');
      if (windowTop - 100 >= boxOffset(contactBox)) {
        scrollTopBtn.classList.add('scroll__top-on');
      } else {
        scrollTopBtn.classList.remove('scroll__top-on');
      }
      //Меняем цвета Header
      if (windowTop >= boxOffset(featuresBox)) {
        headerTop.style.backgroundColor = '#ffffff';
        if (windowTop >= boxOffset(footerBox)) {
          headerTop.classList.add('header__top-dark');
        } else {
          headerTop.classList.remove('header__top-dark');
        }
      } else if (windowTop <= boxOffset(featuresBox)) {
        headerTop.style.backgroundColor = '#FFDC00';
      }
    } else {
      headerTop.classList.remove('header__top-on');
      headerTop.classList.remove('header__top-dark');
      headerTop.style.backgroundColor = 'transparent';
      scrollTopBtn.classList.remove('scroll__top-on');
    }
  };
  headerTopFixed();
  //Запускаем функцию при сколинге
  window.addEventListener('scroll', function () {
    headerTopFixed();
    animateCount();
  }, false);
  //Скролинг до блока Features
  downScroll.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: boxOffset(featuresBox),
      behavior: 'smooth'
    });
  }, false);
  //Анимация чисел
  var animateCount = function animateCount() {
    if (!showAnimate) return false;

    var elementTop = boxOffset(testimonialsBox).toFixed();
    var windowHeight = window.innerHeight; //Размер окна
    var documentHeight = document.documentElement.scrollHeight; //Размер документа
    var elementHeight = testimonialsBox.scrollHeight; //Размер элемента

    if (windowTop + 640 >= elementTop || windowHeight + windowTop == documentHeight || elementHeight + elementTop < windowHeight) {
      $('.count').spincrement({
        from: 0,
        duration: 2000
      }); //Запуск плагина

      showAnimate = false; //Меняем флажок
    }
  };
  if (windowTop + 640 >= boxOffset(testimonialsBox).toFixed()) {
    animateCount();
  }
  //Кнопка вверх
  scrollTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, false);
  //Меню
  var menuCheck = true; //Анти клик User
  //Запуск меню
  menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    //Если menuCheck true то запускаем меню
    if (menuCheck === true) {
      menuOnOff('on');
    }
    //Ставим флажок чтобы не было срабатываний после повторных кликов
    //menuCheck = false;
  });
  //Скрыть меню
  menuClose.addEventListener('click', function (e) {
    if (menuCheck === false) {
      menuOnOff('off');
    }
    menuCheck = true;
  }, false);
  //Функция для показа или скрытия меню
  var menuOnOff = function menuOnOff(arg) {
    //Если в аргумент передан On то добавляем класс на Меню
    if (arg === 'on') {
      headerMenu.classList.add('header__menu-on');
    }
    //Анимируем ссылки

    var _loop = function _loop(i) {
      //Запускаем таймер чтобы появлялись по очереди
      setTimeout(function () {
        //Добавляем класс на ссылки
        headerMenuLinks[i].classList.toggle('link__anim');
        //Когда i будет равен длине ссылок добаляем чек для скрытия меню
        if (i + 1 === headerMenuLinks.length) {
          menuCheck = false;
        }
        //Если аргумент равен off скрываем меню когда длина ммассива равен длине ссылок
        if (arg === 'off') {
          if (i + 1 === headerMenuLinks.length) {
            headerMenu.classList.remove('header__menu-on');
            menuCheck = true;
          }
        }
      }, 200 * i);
    };

    for (var i = 0; i < headerMenuLinks.length; i++) {
      _loop(i);
    }
  };
  //Вешаем событие на ссылки для скрытия Меню
  headerMenu.addEventListener('click', function (e) {
    e.preventDefault();
    var menuLinks = e.target.closest('a');
    if (menuLinks) {
      if (menuCheck === false) {
        menuOnOff('off');
      }
      menuCheck = true;
    }
  }, false);
  //Скролл до блоков
  $(".header__menu a").mPageScroll2id({
    offset: 0 //расстояние
  });
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvanMvYnVpbGQvbWFpbi5qcyIsImRldi9qcy9idWlsZC9teVNjcmlwdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFJLGFBQWEsUUFBUSxhQUFSLENBQWpCOztBQUVBLElBQUksWUFBWSx3QkFBd0IsVUFBeEIsQ0FBaEI7O0FBRUEsU0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLE1BQUksT0FBTyxJQUFJLFVBQWYsRUFBMkI7QUFBRSxXQUFPLEdBQVA7QUFBYSxHQUExQyxNQUFnRDtBQUFFLFFBQUksU0FBUyxFQUFiLENBQWlCLElBQUksT0FBTyxJQUFYLEVBQWlCO0FBQUUsV0FBSyxJQUFJLEdBQVQsSUFBZ0IsR0FBaEIsRUFBcUI7QUFBRSxZQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkO0FBQXlCO0FBQUUsS0FBQyxPQUFPLE9BQVAsR0FBaUIsR0FBakIsQ0FBc0IsT0FBTyxNQUFQO0FBQWdCO0FBQUU7OztBQ043UTs7QUFFQSxPQUFPLE1BQVAsR0FBZ0IsWUFBWTtBQUMxQixNQUFJLFNBQVMsU0FBUyxhQUFULENBQXVCLFNBQXZCLENBQWI7QUFDQSxNQUFJLFlBQVksU0FBUyxhQUFULENBQXVCLGNBQXZCLENBQWhCO0FBQ0EsTUFBSSxhQUFhLFNBQVMsYUFBVCxDQUF1QixjQUF2QixDQUFqQjtBQUNBLE1BQUksY0FBYyxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBbEI7QUFDQSxNQUFJLGtCQUFrQixTQUFTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBdEI7QUFDQSxNQUFJLFlBQVksU0FBUyxhQUFULENBQXVCLFNBQXZCLENBQWhCO0FBQ0EsTUFBSSxhQUFhLFNBQVMsYUFBVCxDQUF1QixV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QUE2QixNQUE3QixDQUFvQyxZQUFwQztBQUNBO0FBQ0EsWUFBSSxJQUFJLENBQUosS0FBVSxnQkFBZ0IsTUFBOUIsRUFBc0M7QUFDcEMsc0JBQVksS0FBWjtBQUNEO0FBQ0Q7QUFDQSxZQUFJLFFBQVEsS0FBWixFQUFtQjtBQUNqQixjQUFJLElBQUksQ0FBSixLQUFVLGdCQUFnQixNQUE5QixFQUFzQztBQUNwQyx1QkFBVyxTQUFYLENBQXFCLE1BQXJCLENBQTRCLGlCQUE1QjtBQUNBLHdCQUFZLElBQVo7QUFDRDtBQUNGO0FBQ0YsT0FkRCxFQWNHLE1BQU0sQ0FkVDtBQWVELEtBakJEOztBQW1CQSxTQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksZ0JBQWdCLE1BQXBDLEVBQTRDLEdBQTVDLEVBQWlEO0FBQy9DLFlBQU0sQ0FBTjtBQUNEO0FBQ0YsR0E3QkQ7QUE4QkE7QUFDQSxhQUFXLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFVBQVUsQ0FBVixFQUFhO0FBQ2hELE1BQUUsY0FBRjtBQUNBLFFBQUksWUFBWSxFQUFFLE1BQUYsQ0FBUyxPQUFULENBQWlCLEdBQWpCLENBQWhCO0FBQ0EsUUFBSSxTQUFKLEVBQWU7QUFDYixVQUFJLGNBQWMsS0FBbEIsRUFBeUI7QUFDdkIsa0JBQVUsS0FBVjtBQUNEO0FBQ0Qsa0JBQVksSUFBWjtBQUNEO0FBQ0YsR0FURCxFQVNHLEtBVEg7QUFVQTtBQUNBLElBQUUsaUJBQUYsRUFBcUIsY0FBckIsQ0FBb0M7QUFDbEMsWUFBUSxDQUQwQixDQUN4QjtBQUR3QixHQUFwQztBQUdELENBNUpEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX215U2NyaXB0cyA9IHJlcXVpcmUoJy4vbXlTY3JpcHRzJyk7XG5cbnZhciBteVNjcmlwdHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbXlTY3JpcHRzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH0iLCIndXNlIHN0cmljdCc7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gIHZhciBoZWFkZXJUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX190b3AnKTtcbiAgdmFyIGRvd25TY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG93bi1zY3JvbGwnKTtcbiAgdmFyIGZlYXR1cmVzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlYXR1cmVzJyk7XG4gIHZhciB0ZXN0aW1vbmlhbHNCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdGltb25pYWxzJyk7XG4gIHZhciBmb290ZXJCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XG4gIHZhciBjb250YWN0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKTtcbiAgdmFyIHNjcm9sbFRvcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxfX3RvcCcpO1xuICB2YXIgaGVhZGVyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUnKTtcbiAgdmFyIGhlYWRlck1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX21lbnUgYScpO1xuICB2YXIgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWJ0bicpO1xuICB2YXIgbWVudUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2Nsb3NlJyk7XG4gIHZhciBzaG93QW5pbWF0ZSA9IHRydWU7XG4gIHZhciB3aW5kb3dUb3AgPSB2b2lkIDA7XG4gIC8v0KTRg9C90LrRhtC40Y8g0LTQu9GPINGA0LDRgdGH0LXRgtCwINGA0LDRgdGB0YLQvtGP0L3QuNGPINC00L4g0LHQu9C+0LrQsFxuICB2YXIgYm94T2Zmc2V0ID0gZnVuY3Rpb24gYm94T2Zmc2V0KGJveCkge1xuICAgIHJldHVybiBib3guZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93VG9wIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcDtcbiAgfTtcbiAgLy/QpNGD0L3QutGG0LjRjyDQtNC70Y8g0LjQt9C80LXQvdC10L3QuNGPINC60LvQsNGB0YHQvtCyIEhlYWRlclxuICB2YXIgaGVhZGVyVG9wRml4ZWQgPSBmdW5jdGlvbiBoZWFkZXJUb3BGaXhlZCgpIHtcbiAgICB3aW5kb3dUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgLy/QlNC+0LHQsNCy0LvRj9C10Lwv0YPQsdC40YDQsNC10Lwg0LrQu9Cw0YHRgSDRgSBIZWFkZXJcbiAgICBpZiAod2luZG93VG9wID49IDUwKSB7XG4gICAgICBoZWFkZXJUb3AuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX190b3Atb24nKTtcbiAgICAgIGlmICh3aW5kb3dUb3AgLSAxMDAgPj0gYm94T2Zmc2V0KGNvbnRhY3RCb3gpKSB7XG4gICAgICAgIHNjcm9sbFRvcEJ0bi5jbGFzc0xpc3QuYWRkKCdzY3JvbGxfX3RvcC1vbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsVG9wQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbF9fdG9wLW9uJyk7XG4gICAgICB9XG4gICAgICAvL9Cc0LXQvdGP0LXQvCDRhtCy0LXRgtCwIEhlYWRlclxuICAgICAgaWYgKHdpbmRvd1RvcCA+PSBib3hPZmZzZXQoZmVhdHVyZXNCb3gpKSB7XG4gICAgICAgIGhlYWRlclRvcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmZmZic7XG4gICAgICAgIGlmICh3aW5kb3dUb3AgPj0gYm94T2Zmc2V0KGZvb3RlckJveCkpIHtcbiAgICAgICAgICBoZWFkZXJUb3AuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX190b3AtZGFyaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhlYWRlclRvcC5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX3RvcC1kYXJrJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAod2luZG93VG9wIDw9IGJveE9mZnNldChmZWF0dXJlc0JveCkpIHtcbiAgICAgICAgaGVhZGVyVG9wLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRkZEQzAwJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyVG9wLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fdG9wLW9uJyk7XG4gICAgICBoZWFkZXJUb3AuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX190b3AtZGFyaycpO1xuICAgICAgaGVhZGVyVG9wLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICBzY3JvbGxUb3BCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsX190b3Atb24nKTtcbiAgICB9XG4gIH07XG4gIGhlYWRlclRvcEZpeGVkKCk7XG4gIC8v0JfQsNC/0YPRgdC60LDQtdC8INGE0YPQvdC60YbQuNGOINC/0YDQuCDRgdC60L7Qu9C40L3Qs9C1XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgaGVhZGVyVG9wRml4ZWQoKTtcbiAgICBhbmltYXRlQ291bnQoKTtcbiAgfSwgZmFsc2UpO1xuICAvL9Ch0LrRgNC+0LvQuNC90LMg0LTQviDQsdC70L7QutCwIEZlYXR1cmVzXG4gIGRvd25TY3JvbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiBib3hPZmZzZXQoZmVhdHVyZXNCb3gpLFxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgfSk7XG4gIH0sIGZhbHNlKTtcbiAgLy/QkNC90LjQvNCw0YbQuNGPINGH0LjRgdC10LtcbiAgdmFyIGFuaW1hdGVDb3VudCA9IGZ1bmN0aW9uIGFuaW1hdGVDb3VudCgpIHtcbiAgICBpZiAoIXNob3dBbmltYXRlKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgZWxlbWVudFRvcCA9IGJveE9mZnNldCh0ZXN0aW1vbmlhbHNCb3gpLnRvRml4ZWQoKTtcbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0OyAvL9Cg0LDQt9C80LXRgCDQvtC60L3QsFxuICAgIHZhciBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7IC8v0KDQsNC30LzQtdGAINC00L7QutGD0LzQtdC90YLQsFxuICAgIHZhciBlbGVtZW50SGVpZ2h0ID0gdGVzdGltb25pYWxzQm94LnNjcm9sbEhlaWdodDsgLy/QoNCw0LfQvNC10YAg0Y3Qu9C10LzQtdC90YLQsFxuXG4gICAgaWYgKHdpbmRvd1RvcCArIDY0MCA+PSBlbGVtZW50VG9wIHx8IHdpbmRvd0hlaWdodCArIHdpbmRvd1RvcCA9PSBkb2N1bWVudEhlaWdodCB8fCBlbGVtZW50SGVpZ2h0ICsgZWxlbWVudFRvcCA8IHdpbmRvd0hlaWdodCkge1xuICAgICAgJCgnLmNvdW50Jykuc3BpbmNyZW1lbnQoe1xuICAgICAgICBmcm9tOiAwLFxuICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgfSk7IC8v0JfQsNC/0YPRgdC6INC/0LvQsNCz0LjQvdCwXG5cbiAgICAgIHNob3dBbmltYXRlID0gZmFsc2U7IC8v0JzQtdC90Y/QtdC8INGE0LvQsNC20L7QulxuICAgIH1cbiAgfTtcbiAgaWYgKHdpbmRvd1RvcCArIDY0MCA+PSBib3hPZmZzZXQodGVzdGltb25pYWxzQm94KS50b0ZpeGVkKCkpIHtcbiAgICBhbmltYXRlQ291bnQoKTtcbiAgfVxuICAvL9Ca0L3QvtC/0LrQsCDQstCy0LXRgNGFXG4gIHNjcm9sbFRvcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICB0b3A6IDAsXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgIH0pO1xuICB9LCBmYWxzZSk7XG4gIC8v0JzQtdC90Y5cbiAgdmFyIG1lbnVDaGVjayA9IHRydWU7IC8v0JDQvdGC0Lgg0LrQu9C40LogVXNlclxuICAvL9CX0LDQv9GD0YHQuiDQvNC10L3RjlxuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy/QldGB0LvQuCBtZW51Q2hlY2sgdHJ1ZSDRgtC+INC30LDQv9GD0YHQutCw0LXQvCDQvNC10L3RjlxuICAgIGlmIChtZW51Q2hlY2sgPT09IHRydWUpIHtcbiAgICAgIG1lbnVPbk9mZignb24nKTtcbiAgICB9XG4gICAgLy/QodGC0LDQstC40Lwg0YTQu9Cw0LbQvtC6INGH0YLQvtCx0Ysg0L3QtSDQsdGL0LvQviDRgdGA0LDQsdCw0YLRi9Cy0LDQvdC40Lkg0L/QvtGB0LvQtSDQv9C+0LLRgtC+0YDQvdGL0YUg0LrQu9C40LrQvtCyXG4gICAgLy9tZW51Q2hlY2sgPSBmYWxzZTtcbiAgfSk7XG4gIC8v0KHQutGA0YvRgtGMINC80LXQvdGOXG4gIG1lbnVDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKG1lbnVDaGVjayA9PT0gZmFsc2UpIHtcbiAgICAgIG1lbnVPbk9mZignb2ZmJyk7XG4gICAgfVxuICAgIG1lbnVDaGVjayA9IHRydWU7XG4gIH0sIGZhbHNlKTtcbiAgLy/QpNGD0L3QutGG0LjRjyDQtNC70Y8g0L/QvtC60LDQt9CwINC40LvQuCDRgdC60YDRi9GC0LjRjyDQvNC10L3RjlxuICB2YXIgbWVudU9uT2ZmID0gZnVuY3Rpb24gbWVudU9uT2ZmKGFyZykge1xuICAgIC8v0JXRgdC70Lgg0LIg0LDRgNCz0YPQvNC10L3RgiDQv9C10YDQtdC00LDQvSBPbiDRgtC+INC00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBINC90LAg0JzQtdC90Y5cbiAgICBpZiAoYXJnID09PSAnb24nKSB7XG4gICAgICBoZWFkZXJNZW51LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbWVudS1vbicpO1xuICAgIH1cbiAgICAvL9CQ0L3QuNC80LjRgNGD0LXQvCDRgdGB0YvQu9C60LhcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGkpIHtcbiAgICAgIC8v0JfQsNC/0YPRgdC60LDQtdC8INGC0LDQudC80LXRgCDRh9GC0L7QsdGLINC/0L7Rj9Cy0LvRj9C70LjRgdGMINC/0L4g0L7Rh9C10YDQtdC00LhcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvL9CU0L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBINC90LAg0YHRgdGL0LvQutC4XG4gICAgICAgIGhlYWRlck1lbnVMaW5rc1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdsaW5rX19hbmltJyk7XG4gICAgICAgIC8v0JrQvtCz0LTQsCBpINCx0YPQtNC10YIg0YDQsNCy0LXQvSDQtNC70LjQvdC1INGB0YHRi9C70L7QuiDQtNC+0LHQsNC70Y/QtdC8INGH0LXQuiDQtNC70Y8g0YHQutGA0YvRgtC40Y8g0LzQtdC90Y5cbiAgICAgICAgaWYgKGkgKyAxID09PSBoZWFkZXJNZW51TGlua3MubGVuZ3RoKSB7XG4gICAgICAgICAgbWVudUNoZWNrID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy/QldGB0LvQuCDQsNGA0LPRg9C80LXQvdGCINGA0LDQstC10L0gb2ZmINGB0LrRgNGL0LLQsNC10Lwg0LzQtdC90Y4g0LrQvtCz0LTQsCDQtNC70LjQvdCwINC80LzQsNGB0YHQuNCy0LAg0YDQsNCy0LXQvSDQtNC70LjQvdC1INGB0YHRi9C70L7QulxuICAgICAgICBpZiAoYXJnID09PSAnb2ZmJykge1xuICAgICAgICAgIGlmIChpICsgMSA9PT0gaGVhZGVyTWVudUxpbmtzLmxlbmd0aCkge1xuICAgICAgICAgICAgaGVhZGVyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX21lbnUtb24nKTtcbiAgICAgICAgICAgIG1lbnVDaGVjayA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAyMDAgKiBpKTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZWFkZXJNZW51TGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIF9sb29wKGkpO1xuICAgIH1cbiAgfTtcbiAgLy/QktC10YjQsNC10Lwg0YHQvtCx0YvRgtC40LUg0L3QsCDRgdGB0YvQu9C60Lgg0LTQu9GPINGB0LrRgNGL0YLQuNGPINCc0LXQvdGOXG4gIGhlYWRlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgbWVudUxpbmtzID0gZS50YXJnZXQuY2xvc2VzdCgnYScpO1xuICAgIGlmIChtZW51TGlua3MpIHtcbiAgICAgIGlmIChtZW51Q2hlY2sgPT09IGZhbHNlKSB7XG4gICAgICAgIG1lbnVPbk9mZignb2ZmJyk7XG4gICAgICB9XG4gICAgICBtZW51Q2hlY2sgPSB0cnVlO1xuICAgIH1cbiAgfSwgZmFsc2UpO1xuICAvL9Ch0LrRgNC+0LvQuyDQtNC+INCx0LvQvtC60L7QslxuICAkKFwiLmhlYWRlcl9fbWVudSBhXCIpLm1QYWdlU2Nyb2xsMmlkKHtcbiAgICBvZmZzZXQ6IDAgLy/RgNCw0YHRgdGC0L7Rj9C90LjQtVxuICB9KTtcbn07Il19

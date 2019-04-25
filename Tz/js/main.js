(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _scripts = require('./scripts');

var scripts = _interopRequireWildcard(_scripts);

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

},{"./scripts":2}],2:[function(require,module,exports){
'use strict';

(function () {
    //Styler
    $('.my-selected, #ch').styler();
    //Carousel
    $('.owl-carousel').owlCarousel({
        nav: true,
        items: 1,
        dots: true,
        onInitialized: fullCountInit,
        onTranslate: refreshCount
    });
    function fullCountInit(e) {
        var items = e.item.count;
        var item = e.item.index + 1;
        if (items < 10) {
            items = '0' + items;
        };
        if (item < 10) {
            item = '0' + item;
        };
        var owlNav = e.target.querySelector('.owl-nav');
        var owlNavLastEl = owlNav.lastChild;
        var createP = document.createElement('p');
        createP.classList.add('owl-count');
        createP.textContent = item;
        var createSpan = document.createElement('span');
        createP.appendChild(createSpan);
        createSpan.textContent = '/' + items;
        owlNav.insertBefore(createP, owlNavLastEl);
    }
    function refreshCount(e) {
        var item = e.item.index + 1;
        if (item < 10) {
            item = '0' + item;
        }
        e.target.querySelector('.owl-count').lastChild.previousSibling.textContent = item;
    }
    //Forms
    var footerWrap = $('.footer__wrap');
    var footerForm = $('.footer__form');
    var footerSubmit = $('[data-btn]');
    var lineCount = $('.line__count');
    var linesTop = $('.lines__top');
    var count = 1;
    var linesWidth = 25;

    footerSubmit.on('click', function (e) {
        e.preventDefault();
        var dataBtn = $(this).data('btn');
        switch (dataBtn) {
            case 'proceed':
                $(footerWrap).hide();
                break;
            case 'close__proceed':
                location.reload();
                break;
        }
        $(lineCount).html(count += 1);
        $(linesTop).animate({
            'width': (linesWidth += 25) + '%'
        });
        $(footerForm).hide();
        $('.' + dataBtn).fadeIn();
    });
})();

},{}]},{},[1]);

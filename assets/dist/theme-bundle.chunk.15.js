(window["webpackJsonpWebpackChiara"] = window["webpackJsonpWebpackChiara"] || []).push([[15],{

/***/ "./assets/js/chiara/youtube-carousel.js":
/*!**********************************************!*\
  !*** ./assets/js/chiara/youtube-carousel.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return youtubeCarouselFactory; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_common_media_query_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/common/media-query-list */ "./assets/js/theme/common/media-query-list.js");


var mediumMediaQuery;
var uid = 1;

var YoutubeSlick = /*#__PURE__*/function () {
  function YoutubeSlick(slick) {
    this.$slick = $(slick);
    this.$videos = this.$slick.find('[data-youtube]');
    this.onSlickInit = this.onSlickInit.bind(this);
    this.onSlickBeforeChange = this.onSlickBeforeChange.bind(this);
    this.onSlickAfterChange = this.onSlickAfterChange.bind(this);
    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    this.bindEvents();
  }

  var _proto = YoutubeSlick.prototype;

  _proto.bindEvents = function bindEvents() {
    if (this.$slick.hasClass('slick-initialized')) {
      this.onSlickInit();
    }

    this.$slick.on('init', this.onSlickInit);
    this.$slick.on('beforeChange', this.onSlickBeforeChange);
    this.$slick.on('afterChange', this.onSlickAfterChange);
  };

  _proto.onPlayerReady = function onPlayerReady(event) {
    var _this = this;

    // store player object for use later
    $(event.target.getIframe()).closest('.slick-slide').data('youtube-player', event.target); // On desktop: Play video if first slide is video

    if (mediumMediaQuery.matches) {
      setTimeout(function () {
        if ($(event.target.getIframe()).closest('.slick-slide').hasClass('slick-active')) {
          _this.$slick.slick('slickPause');

          if (typeof _this.$slick.data('youtubeMute') !== 'undefined') {
            event.target.mute();
          }

          event.target.playVideo();
        }
      }, 200);
    }
  };

  _proto.onPlayerStateChange = function onPlayerStateChange(event) {
    // Stop slick autoplay when video start playing
    if (event.data === YT.PlayerState.PLAYING) {
      // eslint-disable-line
      this.$slick.addClass('slick-video-playing');
      this.$slick.slick('slickPause');
    }

    if (event.data === YT.PlayerState.PAUSED) {
      // eslint-disable-line
      this.$slick.removeClass('slick-video-playing');
    } // go to next slide and enable autoplay back when video ended


    if (event.data === YT.PlayerState.ENDED) {
      // eslint-disable-line
      this.$slick.removeClass('slick-video-playing');
      this.$slick.slick('slickPlay');
      this.$slick.slick('slickNext');
    }
  };

  _proto.onSlickInit = function onSlickInit() {
    var _this2 = this;

    this.$videos.each(function (j, vid) {
      var $vid = $(vid);
      var id = "youtube_player_" + uid++;
      $vid.attr('id', id); // init player

      var player = new YT.Player(id, {
        // eslint-disable-line
        // host: 'http://www.youtube.com',
        videoId: $vid.data('youtube'),
        wmode: 'transparent',
        playerVars: {
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 0,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          wmode: 'transparent'
        },
        events: {
          onReady: _this2.onPlayerReady,
          onStateChange: _this2.onPlayerStateChange
        }
      });
    });
  };

  _proto.onSlickBeforeChange = function onSlickBeforeChange() {
    var player = this.$slick.find('.slick-slide.slick-active').data('youtube-player');

    if (player) {
      player.stopVideo();
    }
  };

  _proto.onSlickAfterChange = function onSlickAfterChange() {
    // Enable auto slide
    this.$slick.slick('slickPlay'); // On desktop:
    // - Auto play video when open next slide
    // - Stop auto slide

    if (mediumMediaQuery.matches) {
      var player = this.$slick.find('.slick-slide.slick-active').data('youtube-player');

      if (player) {
        this.$slick.slick('slickPause');

        if (typeof this.$slick.data('youtubeMute') !== 'undefined') {
          player.mute();
        }

        player.playVideo();
      }
    }
  };

  return YoutubeSlick;
}();

function initCarousel($carousel) {
  $carousel.each(function (i, slick) {
    var $slick = $(slick);

    if ($slick.find('[data-youtube]').length > 0) {
      $slick.addClass('slick-slider--video');
      new YoutubeSlick(slick); // eslint-disable-line
    }
  });
}

function youtubeCarouselFactory($carousel) {
  if ($carousel.find('[data-youtube]').length > 0) {
    mediumMediaQuery = Object(_theme_common_media_query_list__WEBPACK_IMPORTED_MODULE_1__["default"])('medium');

    if (typeof window.onYouTubeIframeAPIReady === 'undefined') {
      window.onYouTubeIframeAPIReady = initCarousel.bind(window, $carousel); // Load the IFrame Player API code asynchronously.

      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/player_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // $('body').append('<script src="https://www.youtube.com/iframe_api"></script>');
    } else {
      initCarousel($carousel);
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _chiara_youtube_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chiara/youtube-carousel */ "./assets/js/chiara/youtube-carousel.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var Home = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Home, _PageManager);

  function Home() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Home.prototype;

  _proto.onReady = function onReady() {
    if (this.context.hasCarouselVideo) {
      Object(_chiara_youtube_carousel__WEBPACK_IMPORTED_MODULE_1__["default"])($('[data-slick]'));
    }
  };

  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vYXNzZXRzL2pzL2NoaWFyYS95b3V0dWJlLWNhcm91c2VsLmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9hc3NldHMvanMvdGhlbWUvaG9tZS5qcyJdLCJuYW1lcyI6WyJtZWRpdW1NZWRpYVF1ZXJ5IiwidWlkIiwiWW91dHViZVNsaWNrIiwic2xpY2siLCIkc2xpY2siLCIkIiwiJHZpZGVvcyIsImZpbmQiLCJvblNsaWNrSW5pdCIsImJpbmQiLCJvblNsaWNrQmVmb3JlQ2hhbmdlIiwib25TbGlja0FmdGVyQ2hhbmdlIiwib25QbGF5ZXJSZWFkeSIsIm9uUGxheWVyU3RhdGVDaGFuZ2UiLCJiaW5kRXZlbnRzIiwiaGFzQ2xhc3MiLCJvbiIsImV2ZW50IiwidGFyZ2V0IiwiZ2V0SWZyYW1lIiwiY2xvc2VzdCIsImRhdGEiLCJtYXRjaGVzIiwic2V0VGltZW91dCIsIm11dGUiLCJwbGF5VmlkZW8iLCJZVCIsIlBsYXllclN0YXRlIiwiUExBWUlORyIsImFkZENsYXNzIiwiUEFVU0VEIiwicmVtb3ZlQ2xhc3MiLCJFTkRFRCIsImVhY2giLCJqIiwidmlkIiwiJHZpZCIsImlkIiwiYXR0ciIsInBsYXllciIsIlBsYXllciIsInZpZGVvSWQiLCJ3bW9kZSIsInBsYXllclZhcnMiLCJjb250cm9scyIsImRpc2FibGVrYiIsImVuYWJsZWpzYXBpIiwiZnMiLCJyZWwiLCJzaG93aW5mbyIsIml2X2xvYWRfcG9saWN5IiwibW9kZXN0YnJhbmRpbmciLCJldmVudHMiLCJvblJlYWR5Iiwib25TdGF0ZUNoYW5nZSIsInN0b3BWaWRlbyIsImluaXRDYXJvdXNlbCIsIiRjYXJvdXNlbCIsImkiLCJsZW5ndGgiLCJ5b3V0dWJlQ2Fyb3VzZWxGYWN0b3J5IiwibWVkaWFRdWVyeUxpc3RGYWN0b3J5Iiwid2luZG93Iiwib25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkiLCJ0YWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJmaXJzdFNjcmlwdFRhZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIkhvbWUiLCJjb250ZXh0IiwiaGFzQ2Fyb3VzZWxWaWRlbyIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFJQSxnQkFBSjtBQUNBLElBQUlDLEdBQUcsR0FBRyxDQUFWOztJQUVNQyxZO0FBQ0Ysd0JBQVlDLEtBQVosRUFBbUI7QUFDZixTQUFLQyxNQUFMLEdBQWNDLENBQUMsQ0FBQ0YsS0FBRCxDQUFmO0FBQ0EsU0FBS0csT0FBTCxHQUFlLEtBQUtGLE1BQUwsQ0FBWUcsSUFBWixDQUFpQixnQkFBakIsQ0FBZjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLQyxtQkFBTCxHQUEyQixLQUFLQSxtQkFBTCxDQUF5QkQsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBM0I7QUFDQSxTQUFLRSxrQkFBTCxHQUEwQixLQUFLQSxrQkFBTCxDQUF3QkYsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBMUI7QUFDQSxTQUFLRyxhQUFMLEdBQXFCLEtBQUtBLGFBQUwsQ0FBbUJILElBQW5CLENBQXdCLElBQXhCLENBQXJCO0FBQ0EsU0FBS0ksbUJBQUwsR0FBMkIsS0FBS0EsbUJBQUwsQ0FBeUJKLElBQXpCLENBQThCLElBQTlCLENBQTNCO0FBQ0EsU0FBS0ssVUFBTDtBQUNIOzs7O1NBRURBLFUsR0FBQSxzQkFBYTtBQUNULFFBQUksS0FBS1YsTUFBTCxDQUFZVyxRQUFaLENBQXFCLG1CQUFyQixDQUFKLEVBQStDO0FBQzNDLFdBQUtQLFdBQUw7QUFDSDs7QUFFRCxTQUFLSixNQUFMLENBQVlZLEVBQVosQ0FBZSxNQUFmLEVBQXVCLEtBQUtSLFdBQTVCO0FBQ0EsU0FBS0osTUFBTCxDQUFZWSxFQUFaLENBQWUsY0FBZixFQUErQixLQUFLTixtQkFBcEM7QUFD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NkJzRSxxRCIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVkaWFRdWVyeUxpc3RGYWN0b3J5IGZyb20gJy4uL3RoZW1lL2NvbW1vbi9tZWRpYS1xdWVyeS1saXN0JztcblxubGV0IG1lZGl1bU1lZGlhUXVlcnk7XG5sZXQgdWlkID0gMTtcblxuY2xhc3MgWW91dHViZVNsaWNrIHtcbiAgICBjb25zdHJ1Y3RvcihzbGljaykge1xuICAgICAgICB0aGlzLiRzbGljayA9ICQoc2xpY2spO1xuICAgICAgICB0aGlzLiR2aWRlb3MgPSB0aGlzLiRzbGljay5maW5kKCdbZGF0YS15b3V0dWJlXScpO1xuICAgICAgICB0aGlzLm9uU2xpY2tJbml0ID0gdGhpcy5vblNsaWNrSW5pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU2xpY2tCZWZvcmVDaGFuZ2UgPSB0aGlzLm9uU2xpY2tCZWZvcmVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblNsaWNrQWZ0ZXJDaGFuZ2UgPSB0aGlzLm9uU2xpY2tBZnRlckNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkgPSB0aGlzLm9uUGxheWVyUmVhZHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblBsYXllclN0YXRlQ2hhbmdlID0gdGhpcy5vblBsYXllclN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIGlmICh0aGlzLiRzbGljay5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgdGhpcy5vblNsaWNrSW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kc2xpY2sub24oJ2luaXQnLCB0aGlzLm9uU2xpY2tJbml0KTtcbiAgICAgICAgdGhpcy4kc2xpY2sub24oJ2JlZm9yZUNoYW5nZScsIHRoaXMub25TbGlja0JlZm9yZUNoYW5nZSk7XG4gICAgICAgIHRoaXMuJHNsaWNrLm9uKCdhZnRlckNoYW5nZScsIHRoaXMub25TbGlja0FmdGVyQ2hhbmdlKTtcbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KGV2ZW50KSB7XG4gICAgICAgIC8vIHN0b3JlIHBsYXllciBvYmplY3QgZm9yIHVzZSBsYXRlclxuICAgICAgICAkKGV2ZW50LnRhcmdldC5nZXRJZnJhbWUoKSkuY2xvc2VzdCgnLnNsaWNrLXNsaWRlJykuZGF0YSgneW91dHViZS1wbGF5ZXInLCBldmVudC50YXJnZXQpO1xuXG4gICAgICAgIC8vIE9uIGRlc2t0b3A6IFBsYXkgdmlkZW8gaWYgZmlyc3Qgc2xpZGUgaXMgdmlkZW9cbiAgICAgICAgaWYgKG1lZGl1bU1lZGlhUXVlcnkubWF0Y2hlcykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0LmdldElmcmFtZSgpKS5jbG9zZXN0KCcuc2xpY2stc2xpZGUnKS5oYXNDbGFzcygnc2xpY2stYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2xpY2suc2xpY2soJ3NsaWNrUGF1c2UnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLiRzbGljay5kYXRhKCd5b3V0dWJlTXV0ZScpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0Lm11dGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQucGxheVZpZGVvKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyU3RhdGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgLy8gU3RvcCBzbGljayBhdXRvcGxheSB3aGVuIHZpZGVvIHN0YXJ0IHBsYXlpbmdcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEgPT09IFlULlBsYXllclN0YXRlLlBMQVlJTkcpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgdGhpcy4kc2xpY2suYWRkQ2xhc3MoJ3NsaWNrLXZpZGVvLXBsYXlpbmcnKTtcbiAgICAgICAgICAgIHRoaXMuJHNsaWNrLnNsaWNrKCdzbGlja1BhdXNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQuZGF0YSA9PT0gWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgIHRoaXMuJHNsaWNrLnJlbW92ZUNsYXNzKCdzbGljay12aWRlby1wbGF5aW5nJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnbyB0byBuZXh0IHNsaWRlIGFuZCBlbmFibGUgYXV0b3BsYXkgYmFjayB3aGVuIHZpZGVvIGVuZGVkXG4gICAgICAgIGlmIChldmVudC5kYXRhID09PSBZVC5QbGF5ZXJTdGF0ZS5FTkRFRCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICB0aGlzLiRzbGljay5yZW1vdmVDbGFzcygnc2xpY2stdmlkZW8tcGxheWluZycpO1xuICAgICAgICAgICAgdGhpcy4kc2xpY2suc2xpY2soJ3NsaWNrUGxheScpO1xuICAgICAgICAgICAgdGhpcy4kc2xpY2suc2xpY2soJ3NsaWNrTmV4dCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TbGlja0luaXQoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5lYWNoKChqLCB2aWQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICR2aWQgPSAkKHZpZCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGB5b3V0dWJlX3BsYXllcl8ke3VpZCsrfWA7XG5cbiAgICAgICAgICAgICR2aWQuYXR0cignaWQnLCBpZCk7XG5cbiAgICAgICAgICAgIC8vIGluaXQgcGxheWVyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKGlkLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICAvLyBob3N0OiAnaHR0cDovL3d3dy55b3V0dWJlLmNvbScsXG4gICAgICAgICAgICAgICAgdmlkZW9JZDogJHZpZC5kYXRhKCd5b3V0dWJlJyksXG4gICAgICAgICAgICAgICAgd21vZGU6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sczogMCxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWtiOiAxLFxuICAgICAgICAgICAgICAgICAgICBlbmFibGVqc2FwaTogMSxcbiAgICAgICAgICAgICAgICAgICAgZnM6IDAsXG4gICAgICAgICAgICAgICAgICAgIHJlbDogMCxcbiAgICAgICAgICAgICAgICAgICAgc2hvd2luZm86IDAsXG4gICAgICAgICAgICAgICAgICAgIGl2X2xvYWRfcG9saWN5OiAzLFxuICAgICAgICAgICAgICAgICAgICBtb2Rlc3RicmFuZGluZzogMSxcbiAgICAgICAgICAgICAgICAgICAgd21vZGU6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgb25SZWFkeTogdGhpcy5vblBsYXllclJlYWR5LFxuICAgICAgICAgICAgICAgICAgICBvblN0YXRlQ2hhbmdlOiB0aGlzLm9uUGxheWVyU3RhdGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblNsaWNrQmVmb3JlQ2hhbmdlKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLiRzbGljay5maW5kKCcuc2xpY2stc2xpZGUuc2xpY2stYWN0aXZlJykuZGF0YSgneW91dHViZS1wbGF5ZXInKTtcbiAgICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAgICAgcGxheWVyLnN0b3BWaWRlbygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TbGlja0FmdGVyQ2hhbmdlKCkge1xuICAgICAgICAvLyBFbmFibGUgYXV0byBzbGlkZVxuICAgICAgICB0aGlzLiRzbGljay5zbGljaygnc2xpY2tQbGF5Jyk7XG5cbiAgICAgICAgLy8gT24gZGVza3RvcDpcbiAgICAgICAgLy8gLSBBdXRvIHBsYXkgdmlkZW8gd2hlbiBvcGVuIG5leHQgc2xpZGVcbiAgICAgICAgLy8gLSBTdG9wIGF1dG8gc2xpZGVcbiAgICAgICAgaWYgKG1lZGl1bU1lZGlhUXVlcnkubWF0Y2hlcykge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcy4kc2xpY2suZmluZCgnLnNsaWNrLXNsaWRlLnNsaWNrLWFjdGl2ZScpLmRhdGEoJ3lvdXR1YmUtcGxheWVyJyk7XG4gICAgICAgICAgICBpZiAocGxheWVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2xpY2suc2xpY2soJ3NsaWNrUGF1c2UnKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuJHNsaWNrLmRhdGEoJ3lvdXR1YmVNdXRlJykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5tdXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBsYXllci5wbGF5VmlkZW8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5pdENhcm91c2VsKCRjYXJvdXNlbCkge1xuICAgICRjYXJvdXNlbC5lYWNoKChpLCBzbGljaykgPT4ge1xuICAgICAgICBjb25zdCAkc2xpY2sgPSAkKHNsaWNrKTtcbiAgICAgICAgaWYgKCRzbGljay5maW5kKCdbZGF0YS15b3V0dWJlXScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICRzbGljay5hZGRDbGFzcygnc2xpY2stc2xpZGVyLS12aWRlbycpO1xuICAgICAgICAgICAgbmV3IFlvdXR1YmVTbGljayhzbGljayk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB5b3V0dWJlQ2Fyb3VzZWxGYWN0b3J5KCRjYXJvdXNlbCkge1xuICAgIGlmICgkY2Fyb3VzZWwuZmluZCgnW2RhdGEteW91dHViZV0nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIG1lZGl1bU1lZGlhUXVlcnkgPSBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkoJ21lZGl1bScpO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gaW5pdENhcm91c2VsLmJpbmQod2luZG93LCAkY2Fyb3VzZWwpO1xuXG4gICAgICAgICAgICAvLyBMb2FkIHRoZSBJRnJhbWUgUGxheWVyIEFQSSBjb2RlIGFzeW5jaHJvbm91c2x5LlxuICAgICAgICAgICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICB0YWcuc3JjID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BsYXllcl9hcGknO1xuICAgICAgICAgICAgY29uc3QgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgICAgICAgICBmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcblxuICAgICAgICAgICAgLy8gJCgnYm9keScpLmFwcGVuZCgnPHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpXCI+PC9zY3JpcHQ+Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbml0Q2Fyb3VzZWwoJGNhcm91c2VsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgeW91dHViZUNhcm91c2VsRmFjdG9yeSBmcm9tICcuLi9jaGlhcmEveW91dHViZS1jYXJvdXNlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5oYXNDYXJvdXNlbFZpZGVvKSB7XG4gICAgICAgICAgICB5b3V0dWJlQ2Fyb3VzZWxGYWN0b3J5KCQoJ1tkYXRhLXNsaWNrXScpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
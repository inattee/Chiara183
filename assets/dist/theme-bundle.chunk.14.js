(window["webpackJsonpWebpackChiara"] = window["webpackJsonpWebpackChiara"] || []).push([[14],{

/***/ "./assets/js/chiara/display-type.js":
/*!******************************************!*\
  !*** ./assets/js/chiara/display-type.js ***!
  \******************************************/
/*! exports provided: DisplayType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayType", function() { return DisplayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return displayTypeFactory; });
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);

var PLUGIN_KEY = {
  CAMEL: 'displayType',
  SNAKE: 'display-type'
};

function prependHash(id) {
  if (id && id.indexOf('#') === 0) {
    return id;
  }

  return "#" + id;
}

function optionsFromData($element) {
  return {
    inputName: $element.data(PLUGIN_KEY.CAMEL + "InputName"),
    prefixClassName: $element.data(PLUGIN_KEY.CAMEL + "PrefixClassName")
  };
}

var DisplayType = /*#__PURE__*/function () {
  function DisplayType($form, $target, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$inputName = _ref.inputName,
        inputName = _ref$inputName === void 0 ? 'display-type' : _ref$inputName,
        _ref$prefixClassName = _ref.prefixClassName,
        prefixClassName = _ref$prefixClassName === void 0 ? 'display-type-' : _ref$prefixClassName;

    this.inputName = inputName;
    this.prefixClassName = prefixClassName;
    this.$form = $form;
    this.$target = $target;
    this.onInputChange = this.onInputChange.bind(this);
    this.update($("input[name=" + this.inputName + "]:checked", this.$form).val());
    this.bindEvents();
  }

  var _proto = DisplayType.prototype;

  _proto.update = function update(value) {
    var _this = this;

    this.$target.each(function (i, el) {
      for (var j = 0; j < el.classList.length; j++) {
        var className = el.classList.item(j);

        if (className.indexOf(_this.prefixClassName) === 0) {
          _this.$target.removeClass(className);
        }
      }
    });
    this.$target.addClass("" + this.prefixClassName + value);
  };

  _proto.onInputChange = function onInputChange(event) {
    this.update($(event.target).val());
  };

  _proto.bindEvents = function bindEvents() {
    this.$form.on('change', "input[name=" + this.inputName + "]", this.onInputChange);
  };

  _proto.unbindEvents = function unbindEvents() {
    this.$form.off('change', "input[name=" + this.inputName + "]", this.onInputChange);
  };

  return DisplayType;
}();
function displayTypeFactory(selector, overrideOptions) {
  if (selector === void 0) {
    selector = "[data-" + PLUGIN_KEY.SNAKE + "]";
  }

  if (overrideOptions === void 0) {
    overrideOptions = {};
  }

  var $forms = $(selector, overrideOptions.$context);
  return $forms.map(function (index, form) {
    var $form = $(form);
    var instanceKey = PLUGIN_KEY.CAMEL + "Instance";
    var cachedInstance = $form.data(instanceKey);

    if (cachedInstance instanceof DisplayType) {
      return cachedInstance;
    }

    var targetId = prependHash($form.data(PLUGIN_KEY.CAMEL) || $form.data(PLUGIN_KEY.CAMEL + "Target") || $form.attr('href'));

    var options = lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(optionsFromData($form), overrideOptions);

    var instance = new DisplayType($form, $(targetId), options);
    $form.data(instanceKey, instance);
    return instance;
  }).toArray();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brands; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _chiara_display_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chiara/display-type */ "./assets/js/chiara/display-type.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }


 // Chiara MOD

var Brands = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Brands, _PageManager);

  function Brands() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Brands.prototype;

  // Chiara MOD
  _proto.onReady = function onReady() {
    Object(_chiara_display_type__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Chiara

    this.initInfiniteScroll();
  } // Chiara
  ;

  _proto.initInfiniteScroll = function initInfiniteScroll() {
    var _this = this;

    if (this.context.themeSettings.brandspage_infiniteScroll) {
      __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../chiara/infinite-scroll */ "./assets/js/chiara/infinite-scroll.js")).then(function (module) {
        return module.initBrandsPage(_this.context);
      });
    }
  };

  return Brands;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vYXNzZXRzL2pzL2NoaWFyYS9kaXNwbGF5LXR5cGUuanMiLCJ3ZWJwYWNrOi8vV2VicGFja0NoaWFyYS8uL2Fzc2V0cy9qcy90aGVtZS9icmFuZHMuanMiXSwibmFtZXMiOlsiUExVR0lOX0tFWSIsIkNBTUVMIiwiU05BS0UiLCJwcmVwZW5kSGFzaCIsImlkIiwiaW5kZXhPZiIsIm9wdGlvbnNGcm9tRGF0YSIsIiRlbGVtZW50IiwiaW5wdXROYW1lIiwiZGF0YSIsInByZWZpeENsYXNzTmFtZSIsIkRpc3BsYXlUeXBlIiwiJGZvcm0iLCIkdGFyZ2V0Iiwib25JbnB1dENoYW5nZSIsImJpbmQiLCJ1cGRhdGUiLCIkIiwidmFsIiwiYmluZEV2ZW50cyIsInZhbHVlIiwiZWFjaCIsImkiLCJlbCIsImoiLCJjbGFzc0xpc3QiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJpdGVtIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImV2ZW50IiwidGFyZ2V0Iiwib24iLCJ1bmJpbmRFdmVudHMiLCJvZmYiLCJkaXNwbGF5VHlwZUZhY3RvcnkiLCJzZWxlY3RvciIsIm92ZXJyaWRlT3B0aW9ucyIsIiRmb3JtcyIsIiRjb250ZXh0IiwibWFwIiwiaW5kZXgiLCJmb3JtIiwiaW5zdGFuY2VLZXkiLCJjYWNoZWRJbnN0YW5jZSIsInRhcmdldElkIiwiYXR0ciIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsInRvQXJyYXkiLCJCcmFuZHMiLCJvblJlYWR5IiwiaW5pdEluZmluaXRlU2Nyb2xsIiwiY29udGV4dCIsInRoZW1lU2V0dGluZ3MiLCJicmFuZHNwYWdlX2luZmluaXRlU2Nyb2xsIiwidGhlbiIsIm1vZHVsZSIsImluaXRCcmFuZHNQYWdlIiwiUGFnZU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDZkMsT0FBSyxFQUFFLGFBRFE7QUFFZkMsT0FBSyxFQUFFO0FBRlEs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QUFMO0FBQ0gsRyxDQUVEOzs7U0FDQUEsa0IsR0FBQSw4QkFBcUI7QUFBQTs7QUFDakIsUUFBSSxLQUFLQyxPQUFMLENBQWFDLGFBQWIsQ0FBMkJDLHlCQUEvQixFQUEwRDtBQUN0RCw4SkFBb0NDLElBQXBDLENBQXlDLFVBQUFDLE1BQU07QUFBQSxlQUFJQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0IsS0FBSSxDQUFDTCxPQUEzQixDQUFKO0FBQUEsT0FBL0M7QUFDSDtBQUNKLEc7OztFQWQrQk0scUQiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgUExVR0lOX0tFWSA9IHtcbiAgICBDQU1FTDogJ2Rpc3BsYXlUeXBlJyxcbiAgICBTTkFLRTogJ2Rpc3BsYXktdHlwZScsXG59O1xuXG5mdW5jdGlvbiBwcmVwZW5kSGFzaChpZCkge1xuICAgIGlmIChpZCAmJiBpZC5pbmRleE9mKCcjJykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIHJldHVybiBgIyR7aWR9YDtcbn1cblxuZnVuY3Rpb24gb3B0aW9uc0Zyb21EYXRhKCRlbGVtZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5wdXROYW1lOiAkZWxlbWVudC5kYXRhKGAke1BMVUdJTl9LRVkuQ0FNRUx9SW5wdXROYW1lYCksXG4gICAgICAgIHByZWZpeENsYXNzTmFtZTogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZLkNBTUVMfVByZWZpeENsYXNzTmFtZWApLFxuICAgIH07XG59XG5cbmV4cG9ydCBjbGFzcyBEaXNwbGF5VHlwZSB7XG4gICAgY29uc3RydWN0b3IoJGZvcm0sICR0YXJnZXQsIHtcbiAgICAgICAgaW5wdXROYW1lID0gJ2Rpc3BsYXktdHlwZScsXG4gICAgICAgIHByZWZpeENsYXNzTmFtZSA9ICdkaXNwbGF5LXR5cGUtJyxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5pbnB1dE5hbWUgPSBpbnB1dE5hbWU7XG4gICAgICAgIHRoaXMucHJlZml4Q2xhc3NOYW1lID0gcHJlZml4Q2xhc3NOYW1lO1xuICAgICAgICB0aGlzLiRmb3JtID0gJGZvcm07XG4gICAgICAgIHRoaXMuJHRhcmdldCA9ICR0YXJnZXQ7XG5cbiAgICAgICAgdGhpcy5vbklucHV0Q2hhbmdlID0gdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy51cGRhdGUoJChgaW5wdXRbbmFtZT0ke3RoaXMuaW5wdXROYW1lfV06Y2hlY2tlZGAsIHRoaXMuJGZvcm0pLnZhbCgpKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kdGFyZ2V0LmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGVsLmNsYXNzTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGVsLmNsYXNzTGlzdC5pdGVtKGopO1xuICAgICAgICAgICAgICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZih0aGlzLnByZWZpeENsYXNzTmFtZSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kdGFyZ2V0LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kdGFyZ2V0LmFkZENsYXNzKGAke3RoaXMucHJlZml4Q2xhc3NOYW1lfSR7dmFsdWV9YCk7XG4gICAgfVxuXG4gICAgb25JbnB1dENoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgkKGV2ZW50LnRhcmdldCkudmFsKCkpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJGZvcm0ub24oJ2NoYW5nZScsIGBpbnB1dFtuYW1lPSR7dGhpcy5pbnB1dE5hbWV9XWAsIHRoaXMub25JbnB1dENoYW5nZSk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRmb3JtLm9mZignY2hhbmdlJywgYGlucHV0W25hbWU9JHt0aGlzLmlucHV0TmFtZX1dYCwgdGhpcy5vbklucHV0Q2hhbmdlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUeXBlRmFjdG9yeShzZWxlY3RvciA9IGBbZGF0YS0ke1BMVUdJTl9LRVkuU05BS0V9XWAsIG92ZXJyaWRlT3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGZvcm1zID0gJChzZWxlY3Rvciwgb3ZlcnJpZGVPcHRpb25zLiRjb250ZXh0KTtcblxuICAgIHJldHVybiAkZm9ybXMubWFwKChpbmRleCwgZm9ybSkgPT4ge1xuICAgICAgICBjb25zdCAkZm9ybSA9ICQoZm9ybSk7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlS2V5ID0gYCR7UExVR0lOX0tFWS5DQU1FTH1JbnN0YW5jZWA7XG4gICAgICAgIGNvbnN0IGNhY2hlZEluc3RhbmNlID0gJGZvcm0uZGF0YShpbnN0YW5jZUtleSk7XG5cbiAgICAgICAgaWYgKGNhY2hlZEluc3RhbmNlIGluc3RhbmNlb2YgRGlzcGxheVR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRJbnN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gcHJlcGVuZEhhc2goJGZvcm0uZGF0YShQTFVHSU5fS0VZLkNBTUVMKSB8fFxuICAgICAgICAgICAgJGZvcm0uZGF0YShgJHtQTFVHSU5fS0VZLkNBTUVMfVRhcmdldGApIHx8XG4gICAgICAgICAgICAkZm9ybS5hdHRyKCdocmVmJykpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gXy5leHRlbmQob3B0aW9uc0Zyb21EYXRhKCRmb3JtKSwgb3ZlcnJpZGVPcHRpb25zKTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRGlzcGxheVR5cGUoJGZvcm0sICQodGFyZ2V0SWQpLCBvcHRpb25zKTtcblxuICAgICAgICAkZm9ybS5kYXRhKGluc3RhbmNlS2V5LCBpbnN0YW5jZSk7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0pLnRvQXJyYXkoKTtcbn1cbiIsImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgZGlzcGxheVR5cGVGYWN0b3J5IGZyb20gJy4uL2NoaWFyYS9kaXNwbGF5LXR5cGUnOyAvLyBDaGlhcmEgTU9EXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYW5kcyBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICAvLyBDaGlhcmEgTU9EXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgZGlzcGxheVR5cGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gQ2hpYXJhXG4gICAgICAgIHRoaXMuaW5pdEluZmluaXRlU2Nyb2xsKCk7XG4gICAgfVxuXG4gICAgLy8gQ2hpYXJhXG4gICAgaW5pdEluZmluaXRlU2Nyb2xsKCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MuYnJhbmRzcGFnZV9pbmZpbml0ZVNjcm9sbCkge1xuICAgICAgICAgICAgaW1wb3J0KCcuLi9jaGlhcmEvaW5maW5pdGUtc2Nyb2xsJykudGhlbihtb2R1bGUgPT4gbW9kdWxlLmluaXRCcmFuZHNQYWdlKHRoaXMuY29udGV4dCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
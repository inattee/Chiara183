(window["webpackJsonpWebpackChiara"] = window["webpackJsonpWebpackChiara"] || []).push([[19],{

/***/ "./assets/js/chiara/products-by-category.js":
/*!**************************************************!*\
  !*** ./assets/js/chiara/products-by-category.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");



var ProductsByCategory = /*#__PURE__*/function () {
  function ProductsByCategory($scope) {
    this.$scope = $scope;
    this.url = this.$scope.data('url');
    this.type = this.$scope.data('type');
    this.$content = this.$scope.is('[data-content]') ? this.$scope : this.$scope.find('[data-content]');
    this.loadProducts();
  }

  var _proto = ProductsByCategory.prototype;

  _proto.loadProducts = function loadProducts() {
    var _this = this;

    var template = "chiara/products-by-category/" + (this.type == 'carousel' ? 'carousel' : 'grid');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.getPage(this.url, {
      template: template
    }, function (err, resp) {
      _this.$scope.find('[data-loader]').remove();

      _this.$content.append(resp);

      _this.$content.find('[data-slick]').slick();
    });
  };

  return ProductsByCategory;
}();

/* harmony default export */ __webpack_exports__["default"] = (function (selector) {
  if (selector === void 0) {
    selector = '[data-products-by-category]';
  }

  return $(selector).get().map(function (el) {
    return new ProductsByCategory($(el));
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vYXNzZXRzL2pzL2NoaWFyYS9wcm9kdWN0cy1ieS1jYXRlZ29yeS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0c0J5Q2F0ZWdvcnkiLCIkc2NvcGUiLCJ1cmwiLCJkYXRhIiwidHlwZSIsIiRjb250ZW50IiwiaXMiLCJmaW5kIiwibG9hZFByb2R1Y3RzIiwidGVtcGxhdGUiLCJ1dGlscyIsImFwaSIsImdldFBhZ2UiLCJlcnIiLCJyZXNwIiwicmVtb3ZlIiwiYXBwZW5kIiwic2xpY2siLCJzZWxlY3RvciIsIiQiLCJnZXQiLCJtYXAiLCJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLGtCO0FBQ0YsOEJBQVlDLE1BQVosRUFBb0I7QUFDaEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtELE1BQUwsQ0FBWUUsSUFBWixDQUFpQixLQUFqQixDQUFYO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQUtILE1BQUwsQ0FBWUUsSUFBWixDQUFpQixNQUFqQixDQUFaO0FBQ0EsU0FBS0UsUUFBTCxHQUFnQixLQUFLSixNQUFMLENBQVlLLEVBQVosQ0FBZSxnQkFBZixJQUFtQyxLQUFLTCxNQUF4QyxHQUFpRCxLQUFLQSxNQUFMLENBQVlNLElBQVosQ0FBaUIsZ0JBQWpCLENBQWpFO0FBRUEsU0FBS0MsWUFBTDtBQUNIOzs7O1NBRURBLFksR0FBQSx3QkFBZTtBQUFBOztBQUNYLFFBQU1DLFFBQVEscUNBQWtDLEtBQUtMLElBQUwsSUFBYSxVQUFiLEdBQTBCLFVBQTFCLEdBQXVDLE1BQXpFLENBQWQ7QUFDQU0sc0VBQUssQ0FBQ0MsR0FBTixDQUFVQyxPQUFWLENBQWtCLEtBQUtWLEdBQXZCLEVBQTRCO0FBQUVPLGNBQVEsRUFBUkE7QUFBRixLQUE1QixFQUEwQyxVQUFDSSxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUNyRCxXQUFJLENBQUNiLE1BQUwsQ0FBWU0sSUFBWixDQUFpQixlQUFqQixFQUFrQ1EsTUFBbEM7O0FBQ0EsV0FBSSxDQUFDVixRQUFMLENBQWNXLE1BQWQsQ0FBcUJGLElBQXJCOztBQUNBLFdBQUksQ0FBQ1QsUUFBTCxDQUFjRSxJQUFkLENBQW1CLGNBQW5CLEVBQW1DVSxLQUFuQztBQUNILEtBSkQ7QUFLSCxHOzs7OztBQUdVLHlFQUFVQyxRQUFWLEVBQW9EO0FBQUEsTUFBMUNBLFFBQTBDO0FBQTFDQSxZQUEwQyxHQUEvQiw2QkFBK0I7QUFBQTs7QUFDL0QsU0FBT0MsQ0FBQyxDQUFDRCxRQUFELENBQUQsQ0FBWUUsR0FBWixHQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQUMsRUFBRTtBQUFBLFdBQUksSUFBSXRCLGtCQUFKLENBQXVCbUIsQ0FBQyxDQUFDRyxFQUFELENBQXhCLENBQUo7QUFBQSxHQUF4QixDQUFQO0FBQ0gsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuXG5jbGFzcyBQcm9kdWN0c0J5Q2F0ZWdvcnkge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSkge1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy51cmwgPSB0aGlzLiRzY29wZS5kYXRhKCd1cmwnKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy4kc2NvcGUuZGF0YSgndHlwZScpO1xuICAgICAgICB0aGlzLiRjb250ZW50ID0gdGhpcy4kc2NvcGUuaXMoJ1tkYXRhLWNvbnRlbnRdJykgPyB0aGlzLiRzY29wZSA6IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNvbnRlbnRdJyk7XG5cbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBsb2FkUHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gYGNoaWFyYS9wcm9kdWN0cy1ieS1jYXRlZ29yeS8ke3RoaXMudHlwZSA9PSAnY2Fyb3VzZWwnID8gJ2Nhcm91c2VsJyA6ICdncmlkJ31gO1xuICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh0aGlzLnVybCwgeyB0ZW1wbGF0ZSB9LCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1sb2FkZXJdJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLiRjb250ZW50LmFwcGVuZChyZXNwKTtcbiAgICAgICAgICAgIHRoaXMuJGNvbnRlbnQuZmluZCgnW2RhdGEtc2xpY2tdJykuc2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc2VsZWN0b3IgPSAnW2RhdGEtcHJvZHVjdHMtYnktY2F0ZWdvcnldJykge1xuICAgIHJldHVybiAkKHNlbGVjdG9yKS5nZXQoKS5tYXAoZWwgPT4gbmV3IFByb2R1Y3RzQnlDYXRlZ29yeSgkKGVsKSkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
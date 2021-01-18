(window["webpackJsonpWebpackChiara"] = window["webpackJsonpWebpackChiara"] || []).push([[20],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brand; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _chiara_sort_by__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chiara/sort-by */ "./assets/js/chiara/sort-by.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





 // Chiara

var Brand = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Brand, _CatalogPage);

  function Brand() {
    return _CatalogPage.apply(this, arguments) || this;
  }

  var _proto = Brand.prototype;

  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    } // Chiara


    this.initInfiniteScroll();
    Object(_chiara_sort_by__WEBPACK_IMPORTED_MODULE_4__["initMobileSortBy"])();
  } // Chiara
  ;

  _proto.initInfiniteScroll = function initInfiniteScroll() {
    var _this = this;

    if (this.context.themeSettings.brandpage_infiniteScroll) {
      __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../chiara/infinite-scroll */ "./assets/js/chiara/infinite-scroll.js")).then(function (module) {
        return module.initBrandPage(_this.context);
      });
    }
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'brand/product-listing',
        sidebar: 'brand/sidebar'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    }, {
      context: this.context
    }); // Chiara add context
  };

  return Brand;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vYXNzZXRzL2pzL3RoZW1lL2JyYW5kLmpzIl0sIm5hbWVzIjpbIkJyYW5kIiwib25SZWFkeSIsImNvbXBhcmVQcm9kdWN0cyIsImNvbnRleHQiLCJ1cmxzIiwiJCIsImxlbmd0aCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwiaG9va3MiLCJvbiIsImluaXRJbmZpbml0ZVNjcm9sbCIsImluaXRNb2JpbGVTb3J0QnkiLCJ0aGVtZVNldHRpbmdzIiwiYnJhbmRwYWdlX2luZmluaXRlU2Nyb2xsIiwidGhlbiIsIm1vZHVsZSIsImluaXRCcmFuZFBhZ2UiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImJyYW5kUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsImNvbmZpZyIsInNob3BfYnlfYnJhbmQiLCJicmFuZCIsInByb2R1Y3RzIiwibGltaXQiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJGYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiQ2F0YWxvZ1BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUNzRDs7SUFFakNBLEs7Ozs7Ozs7OztTQUNqQkMsTyxHQUFBLG1CQUFVO0FBQ05DLDRFQUFlLENBQUMsS0FBS0MsT0FBTCxDQUFhQyxJQUFkLENBQWY7O0FBRUEsUUFBSUMsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JDLE1BQXBCLEdBQTZCLENBQWpDLEVBQW9DO0FBQ2hDLFdBQUtDLGlCQUFMO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsV0FBS0MsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUF0QjtBQUNBQyxzRUFBSyxDQUFDQyxFQUFOLENBQVMsa0JBQVQsRUFBNkIsS0FBS0gsY0FBbEM7QUFDSCxLQVJLLENBVU47OztBQUNBLFNBQUtJLGtCQUFMO0FBQ0FDLDRFQUFnQjtBQUNuQixHLENBRUQ7OztTQUNBRCxrQixHQUFBLDhCQUFxQjtBQUFBOztBQUNqQixRQUFJLEtBQUtULE9BQUwsQ0FBYVcsYUFBYixDQUEyQkMsd0JBQS9CLEVBQXlEO0FBQ3JELDhKQUFvQ0MsSUFBcEMsQ0FBeUMsVUFBQUMsTUFBTTtBQUFBLGVBQUlBLE1BQU0sQ0FBQ0MsYUFBUCxDQUFxQixLQUFJLENBQUNmLE9BQTFCLENBQUo7QUFBQSxPQUEvQztBQUNIO0FBQ0osRzs7U0FFREksaUIsR0FBQSw2QkFBb0I7QUFDaEIsUUFBTVksd0JBQXdCLEdBQUdkLENBQUMsQ0FBQyw0QkFBRCxDQUFsQztBQUNBLFFBQU1lLHVCQUF1QixHQUFHZixDQUFDLENBQUMsMkJBQUQsQ0FBakM7QUFDQSxRQUFNZ0IsZUFBZSxHQUFHLEtBQUtsQixPQUFMLENBQWFtQixvQkFBckM7QUFDQSxRQUFNQyxjQUFjLEdBQUc7QUFDbkJDLGNBQVEsRUFBRTtBQUNOQyxzQkFBYyxFQUFFLHVCQURWO0FBRU5DLGVBQU8sRUFBRTtBQUZILE9BRFM7QUFLbkJDLFlBQU0sRUFBRTtBQUNKQyxxQkFBYSxFQUFFLElBRFg7QUFFSkMsYUFBSyxFQUFFO0FBQ0hDLGtCQUFRLEVBQUU7QUFDTkMsaUJBQUssRUFBRVY7QUFERDtBQURQO0FBRkgsT0FMVztBQWFuQlcsY0FBUSxFQUFFO0FBYlMsS0FBdkI7QUFnQkEsU0FBS0MsYUFBTCxHQUFxQixJQUFJQyw4REFBSixDQUFrQlgsY0FBbEIsRUFBa0MsVUFBQ1ksT0FBRCxFQUFhO0FBQ2hFaEIsOEJBQXdCLENBQUNpQixJQUF6QixDQUE4QkQsT0FBTyxDQUFDVixjQUF0QztBQUNBTCw2QkFBdUIsQ0FBQ2dCLElBQXhCLENBQTZCRCxPQUFPLENBQUNULE9BQXJDO0FBRUFyQixPQUFDLENBQUMsWUFBRCxDQUFELENBQWdCZ0MsT0FBaEIsQ0FBd0I7QUFDcEJDLGlCQUFTLEVBQUU7QUFEUyxPQUF4QixFQUVHLEdBRkg7QUFHSCxLQVBvQixFQU9sQjtBQUFFbkMsYUFBTyxFQUFFLEtBQUtBO0FBQWhCLEtBUGtCLENBQXJCLENBcEJnQixDQTJCZTtBQUNsQyxHOzs7RUFuRDhCb0MsZ0QiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBpbml0TW9iaWxlU29ydEJ5IH0gZnJvbSAnLi4vY2hpYXJhL3NvcnQtYnknOyAvLyBDaGlhcmFcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhbmQgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcblxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoaWFyYVxuICAgICAgICB0aGlzLmluaXRJbmZpbml0ZVNjcm9sbCgpO1xuICAgICAgICBpbml0TW9iaWxlU29ydEJ5KCk7XG4gICAgfVxuXG4gICAgLy8gQ2hpYXJhXG4gICAgaW5pdEluZmluaXRlU2Nyb2xsKCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MuYnJhbmRwYWdlX2luZmluaXRlU2Nyb2xsKSB7XG4gICAgICAgICAgICBpbXBvcnQoJy4uL2NoaWFyYS9pbmZpbml0ZS1zY3JvbGwnKS50aGVuKG1vZHVsZSA9PiBtb2R1bGUuaW5pdEJyYW5kUGFnZSh0aGlzLmNvbnRleHQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmJyYW5kUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdicmFuZC9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdicmFuZC9zaWRlYmFyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBzaG9wX2J5X2JyYW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJyYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdicmFuZC9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LCB7IGNvbnRleHQ6IHRoaXMuY29udGV4dCB9KTsgLy8gQ2hpYXJhIGFkZCBjb250ZXh0XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
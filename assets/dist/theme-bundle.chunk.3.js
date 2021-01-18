(window["webpackJsonpWebpackChiara"] = window["webpackJsonpWebpackChiara"] || []).push([[3],{

/***/ "./assets/js/chiara/sort-by.js":
/*!*************************************!*\
  !*** ./assets/js/chiara/sort-by.js ***!
  \*************************************/
/*! exports provided: default, initMobileSortBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMobileSortBy", function() { return initMobileSortBy; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");


var mobileSortBy;

var MobileSortBy = /*#__PURE__*/function () {
  function MobileSortBy() {
    this.onSortBySelected = this.onSortBySelected.bind(this);
    this.onMobileSortBySelected = this.onMobileSortBySelected.bind(this);
    this.bindEvents();
  }

  var _proto = MobileSortBy.prototype;

  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents(); // DOM events

    $('body').on('click', '[data-mobile-sort-by] [data-value]', this.onMobileSortBySelected); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["hooks"].on('sortBy-select-changed', this.onSortBySelected);
  };

  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $('body').off('click', '[data-mobile-sort-by] [data-value]', this.onMobileSortBySelected); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["hooks"].off('sortBy-select-changed', this.onSortBySelected);
  };

  _proto.onSortBySelected = function onSortBySelected(event) {
    var value = $(event.target).val();
    $('[data-mobile-sort-by]').find('[data-value]').removeClass('is-active').filter("[data-value=" + value + "]").addClass('is-active');
  };

  _proto.onMobileSortBySelected = function onMobileSortBySelected(event) {
    event.preventDefault();
    $('[data-sort-by] select').val($(event.target).data('value')).trigger('change', event); // Close the panel

    var collapsible = $('[data-mobile-sort-by] [data-collapsible]').first().data('collapsibleInstance');

    if (collapsible) {
      collapsible.close();
    }
  };

  return MobileSortBy;
}();

/* harmony default export */ __webpack_exports__["default"] = (MobileSortBy);
function initMobileSortBy() {
  if (!mobileSortBy) {
    mobileSortBy = new MobileSortBy();
  }

  return mobileSortBy;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);

  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = CatalogPage.prototype;

  _proto.onSortBySubmit = function onSortBySubmit(event) {
    var url = url__WEBPACK_IMPORTED_MODULE_3___default.a.parse(window.location.href, true);
    var queryParams = $(event.currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_3___default.a.format({
      pathname: url.pathname,
      search: _common_url_utils__WEBPACK_IMPORTED_MODULE_2__["default"].buildQueryString(url.query)
    });
  };

  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");












/**
 * Faceted search view component
 */

var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;

    var defaultOptions = {
      accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
      blockerSelector: '#facetedSearch .blocker',
      clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
      componentSelector: '#facetedSearch-navList',
      facetNavListSelector: '#facetedSearch .navList',
      priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
      priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
      priceRangeFormSelector: '#facet-range-form',
      priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
      priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
      showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
      facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
      modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_8__["default"])('#modal')[0],
      modalOpen: false
    }; // Private properties

    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_4___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = []; // Init collapsibles

    Object(_collapsible__WEBPACK_IMPORTED_MODULE_9__["default"])(); // Init price validator

    this.initPriceValidator(); // Show limited items by default

    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    }); // Mark initially collapsed accordions

    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');

      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    }); // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped

    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    }); // Observe user events

    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  } // Public methods


  var _proto = FacetedSearch.prototype;

  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    } // Init collapsibles


    Object(_collapsible__WEBPACK_IMPORTED_MODULE_9__["default"])(); // Init price validator

    this.initPriceValidator(); // Restore view state

    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems(); // Bind events

    this.bindEvents();
  };

  _proto.updateView = function updateView() {
    var _this2 = this;

    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["api"].getPage(_url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();

      if (err) {
        throw new Error(err);
      } // Refresh view with new content


      _this2.refreshView(content);
    });
  };

  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id'); // Remove

    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_3___default()(this.collapsedFacetItems, id);
  };

  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');

    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_3___default()(this.collapsedFacetItems, id);
    }
  };

  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id'); // Toggle depending on `collapsed` flag

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;

    var facet = $navList.data('facet');
    var facetUrl = _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getUrl();

    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["api"].getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }

        _this3.options.modal.open();

        _this3.options.modalOpen = true;

        _this3.options.modal.updateContent(response);
      });
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();

      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };

  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };

  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };

  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this4.collapseFacet($accordionToggle);
    });
  };

  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this5.expandFacet($accordionToggle);
    });
  } // Private methods
  ;

  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }

    var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_11__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setMinMaxPriceValidation(validator, selectors);
    this.priceRangeValidator = validator;
  };

  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;

    var $navLists = $(this.options.facetNavListSelector); // Restore collapsed state for each facet

    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_1___default()(_this6.collapsedFacetItems, id);

      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };

  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_1___default()(_this7.collapsedFacets, id);

      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };

  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents(); // DOM events

    $(window).on('statechange', this.onStateChange);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation(); // Update URL

    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url);
  };

  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href')); // Prevent default

    event.preventDefault(); // Toggle visible items

    this.toggleFacetItems($navList);
  };

  _proto.onFacetClick = function onFacetClick(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected'); // Update URL

    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url);

    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event) {
    var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);
    var queryParams = $(event.currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_6___default.a.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].buildQueryString(url.query)
    }));
  };

  _proto.onRangeSubmit = function onRangeSubmit(event) {
    event.preventDefault();

    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_11__["default"].constants.VALID)) {
      return;
    }

    var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href);
    var queryParams = decodeURI($(event.currentTarget).serialize());
    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_6___default.a.format({
      pathname: url.pathname,
      search: "?" + queryParams
    }));
  };

  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };

  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;

    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_3___default()(this.collapsedFacets, id);
    }
  };

  return FacetedSearch;
}();

/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/*! exports provided: classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor.js */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");












var inputTagNames = ['input', 'select', 'textarea'];
/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */

function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName; // Input can be text/checkbox/radio etc...

  if (tagName === 'input') {
    var inputType = $input.prop('type');

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_9___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_8___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_7___default()(inputType);
    }
  } // Apply class modifier


  return $formField.addClass(className).addClass(specificClassName);
}
/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */


function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }

  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', ')); // Obtain options

  var _options = options,
      _options$formFieldCla = _options.formFieldClass,
      formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla; // Classify each input in a form

  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}
/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */

function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);

  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }

  return '';
}
/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */


function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}

var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setEmailValidation: function setEmailValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_11__["default"].email(val);
          cb(result);
        },
        errorMessage: 'You must enter a valid email.'
      });
    }
  },

  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength; // If optional and nothing entered, it is valid

        if (isOptional && val.length === 0) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: requirements.error
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: 'Your passwords do not match.'
    }];
    validator.add(passwordValidations);
  },

  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
    var errorSelector = selectors.errorSelector,
        fieldsetSelector = selectors.fieldsetSelector,
        formSelector = selectors.formSelector,
        maxPriceSelector = selectors.maxPriceSelector,
        minPriceSelector = selectors.minPriceSelector;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class

    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Max. price is required.',
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Min. price is required.',
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Input must be greater than 0.',
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },

  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: 'The \'State/Province\' field cannot be blank.'
      });
    }
  },

  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].classes[value]);
      }
    });
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/url-utils.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/common/url-utils.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.search.js */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);


var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_1___default.a.parse(url, true);
    var param; // Let the formatter use the query object to build the new url

    parsed.search = null;

    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }

    return url__WEBPACK_IMPORTED_MODULE_1___default.a.format(parsed);
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;

    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;

          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + key + "=" + queryData[key][ndx];
            }
          }
        } else {
          out += "&" + key + "=" + queryData[key];
        }
      }
    }

    return out.substring(1);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (urlUtils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");




function decrementCounter(counter, item) {
  var index = counter.indexOf(item);

  if (index > -1) {
    counter.splice(index, 1);
  }
}

function incrementCounter(counter, item) {
  counter.push(item);
}

function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }

    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (urlContext) {
  var products;
  var $checked = $('body').find('input[name="products\[\]"]:checked');
  var $compareLink = $('a[data-compare-nav]');

  if ($checked.length !== 0) {
    products = lodash_map__WEBPACK_IMPORTED_MODULE_1___default()($checked, function (element) {
      return element.value;
    });
    updateCounterNav(products, $compareLink, urlContext);
  }

  var compareCounter = products || [];
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');

    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }

    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');

    if (productsToCompare.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_2__["showAlertModal"])('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    // Papathemes fix - Filter/Page change
    if (compareCounter.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_2__["showAlertModal"])('You must select at least two products to compare');
      return false;
    }

    window.location.href = urlContext.compare + "/" + compareCounter.join('/');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vYXNzZXRzL2pzL2NoaWFyYS9zb3J0LWJ5LmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9mYWNldGVkLXNlYXJjaC5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9mb3JtLXV0aWxzLmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3VybC11dGlscy5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzLmpzIl0sIm5hbWVzIjpbIm1vYmlsZVNvcnRCeSIsIk1vYmlsZVNvcnRCeSIsIm9uU29ydEJ5U2VsZWN0ZWQiLCJiaW5kIiwib25Nb2JpbGVTb3J0QnlTZWxlY3RlZCIsImJpbmRFdmVudHMiLCJ1bmJpbmRFdmVudHMiLCIkIiwib24iLCJob29rcyIsIm9mZiIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJ2YWwiLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJmaWx0ZXIiLCJhZGRDbGFzcyIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInRyaWdnZXIiLCJjb2xsYXBzaWJsZSIsImZpcnN0IiwiY2xvc2UiLCJpbml0TW9iaWxlU29ydEJ5IiwiQ2F0YWxvZ1BhZ2UiLCJvblNvcnRCeVN1Ym1pdCIsInVybCIsIlVybCIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicXVlcnlQYXJhbXMiLCJjdXJyZW50VGFyZ2V0Iiwic2VyaWFsaXplIiwic3BsaXQiLCJxdWVyeSIsInBhZ2UiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsInVybFV0aWxzIiwiYnVpbGRRdWVyeVN0cmluZyIsIlBhZ2VNYW5hZ2VyIiwiRmFjZXRlZFNlYXJjaCIsInJlcXVlc3RPcHRpb25zIiwiY2FsbGJhY2siLCJvcHRpb25zIiwiZGVmYXVsdE9wdGlvbnMiLCJhY2NvcmRpb25Ub2dnbGVTZWxlY3RvciIsImJsb2NrZXJTZWxlY3RvciIsImNsZWFyRmFjZXRTZWxlY3RvciIsImNvbXBvbmVudFNlbGVjdG9yIiwiZmFjZXROYXZMaXN0U2VsZWN0b3IiLCJwcmljZVJhbmdlRXJyb3JTZWxlY3RvciIsInByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yIiwicHJpY2VSYW5nZUZvcm1TZWxlY3RvciIsInByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yIiwicHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IiLCJzaG93TW9yZVRvZ2dsZVNlbGVjdG9yIiwiZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zIiwibW9kYWwiLCJtb2RhbEZhY3RvcnkiLCJtb2RhbE9wZW4iLCJjb2xsYXBzZWRGYWNldHMiLCJjb2xsYXBzZWRGYWNldEl0ZW1zIiwiY29sbGFwc2libGVGYWN0b3J5IiwiaW5pdFByaWNlVmFsaWRhdG9yIiwiZWFjaCIsImluZGV4IiwibmF2TGlzdCIsImNvbGxhcHNlRmFjZXRJdGVtcyIsImFjY29yZGlvblRvZ2dsZSIsIiRhY2NvcmRpb25Ub2dnbGUiLCJpc0NvbGxhcHNlZCIsInB1c2giLCJ0YXJnZXRJZCIsInNldFRpbWVvdXQiLCJpcyIsImNvbGxhcHNlQWxsRmFjZXRzIiwib25TdGF0ZUNoYW5nZSIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwicmVmcmVzaFZpZXciLCJjb250ZW50IiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0cyIsInJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zIiwidXBkYXRlVmlldyIsInNob3ciLCJhcGkiLCJnZXRQYWdlIiwiZ2V0VXJsIiwiZXJyIiwiaGlkZSIsIkVycm9yIiwiZXhwYW5kRmFjZXRJdGVtcyIsIiRuYXZMaXN0IiwiaWQiLCJhdHRyIiwiaGFzTW9yZVJlc3VsdHMiLCJ0b2dnbGVGYWNldEl0ZW1zIiwiZ2V0TW9yZUZhY2V0UmVzdWx0cyIsImZhY2V0IiwiZmFjZXRVcmwiLCJzaG93TW9yZSIsInRlbXBsYXRlIiwicGFyYW1zIiwibGlzdF9hbGwiLCJyZXNwb25zZSIsIm9wZW4iLCJ1cGRhdGVDb250ZW50IiwiJGl0ZW1zIiwidG9Mb3dlckNhc2UiLCJlbGVtZW50IiwidGV4dCIsImluZGV4T2YiLCJleHBhbmRGYWNldCIsImNvbGxhcHNlRmFjZXQiLCIkYWNjb3JkaW9uVG9nZ2xlcyIsImV4cGFuZEFsbEZhY2V0cyIsImxlbmd0aCIsInZhbGlkYXRvciIsIm5vZCIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJWYWxpZGF0b3JzIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwicHJpY2VSYW5nZVZhbGlkYXRvciIsIiRuYXZMaXN0cyIsInNob3VsZENvbGxhcHNlIiwiZG9jdW1lbnQiLCIkbGluayIsInN0b3BQcm9wYWdhdGlvbiIsImdvVG9VcmwiLCIkdG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJhcmVBbGwiLCJjb25zdGFudHMiLCJWQUxJRCIsImRlY29kZVVSSSIsImlucHV0VGFnTmFtZXMiLCJjbGFzc2lmeUlucHV0IiwiaW5wdXQiLCJmb3JtRmllbGRDbGFzcyIsIiRpbnB1dCIsIiRmb3JtRmllbGQiLCJwYXJlbnQiLCJ0YWdOYW1lIiwicHJvcCIsImNsYXNzTmFtZSIsInNwZWNpZmljQ2xhc3NOYW1lIiwiaW5wdXRUeXBlIiwiY2xhc3NpZnlGb3JtIiwiJGZvcm0iLCIkaW5wdXRzIiwiam9pbiIsIl9fIiwiZ2V0RmllbGRJZCIsIiRmaWVsZCIsImZpZWxkSWQiLCJtYXRjaCIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCIkc3RhdGVGaWVsZCIsInN0YXRlRmllbGRBdHRycyIsInR5cGUiLCJuYW1lIiwiYWZ0ZXIiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJmaWVsZCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImZvcm1zIiwiZW1haWwiLCJlcnJvck1lc3NhZ2UiLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJwYXNzd29yZFNlbGVjdG9yIiwicGFzc3dvcmQyU2VsZWN0b3IiLCJyZXF1aXJlbWVudHMiLCJpc09wdGlvbmFsIiwiJHBhc3N3b3JkIiwicGFzc3dvcmRWYWxpZGF0aW9ucyIsIlJlZ0V4cCIsImFscGhhIiwibnVtZXJpYyIsIm1pbmxlbmd0aCIsImVycm9yIiwiY29uZmlndXJlIiwiZm9ybSIsInByZXZlbnRTdWJtaXQiLCJzdWNjZXNzQ2xhc3MiLCJzZXRNZXNzYWdlT3B0aW9ucyIsImVycm9yU3BhbiIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwiJGZpZWxkQ2xhc3NFbGVtZW50IiwiT2JqZWN0Iiwia2V5cyIsImNsYXNzZXMiLCJmb3JFYWNoIiwiaGFzQ2xhc3MiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwidGl0bGUiLCJyZXBsYWNlUGFyYW1zIiwicGFyc2VkIiwicGFyYW0iLCJoYXNPd25Qcm9wZXJ0eSIsInF1ZXJ5RGF0YSIsIm91dCIsImtleSIsIkFycmF5IiwiaXNBcnJheSIsIm5keCIsInN1YnN0cmluZyIsImRlY3JlbWVudENvdW50ZXIiLCJjb3VudGVyIiwiaXRlbSIsInNwbGljZSIsImluY3JlbWVudENvdW50ZXIiLCJ1cGRhdGVDb3VudGVyTmF2IiwidXJsQ29udGV4dCIsImNvbXBhcmUiLCJodG1sIiwicHJvZHVjdHMiLCIkY2hlY2tlZCIsIiRjb21wYXJlTGluayIsImNvbXBhcmVDb3VudGVyIiwicHJvZHVjdCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCJjaGVja2VkIiwi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RSxJQUFmLENBQW9CLEdBQXBCLENBQWhEO0FBQ0gsR0FSRDtBQVNILEMiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcblxubGV0IG1vYmlsZVNvcnRCeTtcblxuY2xhc3MgTW9iaWxlU29ydEJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vblNvcnRCeVNlbGVjdGVkID0gdGhpcy5vblNvcnRCeVNlbGVjdGVkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb2JpbGVTb3J0QnlTZWxlY3RlZCA9IHRoaXMub25Nb2JpbGVTb3J0QnlTZWxlY3RlZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIENsZWFuLXVwXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLW1vYmlsZS1zb3J0LWJ5XSBbZGF0YS12YWx1ZV0nLCB0aGlzLm9uTW9iaWxlU29ydEJ5U2VsZWN0ZWQpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc2VsZWN0LWNoYW5nZWQnLCB0aGlzLm9uU29ydEJ5U2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKCdib2R5Jykub2ZmKCdjbGljaycsICdbZGF0YS1tb2JpbGUtc29ydC1ieV0gW2RhdGEtdmFsdWVdJywgdGhpcy5vbk1vYmlsZVNvcnRCeVNlbGVjdGVkKTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vZmYoJ3NvcnRCeS1zZWxlY3QtY2hhbmdlZCcsIHRoaXMub25Tb3J0QnlTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgb25Tb3J0QnlTZWxlY3RlZChldmVudCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9ICQoZXZlbnQudGFyZ2V0KS52YWwoKTtcbiAgICAgICAgJCgnW2RhdGEtbW9iaWxlLXNvcnQtYnldJykuZmluZCgnW2RhdGEtdmFsdWVdJylcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgIC5maWx0ZXIoYFtkYXRhLXZhbHVlPSR7dmFsdWV9XWApXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIG9uTW9iaWxlU29ydEJ5U2VsZWN0ZWQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnW2RhdGEtc29ydC1ieV0gc2VsZWN0JylcbiAgICAgICAgICAgIC52YWwoJChldmVudC50YXJnZXQpLmRhdGEoJ3ZhbHVlJykpXG4gICAgICAgICAgICAudHJpZ2dlcignY2hhbmdlJywgZXZlbnQpO1xuXG4gICAgICAgIC8vIENsb3NlIHRoZSBwYW5lbFxuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICQoJ1tkYXRhLW1vYmlsZS1zb3J0LWJ5XSBbZGF0YS1jb2xsYXBzaWJsZV0nKS5maXJzdCgpLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgaWYgKGNvbGxhcHNpYmxlKSB7XG4gICAgICAgICAgICBjb2xsYXBzaWJsZS5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVTb3J0Qnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TW9iaWxlU29ydEJ5KCkge1xuICAgIGlmICghbW9iaWxlU29ydEJ5KSB7XG4gICAgICAgIG1vYmlsZVNvcnRCeSA9IG5ldyBNb2JpbGVTb3J0QnkoKTtcbiAgICB9XG4gICAgcmV0dXJuIG1vYmlsZVNvcnRCeTtcbn1cbiIsImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGhvb2tzLCBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vdXJsLXV0aWxzJztcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnLi9mb3JtLXV0aWxzJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuXG4vKipcbiAqIEZhY2V0ZWQgc2VhcmNoIHZpZXcgY29tcG9uZW50XG4gKi9cbmNsYXNzIEZhY2V0ZWRTZWFyY2gge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIE9iamVjdCB3aXRoIG9wdGlvbnMgZm9yIHRoZSBhamF4IHJlcXVlc3RzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGZldGNoaW5nIHRlbXBsYXRlc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAqICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICogICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAqICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJ1xuICAgICAqICAgICB9XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCB0ZW1wbGF0ZXNEaWRMb2FkID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAqICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgKiAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCB0ZW1wbGF0ZXNEaWRMb2FkKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZXF1ZXN0T3B0aW9ucywgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhY2NvcmRpb25Ub2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tbmF2aWdhdGlvbiwgI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtdG9nZ2xlJyxcbiAgICAgICAgICAgIGJsb2NrZXJTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5ibG9ja2VyJyxcbiAgICAgICAgICAgIGNsZWFyRmFjZXRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLWNsZWFyTGluaycsXG4gICAgICAgICAgICBjb21wb25lbnRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoLW5hdkxpc3QnLFxuICAgICAgICAgICAgZmFjZXROYXZMaXN0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAubmF2TGlzdCcsXG4gICAgICAgICAgICBwcmljZVJhbmdlRXJyb3JTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWlubGluZU1lc3NhZ2UnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1maWVsZHNldCcsXG4gICAgICAgICAgICBwcmljZVJhbmdlRm9ybVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0nLFxuICAgICAgICAgICAgcHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1tYXhfcHJpY2VdJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWluX3ByaWNlXScsXG4gICAgICAgICAgICBzaG93TW9yZVRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1jb250ZW50IC50b2dnbGVMaW5rJyxcbiAgICAgICAgICAgIGZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtczogJyNmYWNldGVkU2VhcmNoLWZpbHRlckl0ZW1zIC5mb3JtLWlucHV0JyxcbiAgICAgICAgICAgIG1vZGFsOiBtb2RhbEZhY3RvcnkoJyNtb2RhbCcpWzBdLFxuICAgICAgICAgICAgbW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQcml2YXRlIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5yZXF1ZXN0T3B0aW9ucyA9IHJlcXVlc3RPcHRpb25zO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IF8uZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gW107XG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IFtdO1xuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gU2hvdyBsaW1pdGVkIGl0ZW1zIGJ5IGRlZmF1bHRcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkKG5hdkxpc3QpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTWFyayBpbml0aWFsbHkgY29sbGFwc2VkIGFjY29yZGlvbnNcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cy5wdXNoKGNvbGxhcHNpYmxlLnRhcmdldElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29sbGFwc2UgYWxsIGZhY2V0cyBpZiBpbml0aWFsbHkgaGlkZGVuXG4gICAgICAgIC8vIE5PVEU6IE5lZWQgdG8gZXhlY3V0ZSBhZnRlciBDb2xsYXBzaWJsZSBnZXRzIGJvb3RzdHJhcHBlZFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5jb21wb25lbnRTZWxlY3RvcikuaXMoJzpoaWRkZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VBbGxGYWNldHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gT2JzZXJ2ZSB1c2VyIGV2ZW50c1xuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UgPSB0aGlzLm9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblRvZ2dsZUNsaWNrID0gdGhpcy5vblRvZ2dsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25BY2NvcmRpb25Ub2dnbGUgPSB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DbGVhckZhY2V0ID0gdGhpcy5vbkNsZWFyRmFjZXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkZhY2V0Q2xpY2sgPSB0aGlzLm9uRmFjZXRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUmFuZ2VTdWJtaXQgPSB0aGlzLm9uUmFuZ2VTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5maWx0ZXJGYWNldEl0ZW1zID0gdGhpcy5maWx0ZXJGYWNldEl0ZW1zLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICByZWZyZXNoVmlldyhjb250ZW50KSB7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKGNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBSZXN0b3JlIHZpZXcgc3RhdGVcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCk7XG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKTtcblxuICAgICAgICAvLyBCaW5kIGV2ZW50c1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWaWV3KCkge1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLnNob3coKTtcblxuICAgICAgICBhcGkuZ2V0UGFnZSh1cmxVdGlscy5nZXRVcmwoKSwgdGhpcy5yZXF1ZXN0T3B0aW9ucywgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVmcmVzaCB2aWV3IHdpdGggbmV3IGNvbnRlbnRcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFZpZXcoY29udGVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFJlbW92ZVxuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgY29uc3QgaGFzTW9yZVJlc3VsdHMgPSAkbmF2TGlzdC5kYXRhKCdoYXNNb3JlUmVzdWx0cycpO1xuXG4gICAgICAgIGlmIChoYXNNb3JlUmVzdWx0cykge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIGRlcGVuZGluZyBvbiBgY29sbGFwc2VkYCBmbGFnXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBmYWNldCA9ICRuYXZMaXN0LmRhdGEoJ2ZhY2V0Jyk7XG4gICAgICAgIGNvbnN0IGZhY2V0VXJsID0gdXJsVXRpbHMuZ2V0VXJsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUpIHtcbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKGZhY2V0VXJsLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiBmYWNldCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5vcGVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsT3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZpbHRlckZhY2V0SXRlbXMoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGl0ZW1zID0gJCgnLm5hdkxpc3QtaXRlbScpO1xuICAgICAgICBjb25zdCBxdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAkaXRlbXMuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSAkKGVsZW1lbnQpLnRleHQoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKHRleHQuaW5kZXhPZihxdWVyeSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgY29sbGFwc2libGUub3BlbigpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VBbGxGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcbiAgICBpbml0UHJpY2VWYWxpZGF0b3IoKSB7XG4gICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5vZCgpO1xuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB7XG4gICAgICAgICAgICBlcnJvclNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUVycm9yU2VsZWN0b3IsXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICB9O1xuXG4gICAgICAgIFZhbGlkYXRvcnMuc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uKHZhbGlkYXRvciwgc2VsZWN0b3JzKTtcblxuICAgICAgICB0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IgPSB2YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKSB7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0cyA9ICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKTtcblxuICAgICAgICAvLyBSZXN0b3JlIGNvbGxhcHNlZCBzdGF0ZSBmb3IgZWFjaCBmYWNldFxuICAgICAgICAkbmF2TGlzdHMuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJChuYXZMaXN0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBDbGVhbi11cFxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vbignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9mZignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub2ZmKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9mZignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIG9uQ2xlYXJGYWNldChldmVudCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBvblRvZ2dsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQoJHRvZ2dsZS5hdHRyKCdocmVmJykpO1xuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGl0ZW1zXG4gICAgICAgIHRoaXMudG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgfVxuXG4gICAgb25GYWNldENsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJGxpbmsudG9nZ2xlQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RhbE9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KSk7XG4gICAgfVxuXG4gICAgb25SYW5nZVN1Ym1pdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yLmFyZUFsbChub2QuY29uc3RhbnRzLlZBTElEKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBkZWNvZGVVUkkoJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKSk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiBgPyR7cXVlcnlQYXJhbXN9YCB9KSk7XG4gICAgfVxuXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfVxuXG4gICAgb25BY2NvcmRpb25Ub2dnbGUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG5cbiAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldHMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmFjZXRlZFNlYXJjaDtcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcbmltcG9ydCBmb3JtcyBmcm9tICcuL21vZGVscy9mb3Jtcyc7XG5cbmNvbnN0IGlucHV0VGFnTmFtZXMgPSBbXG4gICAgJ2lucHV0JyxcbiAgICAnc2VsZWN0JyxcbiAgICAndGV4dGFyZWEnLFxuXTtcblxuLyoqXG4gKiBBcHBseSBjbGFzcyBuYW1lIHRvIGFuIGlucHV0IGVsZW1lbnQgb24gaXRzIHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dFxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1GaWVsZENsYXNzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEVsZW1lbnQgaXRzZWxmXG4gKi9cbmZ1bmN0aW9uIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKSB7XG4gICAgY29uc3QgJGlucHV0ID0gJChpbnB1dCk7XG4gICAgY29uc3QgJGZvcm1GaWVsZCA9ICRpbnB1dC5wYXJlbnQoYC4ke2Zvcm1GaWVsZENsYXNzfWApO1xuICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXQucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke3RhZ05hbWV9YDtcbiAgICBsZXQgc3BlY2lmaWNDbGFzc05hbWU7XG5cbiAgICAvLyBJbnB1dCBjYW4gYmUgdGV4dC9jaGVja2JveC9yYWRpbyBldGMuLi5cbiAgICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSAkaW5wdXQucHJvcCgndHlwZScpO1xuXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKFsncmFkaW8nLCAnY2hlY2tib3gnLCAnc3VibWl0J10sIGlucHV0VHlwZSkpIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0tY2hlY2tib3gsIC5mb3JtLWZpZWxkLS1yYWRpb1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke18uY2FtZWxDYXNlKGlucHV0VHlwZSl9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0taW5wdXQgLmZvcm0tZmllbGQtLWlucHV0VGV4dFxuICAgICAgICAgICAgc3BlY2lmaWNDbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9JHtfLmNhcGl0YWxpemUoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgY2xhc3MgbW9kaWZpZXJcbiAgICByZXR1cm4gJGZvcm1GaWVsZFxuICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lKVxuICAgICAgICAuYWRkQ2xhc3Moc3BlY2lmaWNDbGFzc05hbWUpO1xufVxuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gZWFjaCBpbnB1dCBlbGVtZW50IGluIGEgZm9ybSBiYXNlZCBvbiBpdHMgdHlwZVxuICogQGV4YW1wbGVcbiAqIC8vIEJlZm9yZVxuICogPGZvcm0gaWQ9XCJmb3JtXCI+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XG4gKiAgICAgPC9kaXY+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPHNlbGVjdD4uLi48L3NlbGVjdD5cbiAqICAgICA8L2Rpdj5cbiAqIDwvZm9ybT5cbiAqXG4gKiBjbGFzc2lmeUZvcm0oJyNmb3JtJywgeyBmb3JtRmllbGRDbGFzczogJ2Zvcm0tZmllbGQnIH0pO1xuICpcbiAqIC8vIEFmdGVyXG4gKiA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1pbnB1dCBmb3JtLWZpZWxkLS1pbnB1dFRleHRcIj4uLi48L2Rpdj5cbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNlbGVjdFwiPi4uLjwvZGl2PlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gZm9ybVNlbGVjdG9yIC0gc2VsZWN0b3Igb3IgZWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge2pRdWVyeX0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5Rm9ybShmb3JtU2VsZWN0b3IsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRmb3JtID0gJChmb3JtU2VsZWN0b3IpO1xuICAgIGNvbnN0ICRpbnB1dHMgPSAkZm9ybS5maW5kKGlucHV0VGFnTmFtZXMuam9pbignLCAnKSk7XG5cbiAgICAvLyBPYnRhaW4gb3B0aW9uc1xuICAgIGNvbnN0IHsgZm9ybUZpZWxkQ2xhc3MgPSAnZm9ybS1maWVsZCcgfSA9IG9wdGlvbnM7XG5cbiAgICAvLyBDbGFzc2lmeSBlYWNoIGlucHV0IGluIGEgZm9ybVxuICAgICRpbnB1dHMuZWFjaCgoX18sIGlucHV0KSA9PiB7XG4gICAgICAgIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAkZm9ybTtcbn1cblxuLyoqXG4gKiBHZXQgaWQgZnJvbSBnaXZlbiBmaWVsZFxuICogQHBhcmFtIHtvYmplY3R9ICRmaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEZpZWxkSWQoJGZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9ICRmaWVsZC5wcm9wKCduYW1lJykubWF0Y2goLyhcXFsuKlxcXSkvKTtcblxuICAgIGlmIChmaWVsZElkICYmIGZpZWxkSWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBmaWVsZElkWzBdO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBJbnNlcnQgaGlkZGVuIGZpZWxkIGFmdGVyIFN0YXRlL1Byb3ZpbmNlIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJHN0YXRlRmllbGQgSlF1ZXJ5IGZpZWxkIG9iamVjdFxuICovXG5mdW5jdGlvbiBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRzdGF0ZUZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9IGdldEZpZWxkSWQoJHN0YXRlRmllbGQpO1xuICAgIGNvbnN0IHN0YXRlRmllbGRBdHRycyA9IHtcbiAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgIG5hbWU6IGBGb3JtRmllbGRJc1RleHQke2ZpZWxkSWR9YCxcbiAgICAgICAgdmFsdWU6ICcxJyxcbiAgICB9O1xuXG4gICAgJHN0YXRlRmllbGQuYWZ0ZXIoJCgnPGlucHV0IC8+Jywgc3RhdGVGaWVsZEF0dHJzKSk7XG59XG5cbmNvbnN0IFZhbGlkYXRvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0RW1haWxWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSB2YWxpZCBlbWFpbC4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBwYXNzd29yZFNlbGVjdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkMlNlbGVjdG9yXG4gICAgICogQHBhcmFtIHJlcXVpcmVtZW50c1xuICAgICAqIEBwYXJhbSBpc09wdGlvbmFsXG4gICAgICovXG4gICAgc2V0UGFzc3dvcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBwYXNzd29yZFNlbGVjdG9yLCBwYXNzd29yZDJTZWxlY3RvciwgcmVxdWlyZW1lbnRzLCBpc09wdGlvbmFsKSA9PiB7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMuYWxwaGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLm1hdGNoKG5ldyBSZWdFeHAocmVxdWlyZW1lbnRzLm51bWVyaWMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLmxlbmd0aCA+PSByZXF1aXJlbWVudHMubWlubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG9wdGlvbmFsIGFuZCBub3RoaW5nIGVudGVyZWQsIGl0IGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsICYmIHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHJlcXVpcmVtZW50cy5lcnJvcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSBwYXNzd29yZC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbCA9PT0gJHBhc3N3b3JkLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3VyIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2guJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZChwYXNzd29yZFZhbGlkYXRpb25zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXG4gICAgICogQHBhcmFtIHtOb2R9IHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmVycm9yU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmZpZWxkc2V0U2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmZvcm1TZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWF4UHJpY2VTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWluUHJpY2VTZWxlY3RvclxuICAgICAqL1xuICAgIHNldE1pbk1heFByaWNlVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgc2VsZWN0b3JzKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3IsXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH0gPSBzZWxlY3RvcnM7XG5cbiAgICAgICAgdmFsaWRhdG9yLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBmb3JtOiBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBwcmV2ZW50U3VibWl0OiB0cnVlLFxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAnXycsIC8vIEtMVURHRTogRG9uJ3QgYXBwbHkgc3VjY2VzcyBjbGFzc1xuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01heC4gcHJpY2UgaXMgcmVxdWlyZWQuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluLiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdJbnB1dCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdtaW4tbnVtYmVyOjAnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3Iuc2V0TWVzc2FnZU9wdGlvbnMoe1xuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcbiAgICAgICAgICAgIHBhcmVudDogZmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGVycm9yU3BhbjogZXJyb3JTZWxlY3RvcixcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBuZXcgdmFsaWRhdGlvbiB3aGVuIHRoZSBmb3JtIGlzIGRpcnR5XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldFN0YXRlQ291bnRyeVZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1RoZSBcXCdTdGF0ZS9Qcm92aW5jZVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgY2xhc3NlcyBmcm9tIGRpcnR5IGZvcm0gaWYgcHJldmlvdXNseSBjaGVja2VkXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgY2xlYW5VcFN0YXRlVmFsaWRhdGlvbjogKGZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0ICRmaWVsZENsYXNzRWxlbWVudCA9ICQoKGBbZGF0YS10eXBlPVwiJHtmaWVsZC5kYXRhKCdmaWVsZFR5cGUnKX1cIl1gKSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMobm9kLmNsYXNzZXMpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoJGZpZWxkQ2xhc3NFbGVtZW50Lmhhc0NsYXNzKG5vZC5jbGFzc2VzW3ZhbHVlXSkpIHtcbiAgICAgICAgICAgICAgICAkZmllbGRDbGFzc0VsZW1lbnQucmVtb3ZlQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCB7IFZhbGlkYXRvcnMsIGluc2VydFN0YXRlSGlkZGVuRmllbGQgfTtcbiIsImltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuY29uc3QgdXJsVXRpbHMgPSB7XG4gICAgZ2V0VXJsOiAoKSA9PiBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofWAsXG5cbiAgICBnb1RvVXJsOiAodXJsKSA9PiB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVybCk7XG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xuICAgIH0sXG5cbiAgICByZXBsYWNlUGFyYW1zOiAodXJsLCBwYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gVXJsLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgIGxldCBwYXJhbTtcblxuICAgICAgICAvLyBMZXQgdGhlIGZvcm1hdHRlciB1c2UgdGhlIHF1ZXJ5IG9iamVjdCB0byBidWlsZCB0aGUgbmV3IHVybFxuICAgICAgICBwYXJzZWQuc2VhcmNoID0gbnVsbDtcblxuICAgICAgICBmb3IgKHBhcmFtIGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucXVlcnlbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBVcmwuZm9ybWF0KHBhcnNlZCk7XG4gICAgfSxcblxuICAgIGJ1aWxkUXVlcnlTdHJpbmc6IChxdWVyeURhdGEpID0+IHtcbiAgICAgICAgbGV0IG91dCA9ICcnO1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBmb3IgKGtleSBpbiBxdWVyeURhdGEpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5RGF0YVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmR4O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobmR4IGluIHF1ZXJ5RGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlEYXRhW2tleV0uaGFzT3duUHJvcGVydHkobmR4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldW25keF19YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dC5zdWJzdHJpbmcoMSk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVybFV0aWxzO1xuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5cbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxDb250ZXh0KSB7XG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmICghJGxpbmsuaXMoJ3Zpc2libGUnKSkge1xuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICAkbGluay5hdHRyKCdocmVmJywgYCR7dXJsQ29udGV4dC5jb21wYXJlfS8ke2NvdW50ZXIuam9pbignLycpfWApO1xuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodXJsQ29udGV4dCkge1xuICAgIGxldCBwcm9kdWN0cztcblxuICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG4gICAgY29uc3QgJGNvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgaWYgKCRjaGVja2VkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBwcm9kdWN0cyA9IF8ubWFwKCRjaGVja2VkLCBlbGVtZW50ID0+IGVsZW1lbnQudmFsdWUpO1xuXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYocHJvZHVjdHMsICRjb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGFyZUNvdW50ZXIgPSBwcm9kdWN0cyB8fCBbXTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ1tkYXRhLXByb2R1Y3QtY29tcGFyZV0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNUb0NvbXBhcmUgPSAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0c1RvQ29tcGFyZS5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xuICAgICAgICAvLyBQYXBhdGhlbWVzIGZpeCAtIEZpbHRlci9QYWdlIGNoYW5nZVxuICAgICAgICBpZiAoY29tcGFyZUNvdW50ZXIubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dXJsQ29udGV4dC5jb21wYXJlfS8ke2NvbXBhcmVDb3VudGVyLmpvaW4oJy8nKX1gO1xuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
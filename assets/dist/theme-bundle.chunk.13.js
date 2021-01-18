(window["webpackJsonpWebpackChiara"] = window["webpackJsonpWebpackChiara"] || []).push([[13],{

/***/ "./assets/js/chiara/card-swatches/Card.js":
/*!************************************************!*\
  !*** ./assets/js/chiara/card-swatches/Card.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es7_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator.js */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.from.js */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string.js */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_12__);













function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var Card = /*#__PURE__*/function () {
  function Card(_ref) {
    var $scope = _ref.$scope,
        $attributesContainer = _ref.$attributesContainer,
        productId = _ref.productId,
        productViewFile = _ref.productViewFile,
        attributesTemplate = _ref.attributesTemplate,
        templateCustomTags = _ref.templateCustomTags,
        addToCartFormSelector = _ref.addToCartFormSelector,
        $cardImage = _ref.$cardImage,
        imageSize = _ref.imageSize,
        inputFinderFunc = _ref.inputFinderFunc,
        swatchesLimit = _ref.swatchesLimit,
        imageReplacerFunc = _ref.imageReplacerFunc,
        displayInStockOnly = _ref.displayInStockOnly,
        _ref$autoInit = _ref.autoInit,
        autoInit = _ref$autoInit === void 0 ? true : _ref$autoInit,
        graphQLNode = _ref.graphQLNode;
    this.$scope = $scope;
    this.productId = productId;
    this.$attributesContainer = $attributesContainer;
    this.productViewFile = productViewFile;
    this.attributesTemplate = attributesTemplate;
    this.templateCustomTags = templateCustomTags;
    this.addToCartFormSelector = addToCartFormSelector;
    this.$cardImage = $cardImage;
    this.imageSize = imageSize;
    this.inputFinderFunc = inputFinderFunc;
    this.swatchesLimit = swatchesLimit;
    this.imageReplacerFunc = imageReplacerFunc;
    this.displayInStockOnly = displayInStockOnly;
    this.autoInit = autoInit;
    this.graphQLNode = graphQLNode;

    if (this.autoInit) {
      this.init();
    }
  }

  var _proto = Card.prototype;

  _proto.init = function init() {
    if (this.displayInStockOnly) {
      this.requestInStockAttributes();
    } else {
      if (this.graphQLNode) {
        this.buildProductOptions();
      } else {
        this.requestProductOptions();
      }
    }
  };

  _proto.requestInStockAttributes = function requestInStockAttributes() {
    var _this = this;

    $.ajax({
      url: "/remote/v1/product-attributes/" + this.productId,
      method: 'POST',
      data: {
        action: 'add',
        product_id: this.productId
      },
      headers: {
        'stencil-config': '{}',
        'stencil-options': '{}',
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        var attributesData = resp.data || {};

        if (typeof attributesData.in_stock_attributes === 'object' || attributesData.instock) {
          if (_this.graphQLNode) {
            _this.buildProductOptions(attributesData);
          } else {
            _this.requestProductOptions(attributesData);
          }
        }
      }
    });
  };

  _proto.requestProductOptions = function requestProductOptions(attributesData) {
    var _this2 = this;

    $.ajax({
      url: "/products.php?productId=" + this.productId,
      method: 'GET',
      headers: {
        'stencil-config': '{}',
        'stencil-options': "{\"render_with\":\"" + this.productViewFile + "\"}",
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        _this2.buildProductOptions(attributesData, resp);
      }
    });
  };

  _proto.buildProductOptions = function buildProductOptions(attributesData, resp) {
    var _this3 = this;

    if (attributesData === void 0) {
      attributesData = {};
    }

    var data = {
      attributes: []
    };

    if (this.graphQLNode) {
      // load attributes from graphQL
      data.attributes = this.graphQLNode.productOptions.edges.reduce(function (_options, _ref2) {
        var optionNode = _ref2.node;

        if (optionNode.values) {
          var values = optionNode.values.edges.reduce(function (_values, _ref3) {
            var valueNode = _ref3.node;

            if (typeof attributesData.in_stock_attributes !== 'object' || attributesData.in_stock_attributes.indexOf(valueNode.entityId) > -1) {
              if (valueNode.imageUrl || valueNode.hexColors) {
                _values.push({
                  content: valueNode.imageUrl ? "<span class=\"form-option-variant form-option-variant--pattern\" title=\"" + valueNode.label + "\" style=\"background-image: url('" + valueNode.imageUrl + "');\"></span>" : valueNode.hexColors.map(function (color) {
                    return "<span class='form-option-variant form-option-variant--color' title=\"" + valueNode.label + "\" style=\"background-color: " + color + "\"></span>";
                  }).join(''),
                  label: valueNode.label,
                  attributeId: optionNode.entityId,
                  attributeValue: valueNode.entityId
                });
              }
            }

            return _values;
          }, []);

          if (values.length > 0) {
            _options.push(values);
          }
        }

        return _options;
      }, []);
    } else {
      // load attributes from AJAX request
      $(resp).find('[data-product-attribute="swatch"]').each(function (i, el) {
        var $swatches = $(el);
        var swatches = [];
        $swatches.find('[data-product-attribute-value]').each(function (i, labelEl) {
          var $label = $(labelEl);
          var $input = _this3.inputFinderFunc ? _this3.inputFinderFunc($swatches, $label) : $swatches.find("[id=\"" + $label.attr('for') + "\"]");
          var attributeValue = Number($input.attr('value'));
          var attributeId = Number($input.attr('name').replace(/attribute\[([0-9]+)\]/, '$1'));

          if (typeof attributesData.in_stock_attributes !== 'object' || attributesData.in_stock_attributes.indexOf(attributeValue) > -1) {
            swatches.push({
              content: $label.html(),
              label: $input.data('productAttributeLabel'),
              attributeId: attributeId,
              attributeValue: attributeValue
            });
          }
        });

        if (swatches.length > 0) {
          data.attributes.push(swatches);
        }
      });
    }

    if (data.attributes.length === 0) {
      return;
    }

    var html = mustache__WEBPACK_IMPORTED_MODULE_12___default.a.render(this.attributesTemplate, data, null, this.templateCustomTags);
    this.$attributesContainer.append(html);
    var $form;

    if (this.graphQLNode) {
      // build Form from graphQL
      $form = $('<form class="productSwatches-hiddenForm"></form>').hide();
      $form.append("<input type=\"hidden\" name=\"action\" value=\"add\">");
      $form.append("<input type=\"hidden\" name=\"product_id\" value=\"" + this.productId + "\">");
      $form.append("<input type=\"hidden\" name=\"qty[]\" value=\"" + (this.graphQLNode.minPurchaseQuantity || 1) + "\">");
      this.graphQLNode.productOptions.edges.forEach(function (_ref4) {
        var optionNode = _ref4.node;
        var defaultValue = '';

        if (optionNode.values) {
          defaultValue = optionNode.values.edges.reduce(function (_defaultValue, _ref5) {
            var valueNode = _ref5.node;
            return valueNode.isDefault ? valueNode.entityId : _defaultValue;
          }, '');

          if (!defaultValue && attributesData && attributesData.in_stock_attributes) {
            defaultValue = optionNode.values.edges.reduce(function (_defaultValue, _ref6) {
              var valueNode = _ref6.node;
              return _defaultValue || (attributesData.in_stock_attributes.indexOf(valueNode.entityId) > -1 ? valueNode.entityId : '');
            }, '');
          }
        } else if (optionNode.checkedByDefault) {
          defaultValue = 1;
        }

        $form.append("<input type=\"hidden\" name=\"attribute[" + optionNode.entityId + "]\" value=\"" + defaultValue + "\">");
      });
    } else {
      // build Form from AJAX request
      var _$form = $('<div></div>').append(resp).find(this.addToCartFormSelector).addClass('productSwatches-hiddenForm').hide(); // Remove all 'id' to avoid duplicated label.for in quick-view


      _$form.find('[id]').prop('id', null);
    }

    this.$attributesContainer.append($form);
    this.$attributesContainer.on('click', '[data-attribute-id]', function (event) {
      event.preventDefault();
      var $a = $(event.currentTarget);
      var id = $a.data('attributeId');
      var value = $a.data('attributeValue');

      _this3.$attributesContainer.find("[data-attribute-id=" + id + "]").removeClass('is-active').find('input').prop('checked', false);

      $a.addClass('is-active').find('input').prop('checked', true);
      $form.find("[name=\"attribute[" + id + "]\"]").val([value]);

      _this3.requestAttributesChange($form);
    });

    if (this.swatchesLimit) {
      this.$attributesContainer.find('[data-more]').each(function (i, moreEl) {
        var $more = $(moreEl);
        var $list = $more.closest('[data-swatches]');
        var $less = $list.find('[data-less]');
        var $items = $list.find('[data-attribute-id]');

        if ($items.length > _this3.swatchesLimit) {
          var $hiddenItems = $items.filter(function (j) {
            return j >= _this3.swatchesLimit;
          }).hide();
          $more.on('click', function () {
            $hiddenItems.show();
            $more.hide();
            $less.show();
          });
          $less.on('click', function () {
            $hiddenItems.hide();
            $less.hide();
            $more.show();
          });
        } else {
          $more.hide();
        }

        $less.hide();
      });
    } else {
      this.$attributesContainer.find('[data-more], [data-less]').hide();
    }
  };

  _proto.requestAttributesChange = function requestAttributesChange($form) {
    var _this4 = this;

    if (!window.FormData) {
      return;
    }

    var data = this.filterEmptyFilesFromForm(new FormData($form.get(0)));
    $.ajax({
      url: "/remote/v1/product-attributes/" + this.productId,
      method: 'POST',
      contentType: false,
      processData: false,
      data: data,
      headers: {
        'stencil-config': '{}',
        'stencil-options': '{}',
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        var _resp$data = resp.data,
            image = _resp$data.image,
            price = _resp$data.price;

        if (_this4.imageReplacerFunc) {
          var img = image ? image.data.replace('{:size}', _this4.imageSize) : null;

          _this4.imageReplacerFunc(_this4.$cardImage, img);
        } else {
          if (image) {
            var _img = image.data.replace('{:size}', _this4.imageSize);

            _this4.$cardImage.data('originalSrc', _this4.$cardImage.attr('src')).data('originalSrcset', _this4.$cardImage.attr('srcset')).attr('src', _img).attr('srcset', '').attr('data-srcset', '').addClass('productSwatches-image-optionChanged');
          } else if (_this4.$cardImage.data('originalSrc')) {
            _this4.$cardImage.attr('src', _this4.$cardImage.data('originalSrc')).attr('srcset', _this4.$cardImage.data('originalSrcset')).attr('data-srcset', _this4.$cardImage.data('originalSrcset')).data('originalSrc', null).data('originalSrcset', null).removeClass('productSwatches-image-optionChanged');
          }
        }

        if (price) {
          var viewModel = _this4.getViewModel(_this4.$scope);

          _this4.updatePriceView(viewModel, price);
        }
      }
    });
  }
  /**
   * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
   * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
   * @param formData: FormData object
   * @returns FormData object
   */
  ;

  _proto.filterEmptyFilesFromForm = function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
            key = _step$value[0],
            val = _step$value[1];

        if (val instanceof File && !val.name && !val.size) {
          formData.delete(key);
        }
      }
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }

    return formData;
  }
  /**
   * Since $productView can be dynamically inserted using render_with,
   * We have to retrieve the respective elements
   *
   * @param $scope
   */
  ;

  _proto.getViewModel = function getViewModel($scope) {
    return {
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      }
    };
  }
  /**
   * Hide the pricing elements that will show up only when the price exists in API
   * @param viewModel
   */
  ;

  _proto.clearPricingNotFound = function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }
  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */
  ;

  _proto.updatePriceView = function updatePriceView(viewModel, price) {
    this.clearPricingNotFound(viewModel);

    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);
    }

    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
    }

    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }

    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }

    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }

    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }

    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  };

  return Card;
}();

/* harmony default export */ __webpack_exports__["default"] = (Card);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/chiara/card-swatches/ProductSwatches.js":
/*!***********************************************************!*\
  !*** ./assets/js/chiara/card-swatches/ProductSwatches.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! in-view */ "./node_modules/in-view/dist/in-view.min.js");
/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(in_view__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Card */ "./assets/js/chiara/card-swatches/Card.js");







var ProductSwatches = /*#__PURE__*/function () {
  function ProductSwatches(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$cardSelector = _ref.cardSelector,
        cardSelector = _ref$cardSelector === void 0 ? '.product .card, .productCarousel-slide .card' : _ref$cardSelector,
        _ref$productIdSelecto = _ref.productIdSelector,
        productIdSelector = _ref$productIdSelecto === void 0 ? '[data-product-id]' : _ref$productIdSelecto,
        _ref$findProductIdByI = _ref.findProductIdByImg,
        findProductIdByImg = _ref$findProductIdByI === void 0 ? false : _ref$findProductIdByI,
        _ref$swatchesContaine = _ref.swatchesContainerSelector,
        swatchesContainerSelector = _ref$swatchesContaine === void 0 ? '.card-text--colorswatches' : _ref$swatchesContaine,
        _ref$cardImageSelecto = _ref.cardImageSelector,
        cardImageSelector = _ref$cardImageSelecto === void 0 ? '.card-image' : _ref$cardImageSelecto,
        _ref$addToCartFormSel = _ref.addToCartFormSelector,
        addToCartFormSelector = _ref$addToCartFormSel === void 0 ? 'form[data-cart-item-add]' : _ref$addToCartFormSel,
        _ref$productViewFile = _ref.productViewFile,
        productViewFile = _ref$productViewFile === void 0 ? 'products/product-view' : _ref$productViewFile,
        _ref$attributesTempla = _ref.attributesTemplate,
        attributesTemplate = _ref$attributesTempla === void 0 ? "\n            <div class=\"productSwatches-attributes\">\n                {{#attributes}}\n                    <div class=\"productSwatches-swatches\" data-swatches>\n                        {{#.}}\n                            <a href=\"#\" class=\"productSwatches-swatches-item\" title=\"{{label}}\"\n                                data-attribute-id=\"{{attributeId}}\"\n                                data-attribute-value=\"{{attributeValue}}\">{{&content}}</a>\n                        {{/.}}\n                        <button type=\"button\" class=\"productSwatches-swatches-more\" data-more>+ More</button>\n                        <button type=\"button\" class=\"productSwatches-swatches-less\" data-less>- Less</button>\n                    </div>\n                {{/attributes}}\n            </div>\n        " : _ref$attributesTempla,
        _ref$templateCustomTa = _ref.templateCustomTags,
        templateCustomTags = _ref$templateCustomTa === void 0 ? null : _ref$templateCustomTa,
        _ref$imageSize = _ref.imageSize,
        imageSize = _ref$imageSize === void 0 ? '590x590' : _ref$imageSize,
        _ref$inputFinderFunc = _ref.inputFinderFunc,
        inputFinderFunc = _ref$inputFinderFunc === void 0 ? null : _ref$inputFinderFunc,
        _ref$swatchesLimit = _ref.swatchesLimit,
        swatchesLimit = _ref$swatchesLimit === void 0 ? 0 : _ref$swatchesLimit,
        _ref$imageReplacerFun = _ref.imageReplacerFunc,
        imageReplacerFunc = _ref$imageReplacerFun === void 0 ? null : _ref$imageReplacerFun,
        _ref$displayInStockOn = _ref.displayInStockOnly,
        displayInStockOnly = _ref$displayInStockOn === void 0 ? false : _ref$displayInStockOn,
        _ref$graphQLToken = _ref.graphQLToken,
        graphQLToken = _ref$graphQLToken === void 0 ? '' : _ref$graphQLToken;

    this.config = {
      cardSelector: cardSelector,
      productIdSelector: productIdSelector,
      findProductIdByImg: findProductIdByImg,
      swatchesContainerSelector: swatchesContainerSelector,
      cardImageSelector: cardImageSelector,
      addToCartFormSelector: addToCartFormSelector,
      productViewFile: productViewFile,
      attributesTemplate: attributesTemplate,
      templateCustomTags: templateCustomTags,
      imageSize: imageSize,
      inputFinderFunc: inputFinderFunc,
      swatchesLimit: swatchesLimit,
      imageReplacerFunc: imageReplacerFunc,
      displayInStockOnly: displayInStockOnly,
      graphQLToken: graphQLToken
    };
    this.onWindowScroll = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(this.onWindowScroll.bind(this, null), 200);
    this.bindEvents();
  }

  var _proto = ProductSwatches.prototype;

  _proto.bindEvents = function bindEvents() {
    var _this = this;

    $(window).on('scroll resize load', this.onWindowScroll);
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    if (MutationObserver) {
      this.mutationObserver = new MutationObserver(function (mutations) {
        var $newElements = mutations.reduce(function (accumulate, mutation) {
          return [].concat(accumulate, mutation.addedNodes);
        }, []);

        _this.onWindowScroll($newElements);
      });
      this.mutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    }
  };

  _proto.unbindEvents = function unbindEvents() {
    $(window).off('scroll resize load', this.onWindowScroll);

    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = null;
    }
  };

  _proto.onWindowScroll = function onWindowScroll($body) {
    var _this2 = this;

    if ($body === void 0) {
      $body = null;
    }

    var cards = [];
    $(this.config.cardSelector, $body).each(function (i, el) {
      var $scope = $(el);

      if ($scope.data('productSwatchesCard') || !in_view__WEBPACK_IMPORTED_MODULE_4___default.a.is(el)) {
        return;
      }

      var productId = $scope.find(_this2.config.productIdSelector).data('productId');

      if (!productId) {
        // try to find product ID by img src
        if (!_this2.config.findProductIdByImg) {
          return;
        }

        productId = $scope.find('img').get().reduce(function (id, img) {
          if (id) {
            return id;
          }

          var m = String(img.src).match(/products\/([0-9]+)\//);
          return m ? Number(m[1]) : id;
        }, null);

        if (!productId) {
          return;
        }
      }

      var $attributesContainer = $scope.find(_this2.config.swatchesContainerSelector);

      if ($attributesContainer.length === 0) {
        return;
      }

      var _this2$config = _this2.config,
          productViewFile = _this2$config.productViewFile,
          attributesTemplate = _this2$config.attributesTemplate,
          templateCustomTags = _this2$config.templateCustomTags,
          addToCartFormSelector = _this2$config.addToCartFormSelector,
          imageSize = _this2$config.imageSize,
          inputFinderFunc = _this2$config.inputFinderFunc,
          swatchesLimit = _this2$config.swatchesLimit,
          imageReplacerFunc = _this2$config.imageReplacerFunc,
          displayInStockOnly = _this2$config.displayInStockOnly,
          graphQLToken = _this2$config.graphQLToken;
      var $cardImage = $scope.find(_this2.config.cardImageSelector).first();
      var card = new _Card__WEBPACK_IMPORTED_MODULE_5__["default"]({
        $scope: $scope,
        $attributesContainer: $attributesContainer,
        productId: productId,
        productViewFile: productViewFile,
        attributesTemplate: attributesTemplate,
        templateCustomTags: templateCustomTags,
        addToCartFormSelector: addToCartFormSelector,
        $cardImage: $cardImage,
        imageSize: imageSize,
        inputFinderFunc: inputFinderFunc,
        swatchesLimit: swatchesLimit,
        imageReplacerFunc: imageReplacerFunc,
        displayInStockOnly: displayInStockOnly,
        autoInit: !graphQLToken
      });
      cards.push(card);
      $scope.data('productSwatchesCard', card);
      $scope.addClass('productSwatchesLoaded');
    });

    if (this.config.graphQLToken && cards.length > 0) {
      var ids = cards.map(function (card) {
        return card.productId;
      });
      $.ajax({
        url: '/graphql',
        method: 'POST',
        data: JSON.stringify({
          query: "\n                        query {\n                            site {\n                                products (entityIds: " + JSON.stringify(ids) + ") {\n                                    edges {\n                                        node {\n                                            entityId\n                                            name\n                                            minPurchaseQuantity\n                                            productOptions {\n                                                edges {\n                                                    node {\n                                                        entityId\n                                                        displayName\n                                                        ... on CheckboxOption {\n                                                            checkedByDefault\n                                                        }\n                                                        ... on MultipleChoiceOption {\n                                                            values {\n                                                                edges {\n                                                                    node {\n                                                                        entityId\n                                                                        isDefault\n                                                                        ... on SwatchOptionValue {\n                                                                            label\n                                                                            hexColors\n                                                                            imageUrl(width: 100)\n                                                                        }\n                                                                    }\n                                                                }\n                                                            }\n                                                        }\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    "
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + this.config.graphQLToken
        },
        xhrFields: {
          withCredentials: true
        },
        success: function success(resp) {
          resp.data.site.products.edges.forEach(function (edge) {
            cards.filter(function (card) {
              return card.productId == edge.node.entityId;
            }).forEach(function (card) {
              card.graphQLNode = edge.node;
              card.init();
            });
          });
        }
      });
    }
  };

  return ProductSwatches;
}();

/* harmony default export */ __webpack_exports__["default"] = (ProductSwatches);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vYXNzZXRzL2pzL2NoaWFyYS9jYXJkLXN3YXRjaGVzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vV2VicGFja0NoaWFyYS8uL2Fzc2V0cy9qcy9jaGlhcmEvY2FyZC1zd2F0Y2hlcy9Qcm9kdWN0U3dhdGNoZXMuanMiXSwibmFtZXMiOlsiQ2FyZCIsIiRzY29wZSIsIiRhdHRyaWJ1dGVzQ29udGFpbmVyIiwicHJvZHVjdElkIiwicHJvZHVjdFZpZXdGaWxlIiwiYXR0cmlidXRlc1RlbXBsYXRlIiwidGVtcGxhdGVDdXN0b21UYWdzIiwiYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yIiwiJGNhcmRJbWFnZSIsImltYWdlU2l6ZSIsImlucHV0RmluZGVyRnVuYyIsInN3YXRjaGVzTGltaXQiLCJpbWFnZVJlcGxhY2VyRnVuYyIsImRpc3BsYXlJblN0b2NrT25seSIsImF1dG9Jbml0IiwiZ3JhcGhRTE5vZGUiLCJpbml0IiwicmVxdWVzdEluU3RvY2tBdHRyaWJ1dGVzIiwiYnVpbGRQcm9kdWN0T3B0aW9ucyIsInJlcXVlc3RQcm9kdWN0T3B0aW9ucyIsIiQiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsImFjdGlvbiIsInByb2R1Y3RfaWQiLCJoZWFkZXJzIiwid2luZG93IiwiQkNEYXRhIiwiY3NyZl90b2tlbiIsInhockZpZWxkcyIsIndpdGhDcmVkZW50aWFscyIsInN1Y2Nlc3MiLCJyZXNwIiwiYXR0cmlidXRlc0RhdGEiLCJpbl9zdG9ja19hdHRyaWJ1dGVzIiwiaW5zdG9jayIsImF0dHJpYnV0ZXMiLCJwcm9kdWN0T3B0aW9ucyIsImVkZ2VzIiwicmVkdWNlIiwiX29wdGlvbnMiLCJvcHRpb25Ob2RlIiwibm9kZSIsInZhbHVlcyIsIl92YWx1ZXMiLCJ2YWx1ZU5vZGUiLCJpbmRleE9mIiwiZW50aXR5SWQiLCJpbWFnZVVybCIsImhleENvbG9ycyIsInB1c2giLCJjb250ZW50IiwibGFiZWwiLCJtYXAiLCJjb2xvciIsImpvaW4iLCJhdHRyaWJ1dGVJZCIsImF0dHJpYnV0ZVZhbHVlIiwibGVuZ3RoIiwiZmluZCIsImVhY2giLCJpIiwiZWwiLCIkc3dhdGNoZXMiLCJzd2F0Y2hlcyIsImxhYmVsRWwiLCIkbGFiZWwiLCIkaW5wdXQiLCJhdHRyIiwiTnVtYmVyIiwicmVwbGFjZSIsImh0bWwiLCJNdXN0YWNoZSIsInJlbmRlciIsImFwcGVuZCIsIiRmb3JtIiwiaGlkZSIsIm1pblB1cmNoYXNlUXVhbnRpdHkiLCJmb3JFYWNoIiwiZGVmYXVsdFZhbHVlIiwiX2RlZmF1bHRWYWx1ZSIsImlzRGVmYXVsdCIsImNoZWNrZWRCeURlZmF1bHQiLCJhZGRDbGFzcyIsInByb3AiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkYSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInZhbHVlIiwicmVtb3ZlQ2xhc3MiLCJ2YWwiLCJyZXF1ZXN0QXR0cmlidXRlc0NoYW5nZSIsIm1vcmVFbCIsIiRtb3JlIiwiJGxpc3QiLCJjbG9zZXN0IiwiJGxlc3MiLCIkaXRlbXMiLCIkaGlkZGVuSXRlbXMiLCJmaWx0ZXIiLCJqIiwic2hvdyIsIkZvcm1EYXRhIiwiZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtIiwiZ2V0IiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsImltYWdlIiwicHJpY2UiLCJpbWciLCJ2aWV3TW9kZWwiLCJnZXRWaWV3TW9kZWwiLCJ1cGRhdGVQcmljZVZpZXciLCJmb3JtRGF0YSIsImtleSIsIkZpbGUiLCJuYW1lIiwic2l6ZSIsImRlbGV0ZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCIkcHJpY2VXaXRoVGF4IiwiJHByaWNlV2l0aG91dFRheCIsInJycFdpdGhUYXgiLCIkZGl2IiwiJHNwYW4iLCJycnBXaXRob3V0VGF4Iiwibm9uU2FsZVdpdGhUYXgiLCJub25TYWxlV2l0aG91dFRheCIsInByaWNlU2F2ZWQiLCJwcmljZU5vd0xhYmVsIiwicHJpY2VMYWJlbCIsImNsZWFyUHJpY2luZ05vdEZvdW5kIiwid2l0aF90YXgiLCJmb3JtYXR0ZWQiLCJ3aXRob3V0X3RheCIsInJycF93aXRoX3RheCIsInJycF93aXRob3V0X3RheCIsInNhdmVkIiwibm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgiLCJub25fc2FsZV9wcmljZV93aXRob3V0X3RheCIsIlByb2R1Y3RTd2F0Y2hlcyIsImNhcmRTZWxlY3RvciIsInByb2R1Y3RJZFNlbGVjdG9yIiwiZmluZFByb2R1Y3RJZEJ5SW1nIiwic3dhdGNoZXNDb250YWluZXJTZWxlY3RvciIsImNhcmRJbWFnZVNlbGVjdG9yIiwiZ3JhcGhRTFRva2VuIiwiY29uZmlnIiwib25XaW5kb3dTY3JvbGwiLCJiaW5kIiwiYmluZEV2ZW50cyIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIiRuZXdFbGVtZW50cyIsImFjY3VtdWxhdGUiLCJtdXRhdGlvbiIsImFkZGVkTm9kZXMiLCJvYnNlcnZlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwidW5iaW5kRXZlbnRzIiwib2ZmIiwiZGlzY29ubmVjdCIsIiRib2R5IiwiY2FyZHMiLCJpblZpZXciLCJpcyIsIm0iLCJTdHJpbmciLCJzcmMiLCJtYXRjaCIsImZpcnN0IiwiY2FyZCIsImlkcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInNpdGUiLCJwcm9kdWN0cyIsImVkZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLEk7QUFDRixzQkFnQkc7QUFBQSxRQWZDQyxNQWVELFFBZkNBLE1BZUQ7QUFBQSxRQWRDQyxvQkFjRCxRQWRDQSxvQkFjRDtBQUFBLFFBYkNDLFNBYUQsUUFiQ0EsU0FhRDtBQUFBLFFBWkNDLGVBWUQsUUFaQ0EsZUFZRDtBQUFBLFFBWENDLGtCQVdELFFBWENBLGtCQVdE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TCxHQUFtQitLLElBQUksQ0FBQ2xKLElBQXhCO0FBQ0EySSxrQkFBSSxDQUFDdkssSUFBTDtBQUNILGFBSEQ7QUFJSCxXQUxEO0FBTUg7QUE1REUsT0FBUDtBQThESDtBQUNKLEc7Ozs7O0FBR1VtSSw4RUFBZixFIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5cbmNsYXNzIENhcmQge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgJHNjb3BlLFxuICAgICAgICAkYXR0cmlidXRlc0NvbnRhaW5lcixcbiAgICAgICAgcHJvZHVjdElkLFxuICAgICAgICBwcm9kdWN0Vmlld0ZpbGUsXG4gICAgICAgIGF0dHJpYnV0ZXNUZW1wbGF0ZSxcbiAgICAgICAgdGVtcGxhdGVDdXN0b21UYWdzLFxuICAgICAgICBhZGRUb0NhcnRGb3JtU2VsZWN0b3IsXG4gICAgICAgICRjYXJkSW1hZ2UsXG4gICAgICAgIGltYWdlU2l6ZSxcbiAgICAgICAgaW5wdXRGaW5kZXJGdW5jLFxuICAgICAgICBzd2F0Y2hlc0xpbWl0LFxuICAgICAgICBpbWFnZVJlcGxhY2VyRnVuYyxcbiAgICAgICAgZGlzcGxheUluU3RvY2tPbmx5LFxuICAgICAgICBhdXRvSW5pdCA9IHRydWUsXG4gICAgICAgIGdyYXBoUUxOb2RlLFxuICAgIH0pIHtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gcHJvZHVjdElkO1xuICAgICAgICB0aGlzLiRhdHRyaWJ1dGVzQ29udGFpbmVyID0gJGF0dHJpYnV0ZXNDb250YWluZXI7XG4gICAgICAgIHRoaXMucHJvZHVjdFZpZXdGaWxlID0gcHJvZHVjdFZpZXdGaWxlO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNUZW1wbGF0ZSA9IGF0dHJpYnV0ZXNUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MgPSB0ZW1wbGF0ZUN1c3RvbVRhZ3M7XG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yID0gYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yO1xuICAgICAgICB0aGlzLiRjYXJkSW1hZ2UgPSAkY2FyZEltYWdlO1xuICAgICAgICB0aGlzLmltYWdlU2l6ZSA9IGltYWdlU2l6ZTtcbiAgICAgICAgdGhpcy5pbnB1dEZpbmRlckZ1bmMgPSBpbnB1dEZpbmRlckZ1bmM7XG4gICAgICAgIHRoaXMuc3dhdGNoZXNMaW1pdCA9IHN3YXRjaGVzTGltaXQ7XG4gICAgICAgIHRoaXMuaW1hZ2VSZXBsYWNlckZ1bmMgPSBpbWFnZVJlcGxhY2VyRnVuYztcbiAgICAgICAgdGhpcy5kaXNwbGF5SW5TdG9ja09ubHkgPSBkaXNwbGF5SW5TdG9ja09ubHk7XG4gICAgICAgIHRoaXMuYXV0b0luaXQgPSBhdXRvSW5pdDtcbiAgICAgICAgdGhpcy5ncmFwaFFMTm9kZSA9IGdyYXBoUUxOb2RlO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dG9Jbml0KSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXlJblN0b2NrT25seSkge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SW5TdG9ja0F0dHJpYnV0ZXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyYXBoUUxOb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFByb2R1Y3RPcHRpb25zKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFByb2R1Y3RPcHRpb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0SW5TdG9ja0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IGAvcmVtb3RlL3YxL3Byb2R1Y3QtYXR0cmlidXRlcy8ke3RoaXMucHJvZHVjdElkfWAsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhZGQnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RfaWQ6IHRoaXMucHJvZHVjdElkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnc3RlbmNpbC1jb25maWcnOiAne30nLFxuICAgICAgICAgICAgICAgICdzdGVuY2lsLW9wdGlvbnMnOiAne30nLFxuICAgICAgICAgICAgICAgICd4LXhzcmYtdG9rZW4nOiB3aW5kb3cuQkNEYXRhICYmIHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA/IHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhockZpZWxkczoge1xuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcC5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgfHwgYXR0cmlidXRlc0RhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmFwaFFMTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZFByb2R1Y3RPcHRpb25zKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFByb2R1Y3RPcHRpb25zKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlcXVlc3RQcm9kdWN0T3B0aW9ucyhhdHRyaWJ1dGVzRGF0YSkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBgL3Byb2R1Y3RzLnBocD9wcm9kdWN0SWQ9JHt0aGlzLnByb2R1Y3RJZH1gLFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnc3RlbmNpbC1jb25maWcnOiAne30nLFxuICAgICAgICAgICAgICAgICdzdGVuY2lsLW9wdGlvbnMnOiBge1wicmVuZGVyX3dpdGhcIjpcIiR7dGhpcy5wcm9kdWN0Vmlld0ZpbGV9XCJ9YCxcbiAgICAgICAgICAgICAgICAneC14c3JmLXRva2VuJzogd2luZG93LkJDRGF0YSAmJiB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gPyB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gOiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUHJvZHVjdE9wdGlvbnMoYXR0cmlidXRlc0RhdGEsIHJlc3ApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYnVpbGRQcm9kdWN0T3B0aW9ucyhhdHRyaWJ1dGVzRGF0YSA9IHt9LCByZXNwKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXSxcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGlmICh0aGlzLmdyYXBoUUxOb2RlKSB7XG4gICAgICAgICAgICAvLyBsb2FkIGF0dHJpYnV0ZXMgZnJvbSBncmFwaFFMXG4gICAgICAgICAgICBkYXRhLmF0dHJpYnV0ZXMgPSB0aGlzLmdyYXBoUUxOb2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzLnJlZHVjZSgoX29wdGlvbnMsIHsgbm9kZTogb3B0aW9uTm9kZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbk5vZGUudmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IG9wdGlvbk5vZGUudmFsdWVzLmVkZ2VzLnJlZHVjZSgoX3ZhbHVlcywgeyBub2RlOiB2YWx1ZU5vZGUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzRGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzICE9PSAnb2JqZWN0JyB8fCBhdHRyaWJ1dGVzRGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzLmluZGV4T2YodmFsdWVOb2RlLmVudGl0eUlkKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlTm9kZS5pbWFnZVVybCB8fCB2YWx1ZU5vZGUuaGV4Q29sb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92YWx1ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB2YWx1ZU5vZGUuaW1hZ2VVcmwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgPHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm5cIiB0aXRsZT1cIiR7dmFsdWVOb2RlLmxhYmVsfVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3ZhbHVlTm9kZS5pbWFnZVVybH0nKTtcIj48L3NwYW4+YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWVOb2RlLmhleENvbG9ycy5tYXAoY29sb3IgPT4gYDxzcGFuIGNsYXNzPSdmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yJyB0aXRsZT1cIiR7dmFsdWVOb2RlLmxhYmVsfVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn1cIj48L3NwYW4+YCkuam9pbignJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogdmFsdWVOb2RlLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlSWQ6IG9wdGlvbk5vZGUuZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZTogdmFsdWVOb2RlLmVudGl0eUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZhbHVlcztcbiAgICAgICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9vcHRpb25zLnB1c2godmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX29wdGlvbnM7XG4gICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBsb2FkIGF0dHJpYnV0ZXMgZnJvbSBBSkFYIHJlcXVlc3RcbiAgICAgICAgICAgICQocmVzcCkuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9XCJzd2F0Y2hcIl0nKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRzd2F0Y2hlcyA9ICQoZWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN3YXRjaGVzID0gW107XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJHN3YXRjaGVzLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScpLmVhY2goKGksIGxhYmVsRWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGxhYmVsID0gJChsYWJlbEVsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gdGhpcy5pbnB1dEZpbmRlckZ1bmMgPyB0aGlzLmlucHV0RmluZGVyRnVuYygkc3dhdGNoZXMsICRsYWJlbCkgOiAkc3dhdGNoZXMuZmluZChgW2lkPVwiJHskbGFiZWwuYXR0cignZm9yJyl9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gTnVtYmVyKCRpbnB1dC5hdHRyKCd2YWx1ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlSWQgPSBOdW1iZXIoJGlucHV0LmF0dHIoJ25hbWUnKS5yZXBsYWNlKC9hdHRyaWJ1dGVcXFsoWzAtOV0rKVxcXS8sICckMScpKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcyAhPT0gJ29iamVjdCcgfHwgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZVZhbHVlKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2F0Y2hlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAkbGFiZWwuaHRtbCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAkaW5wdXQuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZUxhYmVsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN3YXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hdHRyaWJ1dGVzLnB1c2goc3dhdGNoZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuYXR0cmlidXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGh0bWwgPSBNdXN0YWNoZS5yZW5kZXIodGhpcy5hdHRyaWJ1dGVzVGVtcGxhdGUsIGRhdGEsIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKTtcbiAgICAgICAgdGhpcy4kYXR0cmlidXRlc0NvbnRhaW5lci5hcHBlbmQoaHRtbCk7XG5cbiAgICAgICAgbGV0ICRmb3JtO1xuXG4gICAgICAgIGlmICh0aGlzLmdyYXBoUUxOb2RlKSB7XG4gICAgICAgICAgICAvLyBidWlsZCBGb3JtIGZyb20gZ3JhcGhRTFxuICAgICAgICAgICAgJGZvcm0gPSAkKCc8Zm9ybSBjbGFzcz1cInByb2R1Y3RTd2F0Y2hlcy1oaWRkZW5Gb3JtXCI+PC9mb3JtPicpLmhpZGUoKTtcbiAgICAgICAgICAgICRmb3JtLmFwcGVuZChgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYWN0aW9uXCIgdmFsdWU9XCJhZGRcIj5gKTtcbiAgICAgICAgICAgICRmb3JtLmFwcGVuZChgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicHJvZHVjdF9pZFwiIHZhbHVlPVwiJHt0aGlzLnByb2R1Y3RJZH1cIj5gKTtcbiAgICAgICAgICAgICRmb3JtLmFwcGVuZChgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicXR5W11cIiB2YWx1ZT1cIiR7dGhpcy5ncmFwaFFMTm9kZS5taW5QdXJjaGFzZVF1YW50aXR5IHx8IDF9XCI+YCk7XG4gICAgICAgICAgICB0aGlzLmdyYXBoUUxOb2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzLmZvckVhY2goKHsgbm9kZTogb3B0aW9uTm9kZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25Ob2RlLnZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBvcHRpb25Ob2RlLnZhbHVlcy5lZGdlcy5yZWR1Y2UoKF9kZWZhdWx0VmFsdWUsIHsgbm9kZTogdmFsdWVOb2RlIH0pID0+IHZhbHVlTm9kZS5pc0RlZmF1bHQgPyB2YWx1ZU5vZGUuZW50aXR5SWQgOiBfZGVmYXVsdFZhbHVlLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZGVmYXVsdFZhbHVlICYmIGF0dHJpYnV0ZXNEYXRhICYmIGF0dHJpYnV0ZXNEYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IG9wdGlvbk5vZGUudmFsdWVzLmVkZ2VzLnJlZHVjZSgoX2RlZmF1bHRWYWx1ZSwgeyBub2RlOiB2YWx1ZU5vZGUgfSkgPT4gX2RlZmF1bHRWYWx1ZSB8fCAoYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcy5pbmRleE9mKHZhbHVlTm9kZS5lbnRpdHlJZCkgPiAtMSA/IHZhbHVlTm9kZS5lbnRpdHlJZCA6ICcnKSwgJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25Ob2RlLmNoZWNrZWRCeURlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJGZvcm0uYXBwZW5kKGA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25Ob2RlLmVudGl0eUlkfV1cIiB2YWx1ZT1cIiR7ZGVmYXVsdFZhbHVlfVwiPmApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBidWlsZCBGb3JtIGZyb20gQUpBWCByZXF1ZXN0XG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9ICQoJzxkaXY+PC9kaXY+JykuYXBwZW5kKHJlc3ApLmZpbmQodGhpcy5hZGRUb0NhcnRGb3JtU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdwcm9kdWN0U3dhdGNoZXMtaGlkZGVuRm9ybScpXG4gICAgICAgICAgICAgICAgLmhpZGUoKTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGFsbCAnaWQnIHRvIGF2b2lkIGR1cGxpY2F0ZWQgbGFiZWwuZm9yIGluIHF1aWNrLXZpZXdcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ1tpZF0nKS5wcm9wKCdpZCcsIG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kYXR0cmlidXRlc0NvbnRhaW5lci5hcHBlbmQoJGZvcm0pO1xuXG4gICAgICAgIHRoaXMuJGF0dHJpYnV0ZXNDb250YWluZXIub24oJ2NsaWNrJywgJ1tkYXRhLWF0dHJpYnV0ZS1pZF0nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJGEuZGF0YSgnYXR0cmlidXRlSWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJGEuZGF0YSgnYXR0cmlidXRlVmFsdWUnKTtcblxuICAgICAgICAgICAgdGhpcy4kYXR0cmlidXRlc0NvbnRhaW5lclxuICAgICAgICAgICAgICAgIC5maW5kKGBbZGF0YS1hdHRyaWJ1dGUtaWQ9JHtpZH1dYCkucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICRhLmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgIC5maW5kKCdpbnB1dCcpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcblxuICAgICAgICAgICAgJGZvcm0uZmluZChgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdYCkudmFsKFt2YWx1ZV0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RBdHRyaWJ1dGVzQ2hhbmdlKCRmb3JtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3dhdGNoZXNMaW1pdCkge1xuICAgICAgICAgICAgdGhpcy4kYXR0cmlidXRlc0NvbnRhaW5lci5maW5kKCdbZGF0YS1tb3JlXScpLmVhY2goKGksIG1vcmVFbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRtb3JlID0gJChtb3JlRWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRsaXN0ID0gJG1vcmUuY2xvc2VzdCgnW2RhdGEtc3dhdGNoZXNdJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGxlc3MgPSAkbGlzdC5maW5kKCdbZGF0YS1sZXNzXScpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRpdGVtcyA9ICRsaXN0LmZpbmQoJ1tkYXRhLWF0dHJpYnV0ZS1pZF0nKTtcblxuICAgICAgICAgICAgICAgIGlmICgkaXRlbXMubGVuZ3RoID4gdGhpcy5zd2F0Y2hlc0xpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRoaWRkZW5JdGVtcyA9ICRpdGVtcy5maWx0ZXIoaiA9PiBqID49IHRoaXMuc3dhdGNoZXNMaW1pdCkuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkbW9yZS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaGlkZGVuSXRlbXMuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJG1vcmUuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxlc3Muc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgJGxlc3Mub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGhpZGRlbkl0ZW1zLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsZXNzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRtb3JlLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkbW9yZS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJGxlc3MuaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRhdHRyaWJ1dGVzQ29udGFpbmVyLmZpbmQoJ1tkYXRhLW1vcmVdLCBbZGF0YS1sZXNzXScpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXF1ZXN0QXR0cmlidXRlc0NoYW5nZSgkZm9ybSkge1xuICAgICAgICBpZiAoIXdpbmRvdy5Gb3JtRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKG5ldyBGb3JtRGF0YSgkZm9ybS5nZXQoMCkpKTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBgL3JlbW90ZS92MS9wcm9kdWN0LWF0dHJpYnV0ZXMvJHt0aGlzLnByb2R1Y3RJZH1gLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdzdGVuY2lsLWNvbmZpZyc6ICd7fScsXG4gICAgICAgICAgICAgICAgJ3N0ZW5jaWwtb3B0aW9ucyc6ICd7fScsXG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpbWFnZSwgcHJpY2UgfSA9IHJlc3AuZGF0YTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmltYWdlUmVwbGFjZXJGdW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGltYWdlID8gaW1hZ2UuZGF0YS5yZXBsYWNlKCd7OnNpemV9JywgdGhpcy5pbWFnZVNpemUpIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJlcGxhY2VyRnVuYyh0aGlzLiRjYXJkSW1hZ2UsIGltZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBpbWFnZS5kYXRhLnJlcGxhY2UoJ3s6c2l6ZX0nLCB0aGlzLmltYWdlU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRjYXJkSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTcmMnLCB0aGlzLiRjYXJkSW1hZ2UuYXR0cignc3JjJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3Jjc2V0JywgdGhpcy4kY2FyZEltYWdlLmF0dHIoJ3NyY3NldCcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBpbWcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyY3NldCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygncHJvZHVjdFN3YXRjaGVzLWltYWdlLW9wdGlvbkNoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLiRjYXJkSW1hZ2UuZGF0YSgnb3JpZ2luYWxTcmMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2FyZEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIHRoaXMuJGNhcmRJbWFnZS5kYXRhKCdvcmlnaW5hbFNyYycpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCB0aGlzLiRjYXJkSW1hZ2UuZGF0YSgnb3JpZ2luYWxTcmNzZXQnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zcmNzZXQnLCB0aGlzLiRjYXJkSW1hZ2UuZGF0YSgnb3JpZ2luYWxTcmNzZXQnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTcmMnLCBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFNyY3NldCcsIG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdwcm9kdWN0U3dhdGNoZXMtaW1hZ2Utb3B0aW9uQ2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHByaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk2NzI5OTIvYWpheC1yZXF1ZXN0LWZhaWxzLXdoZW4tc2VuZGluZy1mb3JtZGF0YS1pbmNsdWRpbmctZW1wdHktZmlsZS1pbnB1dC1pbi1zYWZhcmlcbiAgICAgKiBTYWZhcmkgYnJvd3NlciB3aXRoIGpxdWVyeSAzLjMuMSBoYXMgYW4gaXNzdWUgdXBsb2FkaW5nIGVtcHR5IGZpbGUgcGFyYW1ldGVycy4gVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBmaWxlcyBmcm9tIHRoZSBmb3JtIHBhcmFtc1xuICAgICAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XG4gICAgICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XG4gICAgICovXG4gICAgZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKGZvcm1EYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgRmlsZSAmJiAhdmFsLm5hbWUgJiYgIXZhbC5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNpbmNlICRwcm9kdWN0VmlldyBjYW4gYmUgZHluYW1pY2FsbHkgaW5zZXJ0ZWQgdXNpbmcgcmVuZGVyX3dpdGgsXG4gICAgICogV2UgaGF2ZSB0byByZXRyaWV2ZSB0aGUgcmVzcGVjdGl2ZSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtICRzY29wZVxuICAgICAqL1xuICAgIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRwcmljZVdpdGhUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRwcmljZVdpdGhvdXRUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIHJycFdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBycnBXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VTYXZlZDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXNhdmVkXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2Utbm93LWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgdGhlIHByaWNpbmcgZWxlbWVudHMgdGhhdCB3aWxsIHNob3cgdXAgb25seSB3aGVuIHRoZSBwcmljZSBleGlzdHMgaW4gQVBJXG4gICAgICogQHBhcmFtIHZpZXdNb2RlbFxuICAgICAqL1xuICAgIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCkge1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSkge1xuICAgICAgICB0aGlzLmNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCk7XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aFRheC5odG1sKHByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRob3V0VGF4Lmh0bWwocHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5zYXZlZCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kc3Bhbi5odG1sKHByaWNlLnNhdmVkLmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiaW1wb3J0IGluVmlldyBmcm9tICdpbi12aWV3JztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XG5cbmNsYXNzIFByb2R1Y3RTd2F0Y2hlcyB7XG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBjYXJkU2VsZWN0b3IgPSAnLnByb2R1Y3QgLmNhcmQsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUgLmNhcmQnLFxuICAgICAgICBwcm9kdWN0SWRTZWxlY3RvciA9ICdbZGF0YS1wcm9kdWN0LWlkXScsXG4gICAgICAgIGZpbmRQcm9kdWN0SWRCeUltZyA9IGZhbHNlLFxuICAgICAgICBzd2F0Y2hlc0NvbnRhaW5lclNlbGVjdG9yID0gJy5jYXJkLXRleHQtLWNvbG9yc3dhdGNoZXMnLFxuICAgICAgICBjYXJkSW1hZ2VTZWxlY3RvciA9ICcuY2FyZC1pbWFnZScsXG4gICAgICAgIGFkZFRvQ2FydEZvcm1TZWxlY3RvciA9ICdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nLFxuICAgICAgICBwcm9kdWN0Vmlld0ZpbGUgPSAncHJvZHVjdHMvcHJvZHVjdC12aWV3JyxcbiAgICAgICAgYXR0cmlidXRlc1RlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RTd2F0Y2hlcy1hdHRyaWJ1dGVzXCI+XG4gICAgICAgICAgICAgICAge3sjYXR0cmlidXRlc319XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0U3dhdGNoZXMtc3dhdGNoZXNcIiBkYXRhLXN3YXRjaGVzPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sjLn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInByb2R1Y3RTd2F0Y2hlcy1zd2F0Y2hlcy1pdGVtXCIgdGl0bGU9XCJ7e2xhYmVsfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWF0dHJpYnV0ZS1pZD1cInt7YXR0cmlidXRlSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYXR0cmlidXRlLXZhbHVlPVwie3thdHRyaWJ1dGVWYWx1ZX19XCI+e3smY29udGVudH19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAge3svLn19XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInByb2R1Y3RTd2F0Y2hlcy1zd2F0Y2hlcy1tb3JlXCIgZGF0YS1tb3JlPisgTW9yZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcm9kdWN0U3dhdGNoZXMtc3dhdGNoZXMtbGVzc1wiIGRhdGEtbGVzcz4tIExlc3M8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3svYXR0cmlidXRlc319XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgICAgdGVtcGxhdGVDdXN0b21UYWdzID0gbnVsbCxcbiAgICAgICAgaW1hZ2VTaXplID0gJzU5MHg1OTAnLFxuICAgICAgICBpbnB1dEZpbmRlckZ1bmMgPSBudWxsLFxuICAgICAgICBzd2F0Y2hlc0xpbWl0ID0gMCxcbiAgICAgICAgaW1hZ2VSZXBsYWNlckZ1bmMgPSBudWxsLFxuICAgICAgICBkaXNwbGF5SW5TdG9ja09ubHkgPSBmYWxzZSxcbiAgICAgICAgZ3JhcGhRTFRva2VuID0gJydcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgICAgICBjYXJkU2VsZWN0b3IsXG4gICAgICAgICAgICBwcm9kdWN0SWRTZWxlY3RvcixcbiAgICAgICAgICAgIGZpbmRQcm9kdWN0SWRCeUltZyxcbiAgICAgICAgICAgIHN3YXRjaGVzQ29udGFpbmVyU2VsZWN0b3IsXG4gICAgICAgICAgICBjYXJkSW1hZ2VTZWxlY3RvcixcbiAgICAgICAgICAgIGFkZFRvQ2FydEZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIHByb2R1Y3RWaWV3RmlsZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNUZW1wbGF0ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlQ3VzdG9tVGFncyxcbiAgICAgICAgICAgIGltYWdlU2l6ZSxcbiAgICAgICAgICAgIGlucHV0RmluZGVyRnVuYyxcbiAgICAgICAgICAgIHN3YXRjaGVzTGltaXQsXG4gICAgICAgICAgICBpbWFnZVJlcGxhY2VyRnVuYyxcbiAgICAgICAgICAgIGRpc3BsYXlJblN0b2NrT25seSxcbiAgICAgICAgICAgIGdyYXBoUUxUb2tlbixcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9IGRlYm91bmNlKHRoaXMub25XaW5kb3dTY3JvbGwuYmluZCh0aGlzLCBudWxsKSwgMjAwKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCByZXNpemUgbG9hZCcsIHRoaXMub25XaW5kb3dTY3JvbGwpO1xuXG4gICAgICAgIGNvbnN0IE11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbiAgICAgICAgaWYgKE11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJG5ld0VsZW1lbnRzID0gbXV0YXRpb25zLnJlZHVjZSgoYWNjdW11bGF0ZSwgbXV0YXRpb24pID0+IFsuLi5hY2N1bXVsYXRlLCAuLi5tdXRhdGlvbi5hZGRlZE5vZGVzXSwgW10pO1xuICAgICAgICAgICAgICAgIHRoaXMub25XaW5kb3dTY3JvbGwoJG5ld0VsZW1lbnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgICQod2luZG93KS5vZmYoJ3Njcm9sbCByZXNpemUgbG9hZCcsIHRoaXMub25XaW5kb3dTY3JvbGwpO1xuXG4gICAgICAgIGlmICh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25XaW5kb3dTY3JvbGwoJGJvZHkgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNhcmRzID0gW107XG5cbiAgICAgICAgJCh0aGlzLmNvbmZpZy5jYXJkU2VsZWN0b3IsICRib2R5KS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHNjb3BlID0gJChlbCk7XG4gICAgICAgICAgICBpZiAoJHNjb3BlLmRhdGEoJ3Byb2R1Y3RTd2F0Y2hlc0NhcmQnKSB8fCAhaW5WaWV3LmlzKGVsKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHByb2R1Y3RJZCA9ICRzY29wZS5maW5kKHRoaXMuY29uZmlnLnByb2R1Y3RJZFNlbGVjdG9yKS5kYXRhKCdwcm9kdWN0SWQnKTtcbiAgICAgICAgICAgIGlmICghcHJvZHVjdElkKSB7XG4gICAgICAgICAgICAgICAgLy8gdHJ5IHRvIGZpbmQgcHJvZHVjdCBJRCBieSBpbWcgc3JjXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5maW5kUHJvZHVjdElkQnlJbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQgPSAkc2NvcGUuZmluZCgnaW1nJykuZ2V0KCkucmVkdWNlKChpZCwgaW1nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG0gPSBTdHJpbmcoaW1nLnNyYykubWF0Y2goL3Byb2R1Y3RzXFwvKFswLTldKylcXC8vKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0gPyBOdW1iZXIobVsxXSkgOiBpZDtcbiAgICAgICAgICAgICAgICB9LCBudWxsKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByb2R1Y3RJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkYXR0cmlidXRlc0NvbnRhaW5lciA9ICRzY29wZS5maW5kKHRoaXMuY29uZmlnLnN3YXRjaGVzQ29udGFpbmVyU2VsZWN0b3IpO1xuICAgICAgICAgICAgaWYgKCRhdHRyaWJ1dGVzQ29udGFpbmVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RWaWV3RmlsZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzVGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVDdXN0b21UYWdzLFxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydEZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgICAgICBpbWFnZVNpemUsXG4gICAgICAgICAgICAgICAgaW5wdXRGaW5kZXJGdW5jLFxuICAgICAgICAgICAgICAgIHN3YXRjaGVzTGltaXQsXG4gICAgICAgICAgICAgICAgaW1hZ2VSZXBsYWNlckZ1bmMsXG4gICAgICAgICAgICAgICAgZGlzcGxheUluU3RvY2tPbmx5LFxuICAgICAgICAgICAgICAgIGdyYXBoUUxUb2tlbixcbiAgICAgICAgICAgIH0gPSB0aGlzLmNvbmZpZztcblxuICAgICAgICAgICAgY29uc3QgJGNhcmRJbWFnZSA9ICRzY29wZS5maW5kKHRoaXMuY29uZmlnLmNhcmRJbWFnZVNlbGVjdG9yKS5maXJzdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoe1xuICAgICAgICAgICAgICAgICRzY29wZSxcbiAgICAgICAgICAgICAgICAkYXR0cmlidXRlc0NvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFZpZXdGaWxlLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNUZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUN1c3RvbVRhZ3MsXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgICAgICRjYXJkSW1hZ2UsXG4gICAgICAgICAgICAgICAgaW1hZ2VTaXplLFxuICAgICAgICAgICAgICAgIGlucHV0RmluZGVyRnVuYyxcbiAgICAgICAgICAgICAgICBzd2F0Y2hlc0xpbWl0LFxuICAgICAgICAgICAgICAgIGltYWdlUmVwbGFjZXJGdW5jLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlJblN0b2NrT25seSxcbiAgICAgICAgICAgICAgICBhdXRvSW5pdDogIWdyYXBoUUxUb2tlbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FyZHMucHVzaChjYXJkKTtcblxuICAgICAgICAgICAgJHNjb3BlLmRhdGEoJ3Byb2R1Y3RTd2F0Y2hlc0NhcmQnLCBjYXJkKTtcbiAgICAgICAgICAgICRzY29wZS5hZGRDbGFzcygncHJvZHVjdFN3YXRjaGVzTG9hZGVkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5ncmFwaFFMVG9rZW4gJiYgY2FyZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgaWRzID0gY2FyZHMubWFwKGNhcmQgPT4gY2FyZC5wcm9kdWN0SWQpO1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyAoZW50aXR5SWRzOiAke0pTT04uc3RyaW5naWZ5KGlkcyl9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUHVyY2hhc2VRdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0T3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBDaGVja2JveE9wdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkQnlEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIE11bHRpcGxlQ2hvaWNlT3B0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBTd2F0Y2hPcHRpb25WYWx1ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXhDb2xvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybCh3aWR0aDogMTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0aGlzLmNvbmZpZy5ncmFwaFFMVG9rZW59YCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhockZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0cy5lZGdlcy5mb3JFYWNoKGVkZ2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5wcm9kdWN0SWQgPT0gZWRnZS5ub2RlLmVudGl0eUlkKS5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuZ3JhcGhRTE5vZGUgPSBlZGdlLm5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RTd2F0Y2hlczsiXSwic291cmNlUm9vdCI6IiJ9
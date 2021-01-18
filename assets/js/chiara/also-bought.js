import _ from 'lodash';
import utils from '@bigcommerce/stencil-utils';
import collapsibleFactory from '../theme/common/collapsible';
import ProductDetails from '../theme/common/product-details';
import scrollToElement from 'scroll-to-element';
import { currencyFormat } from './utils';
import { defaultModal } from '../theme/global/modal';
import swal from 'sweetalert2';

//
// https://javascript.info/task/delay-promise
//
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//
// https://hackernoon.com/functional-javascript-resolving-promises-sequentially-7aac18c4431e
//
function promiseSerial(funcs) {
    return funcs.reduce(
        (promise, func) => promise.then(result => func().then(Array.prototype.concat.bind(result))),
        Promise.resolve([]),
    );
}

function reportFormValidity(form) {
    let valid = true;
    if (form && form.checkValidity) {
        valid = form.checkValidity();
        if (!valid) {
            if (form.reportValidity) {
                form.reportValidity();
            } else {
                valid = true;
            }
        }
    }
    return valid;
}

export default class AlsoBought {
    constructor(parentProductDetails) {
        this.parentProductDetails = parentProductDetails;
        this.context = this.parentProductDetails.context;
        this.numberTexts = this.context.txtAlsoBoughtNumberArray.split(',');
        this.allNumberTexts = this.context.txtAlsoBoughtAllNumberArray.split(',');
        this.$alsoBoughtEl = $('[data-also-bought]', parentProductDetails.$productViewScope);
        this.products = [];
        this.onAddAllButtonClick = this.onAddAllButtonClick.bind(this);
        this.onAddSelectedButtonClick = this.onAddSelectedButtonClick.bind(this);

        this.retrieveAlsoBoughtProducts();

        $('[data-add-all]', this.$alsoBoughtEl).on('click', this.onAddAllButtonClick);
        $('[data-add-selected]', this.$alsoBoughtEl).on('click', this.onAddSelectedButtonClick);
    }

    retrieveAlsoBoughtProducts() {
        const $thumbnails = $('[data-thumbnails]', this.$alsoBoughtEl);
        const options = {
            template: {
                details: 'chiara/also-bought/product-details',
                thumbnail: 'chiara/also-bought/product-thumbnail',
            },
        };
        const $productEls = $('[data-product-id]', this.$alsoBoughtEl).not('[data-parent-product]');

        if ($productEls.length > 0) {
            this.$alsoBoughtEl.removeClass('u-hiddenVisually');
        
            $productEls.each((i, productEl) => {
                const $productEl = $(productEl);
                const productID = $productEl.data('productId');
                const $thumbEl = $(`<div class="productView-alsoBought-thumbnail-item is-checked" data-thumbnail-product-id="${productID}"></div>`);
    
                utils.api.product.getById(productID, options, (err, resp) => {
                    if (err || !resp.details || !resp.thumbnail) {
                        return;
                    }

                    $productEl.append(resp.details);
                    $thumbEl.append(resp.thumbnail);
                    $thumbnails.append($thumbEl);
    
                    // init foundation collapsible
                    collapsibleFactory('[data-options-collapsible]', { $context: $productEl });
    
                    // bind events
                    $('[data-also-bought-checkbox]', $productEl).on('change', this.onAlsoBoughtCheckboxChange.bind(this, $productEl));
    
                    const product = new ProductDetails($productEl, _.extend(this.context, { enableAlsoBought: false }), null, true);
                    this.products.push(product);
                    
                    // listen price change
                    product.$scope.on('price-change', () => this.updateTotalPrice());

                    this.updateTotalPrice();
                    this.updateAddSelectedToCartButton();
                });
            });

            // init parent product item
            const $parentProductEl = $('[data-parent-product]', this.$alsoBoughtEl);
            collapsibleFactory('[data-options-collapsible]', { $context: $parentProductEl });
            $('[data-also-bought-checkbox]', $parentProductEl).on('change', this.onAlsoBoughtCheckboxChange.bind(this, $parentProductEl));

            // listen parent product price change
            this.parentProductDetails.$scope.on('price-change', () => this.updateTotalPrice());
        }
    }

    updateTotalPrice() {
        const productIds = $('[data-also-bought-checkbox]:checked', this.$alsoBoughtEl)
            .get()
            .map(el => $(el).val());

        const total = [this.parentProductDetails, ...this.products]
            .filter(product => productIds.indexOf(product.productId) > -1)
            .reduce(({ with_tax = 0, without_tax = 0 }, { price }) => ({
                with_tax: price && price.with_tax ? with_tax + price.with_tax.value : null,
                without_tax: price && price.without_tax ? without_tax + price.without_tax.value : null,
            }), {});

        const $withTax = $('[data-total-with-tax]', this.$alsoBoughtEl);
        const $withoutTax = $('[data-total-without-tax]', this.$alsoBoughtEl);

        if (total.with_tax) {
            $('[data-price]', $withTax).html(currencyFormat(total.with_tax, this.context.money));
            $withTax.show();
            if (total.without_tax) {
                $('[data-tax-label]', $withTax).show();
            } else {
                $('[data-tax-label]', $withTax).hide();
            }
        } else {
            $withTax.hide();
        }

        if (total.without_tax) {
            $('[data-price]', $withoutTax).html(currencyFormat(total.without_tax, this.context.money));
            $withoutTax.show();
            if (total.with_tax) {
                $('[data-tax-label]', $withoutTax).show();
            } else {
                $('[data-tax-label]', $withoutTax).hide();
            }
        } else {
            $withoutTax.hide();
        }
    }

    onAddAllButtonClick(e) {
        e.preventDefault();

        $('[data-also-bought-checkbox]', this.$alsoBoughtEl)
            .prop('checked', true)
            .trigger('change');
    }

    onAddSelectedButtonClick(e) {
        e.preventDefault();
        this.addSelectedProductsToCart();
    }

    onAlsoBoughtCheckboxChange($productEl, e) {
        const $cb = $(e.target);
        const $toggle = $productEl.find('[data-options-collapsible]').first();
        const $label = $(`label[for="${$cb.attr('id')}"]`, this.$alsoBoughtEl);
        const $thumb = $(`[data-thumbnail-product-id="${$productEl.data('productId')}"]`, this.$alsoBoughtEl);

        // open (close) product options form if checkbox is checked (unchecked)
        if ($cb.prop('checked')) {
            $label.addClass('is-checked');
            $thumb.addClass('is-checked');
            if (!$toggle.hasClass('is-open')) {
                $toggle.trigger('click');
            }
        } else {
            $label.removeClass('is-checked');
            $thumb.removeClass('is-checked');
            if ($toggle.hasClass('is-open')) {
                $toggle.trigger('click');
            }
        }

        this.updateTotalPrice();
        this.updateAddSelectedToCartButton();
    }

    updateAddSelectedToCartButton() {
        const $all = $('[data-also-bought-checkbox]', this.$alsoBoughtEl);
        const $checked = $all.filter(':checked');
        const $btns = $('[data-buttons]', this.$alsoBoughtEl);

        if ($checked.length > 0) {
            const str = $checked.length === $all.length
                ? ($checked.length <= this.allNumberTexts.length ? this.allNumberTexts[$checked.length - 1] : $checked.length)
                : ($checked.length <= this.numberTexts.length ? this.numberTexts[$checked.length - 1] : $checked.length);
            const $btn = $('[data-add-selected]', this.$alsoBoughtEl);
            const text = $btn.data('originalText') || $btn.html();
            $btn.data('originalText', text).html(text.replace('%str%', str));
            $btns.addClass('show');
        } else {
            $btns.removeClass('show');
        }
    }

    // No longer used. Keep for other third-party scripts compatibility.
    /**
     * Promise to Call after the parent product is added to add also-bought products.
     */
    async parentProductAddedToCart() {
        // console.log('parent product added');

        const promises = [];
        let success = true;

        this.products.forEach(product => {
            if (product.$scope.find('[data-also-bought-checkbox]:checked').length > 0) {
                promises.push(async () => {
                    try {
                        await this.addProductToCart(product); // eslint-disable-line no-unused-expressions
                        await delay(1000); // eslint-disable-line no-unused-expressions
                    } catch (e) {
                        success = false;
                    }
                });
            }
        });

        await promiseSerial(promises); // eslint-disable-line no-unused-expressions
        return success;
    }

    

    async addSelectedProductsToCart() {
        const productIds = $('[data-also-bought-checkbox]:checked', this.$alsoBoughtEl)
            .get()
            .map(el => $(el).val());

        const results = [];
        let success = true;

        if (productIds.indexOf(this.parentProductDetails.productId) > -1) {
            success = reportFormValidity(this.parentProductDetails.$form.get(0));
            if (success) {
                const [err, resp] = await this.parentProductDetails.addProductToCartAsync();
                const errorMsg = err || resp.data.error;
                if (errorMsg) {
                    await swal({
                        text: errorMsg,
                        type: 'error',
                    });
                    success = false;
                } else {
                    results.push({
                        product: this.parentProductDetails,
                        resp,
                    });
    
                    $(`[data-also-bought-checkbox][value="${this.parentProductDetails.productId}"]`, this.$alsoBoughtEl)
                        .prop('checked', false)
                        .trigger('change');
                }
            }
        }

        const products = this.products.filter(product => productIds.indexOf(product.productId) > -1);
        
        for (let i = 0; i < products.length && success; i++) {
            const product = products[i];
            success = reportFormValidity(product.$form.get(0));
            if (success) {
                const [err, resp] = await product.addProductToCartAsync();
                const errorMsg = err || resp.data.error;
                if (errorMsg) {
                    await swal({
                        text: errorMsg,
                        type: 'error',
                    });
                    success = false;
                } else {
                    results.push({
                        product,
                        resp,
                    });
    
                    $('[data-also-bought-checkbox]', product.$scope)
                        .prop('checked', false)
                        .trigger('change');
    
                    if (i < products.length - 1) {
                        await delay(200);
                    }
                }
            } else {
                // open the product form
                const $toggle = $('[data-options-collapsible]', product.$scope);
                if (!$toggle.hasClass('is-open')) {
                    $toggle.trigger('click');
                }
            }
        }

        if (results.length > 0) {
            const { product, resp } = results[0];

            // Open preview modal and update content
            if (product.previewModal) {
                // Supermarket OBPS Mod
                const modal = defaultModal();
                modal.close();
                if (this.context.themeSettings.add_to_cart_popup !== 'hide') {
                    product.previewModal.open();
                }

                product.updateCartContent(product.previewModal, resp.data.cart_item.id);
            } else {
                // if no modal, redirect to the cart page
                this.redirectTo(resp.data.cart_item.cart_url || this.context.urls.cart);
            }
        }
    }

    addProductToCart(product) {
        return new Promise((resolve, reject) => {
            const form = $('form[data-cart-item-add]', product.$scope).get(0);
            const $addToCartBtn = $('#form-action-addToCart', product.$scope);
            const originalBtnVal = $addToCartBtn.val();
            const waitMessage = $addToCartBtn.data('waitMessage');
            const $errorBox = $('[data-error-box]', product.$scope);
            const $errorMsg = $('[data-error-message]', product.$scope);
            const $checkbox = $('[data-also-bought-checkbox]', product.$scope);

            // Do not do AJAX if browser doesn't support FormData
            if (window.FormData === undefined) {
                resolve();
            }

            $addToCartBtn
                .val(waitMessage)
                .prop('disabled', true);

            product.$overlay.show();

            // Add item to cart
            utils.api.cart.itemAdd(product.filterEmptyFilesFromForm(new FormData(form)), (err, response) => {
                const errorMessage = err || response.data.error;

                // console.log(form);

                $addToCartBtn
                    .val(originalBtnVal)
                    .prop('disabled', false);

                product.$overlay.hide();

                // Guard statement
                if (errorMessage) {
                    // console.log('reject add product');

                    $errorMsg.html(errorMessage);
                    $errorBox.removeClass('u-hiddenVisually');
                    if ($errorBox.length > 0) {
                        scrollToElement($errorBox.get(0));
                    }

                    reject();
                    return;
                }

                // console.log('resolve add product');
                $errorMsg.empty();
                $errorBox.addClass('u-hiddenVisually');
                $checkbox.prop('checked', false).trigger('change');

                resolve();
            });
        });
    }
}

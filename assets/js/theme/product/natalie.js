//  Hide product on Sold out items by Natalie
export function hidePrice() {
    if (!$('.alertBox--error').length) {
        $('.productView .price-section').show();
    }
}

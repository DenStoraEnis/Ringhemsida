"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var cartCount = 0;
  var cartCountElement = document.getElementById('cart-count');
  var addToCartButton = document.getElementById('add-to-cart');
  addToCartButton.addEventListener('click', function () {
    cartCount++;
    cartCountElement.textContent = cartCount;
  });
});
//# sourceMappingURL=scripts.dev.js.map

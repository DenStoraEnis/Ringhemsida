"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var cartCount = 0;
  var cartCountElement = document.getElementById('cart-count');
  var addToCartButtons = document.querySelectorAll('.add-to-cart-button');
  var cartIcon = document.querySelector('.cart-icon');
  var animationContainer = document.getElementById('animation-container');
  addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      cartCount++;
      cartCountElement.textContent = cartCount; // Create a clone of the product image

      var productImage = button.closest('.item').querySelector('.product-image');
      var imageClone = productImage.cloneNode(true);
      imageClone.classList.add('cart-item-animation'); // Append the clone to the animation container

      animationContainer.appendChild(imageClone); // Get the position of the cart icon and the button

      var cartIconRect = cartIcon.getBoundingClientRect();
      var buttonRect = button.getBoundingClientRect(); // Set the initial position of the clone

      imageClone.style.top = "".concat(buttonRect.top, "px");
      imageClone.style.left = "".concat(buttonRect.left, "px"); // Force reflow to ensure the animation starts correctly

      imageClone.offsetWidth; // Set the final position of the clone (cart icon position)

      imageClone.style.transform = "translate(".concat(cartIconRect.left - buttonRect.left, "px, ").concat(cartIconRect.top - buttonRect.top, "px) scale(0.2)");
      imageClone.style.opacity = '0'; // Remove the clone after the animation is done

      imageClone.addEventListener('transitionend', function () {
        imageClone.remove();
      });
    });
  });
});
//# sourceMappingURL=script.dev.js.map

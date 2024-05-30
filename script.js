document.addEventListener('DOMContentLoaded', function() {
    let cartCount = 0;
    const cartCountElement = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    const cartIcon = document.querySelector('.cart-icon');
    const animationContainer = document.getElementById('animation-container');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            cartCount++;
            cartCountElement.textContent = cartCount;

            // Create a clone of the product image
            const productImage = button.closest('.item').querySelector('.product-image');
            const imageClone = productImage.cloneNode(true);
            imageClone.classList.add('cart-item-animation');

            // Append the clone to the animation container
            animationContainer.appendChild(imageClone);

            // Get the position of the cart icon and the button
            const cartIconRect = cartIcon.getBoundingClientRect();
            const buttonRect = button.getBoundingClientRect();

            // Set the initial position of the clone
            imageClone.style.top = `${buttonRect.top}px`;
            imageClone.style.left = `${buttonRect.left}px`;

            // Force reflow to ensure the animation starts correctly
            imageClone.offsetWidth;

            // Set the final position of the clone (cart icon position)
            imageClone.style.transform = `translate(${cartIconRect.left - buttonRect.left}px, ${cartIconRect.top - buttonRect.top}px) scale(0.2)`;
            imageClone.style.opacity = '0';

            // Remove the clone after the animation is done
            imageClone.addEventListener('transitionend', () => {
                imageClone.remove();
            });
        });
    });
});

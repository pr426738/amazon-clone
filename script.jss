document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    let cartItems = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartItems++;
            cartCount.textContent = cartItems;
            alert("Product added to cart!");
        });
    });
});

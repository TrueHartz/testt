<script>
    let cart = [];

    function addToCart(productName, price) {
        cart.push({ name: productName, price: price });
        alert(`${productName} added to cart!`);
        updateCartCount();
    }

    function updateCartCount() {
        document.getElementById('cart-count').innerText = cart.length;
    }
</script>
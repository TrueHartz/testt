// Example product data loaded dynamically (in production, load from CSV)
const products = [
    {name: "Dog Collar", price: 25.99, image: "images/dog-collar.jpg", description: "Durable leather collar for dogs.", link: "https://affiliate-link.com"},
    {name: "Cat Bed", price: 39.99, image: "images/cat-bed.jpg", description: "Soft and cozy bed for cats.", link: "https://affiliate-link.com"},
    {name: "Bird Cage", price: 59.99, image: "images/bird-cage.jpg", description: "Spacious cage for birds.", link: "https://affiliate-link.com"},
    // Add more products as needed...
];

let currentPage = 1;
const productsPerPage = 12;
const productContainer = document.getElementById('product-container');

// Function to display products dynamically
function displayProducts(page) {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = page * productsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);
    
    productContainer.innerHTML = '';

    currentProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>$${product.price}</strong></p>
            <a href="${product.link}" class="buy-btn">Buy Now</a>
            <button class="like-btn">❤️</button>
            <span class="like-count">0</span>
        `;
        
        productContainer.appendChild(productDiv);
    });
}

// Like button functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('like-btn')) {
        const likeCount = e.target.nextElementSibling;
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    }
});

// Pagination functionality
document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 1) currentPage--;
    displayProducts(currentPage);
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentPage * productsPerPage < products.length) currentPage++;
    displayProducts(currentPage);
});

// Initial display
displayProducts(currentPage);

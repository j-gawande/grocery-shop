let cartCount = 0;
const cartCountElement = document.querySelector(".cart-count");

function updateCartCount() {
  cartCountElement.textContent = cartCount;
}

function addToCart() {
  cartCount++;
  updateCartCount();
}

// Add event listener to the cart icon to simulate adding items to the cart
const cartIcon = document.querySelector('.cart');
cartIcon.addEventListener('click', addToCart);

// Scroll to the products section when "Shop Now" button is clicked
const shopNowButton = document.querySelector('.hero-btn');
const productsSection = document.querySelector('#products'); // Replace 'products' with the actual ID of your products section

function scrollToProductsSection() {
  productsSection.scrollIntoView({ behavior: 'smooth' });
}

shopNowButton.addEventListener('click', scrollToProductsSection);

// search-icon

let searchContainer = document.querySelector(".search-container");
let searchIcon = document.querySelector(".search-icon");
let searchBox = document.querySelector("#search-box");
let searchForm = document.querySelector(".search-form");

searchContainer.addEventListener("click", function (event) {
    event.stopPropagation();
    searchBox.classList.toggle("searchBox");
    searchContainer.classList.toggle("searchContainer");
    searchIcon.classList.toggle("searchIcon");
    searchForm.classList.toggle("searchForm");
    searchBox.value = "";
});

// Scroll to the top section when "home icon" button is clicked
const homeIcon = document.querySelector('#home-icon');
const topSection = document.querySelector('.home');

function scrollToTopSection() {
  topSection.scrollIntoView({ behavior: 'smooth' });
  console.log("clickd");
}

homeIcon.addEventListener('click', scrollToTopSection);

// Scroll to the bottom section when "contact" button is clicked
const contactIcon = document.querySelector('#contact-icon');
const footer = document.querySelector('footer');

function scrollToFooterSection() {
  footer.scrollIntoView({ behavior: 'smooth' });
  console.log("clickd");
}

contactIcon.addEventListener('click', scrollToFooterSection);

// user-icon

let userIcon = document.querySelector(".user-icon");
let userForm = document.querySelector(".user-form");

userIcon.addEventListener("click", function (event) {
    userForm.classList.toggle("userForm");
    document.querySelector(".user-name").value = "";
    document.querySelector(".user-password").value = "";
    console.log("cicked");
});
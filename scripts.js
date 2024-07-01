document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    toggleButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('show');
    });
});


let products = [
    { name: "Coconut Water", description: "200 ML",Price: "60 RS",Image:"./images/coc.jpeg"},
    { name: "Mango Juice", description: "200 ML",Price: "60 RS",Image:"./images/mango.jpeg"},
    { name: "Mixed Fruit Juice", description: "200 ML",Price:"60 RS",Image:"./images/mixed.jpeg"},
    { name: "Sugarcane Juice", description: "250 ML",Price: "80 RS",Image:"./images/sugarcane.jpeg" },
    { name: "Valencia Orange", description: "250 ML",Price:"120 RS",Image:"./images/val.jpeg" },
    { name: "Choco Mint Milk Shake", description: "200 ML",Price:"110 RS",Image:"./images/chocomint.jpeg" },
    { name: "Coconut Water Aloe Lemon", description: "200 ML",Price: "65 RS",Image:"./images/lemon.jpeg" },
    { name: "Pomegranate Juice", description: "250 ML",Price: "150 RS" ,Image:"./images/pomogranatee.jpeg"},
    { name: "Guava Juice", description: "250 ML",Price: "80 RS",Image:"./images/guava.jpeg" },
    { name: "Valencia Orange", description: "1000 ML",Price:"350 RS",Image:"./images/valenciorange1l.jpeg" },
    { name: "Sugarcane Juice", description: "1000 ML",Price: "250 RS" ,Image:"./images/sugar1L.jpeg"},
    { name: "Pomegranate Juice", description: "1000 ML",Price: "450 RS" ,Image:"./images/pomo1l.jpeg"},
    { name: "Mixed Fruit Juice", description: "1000 ML",Price: "250 RS",Image:"./images/m1l.jpeg" },
    { name: "Cold Coffee Milk Shake", description: "200 ML",Price: "110 RS",Image:"./images/cold.jpeg" },
    { name: "Honey Banana Milk Shake", description: "200 ML",Price: "110 RS",Image:"./images/honey.jpeg" },
    { name: "Grape Juice", description: "250 ML" ,Price: "200 RS",Image:"./images/grape.jpeg"},
    { name: "Grape Juice", description: "1000 ML",Price: "500 RS",Image:"./images/grape1l.jpeg" },
    { name: "Raw Pressery Alphonso Mango", description: "1000 ML",Price: "250 RS",Image:"./images/alph.webp" },
    { name: "Raw Pressery Classic Lemon", description: "200 ML",Price: "50 RS" ,Image:"./images/aloelemon.jpeg"},
    { name: "Raw Pressery AAM panna ", description: "200 ML",Price: "50 RS",Image:"./images/aam.jpeg" },
    { name: "Raw Pressery Shikanji", description: "200 ML",Price: "50 RS",Image:"./images/shik.jpeg" },
    { name: "Tetra Almond Milk Plain", description: "1000 ML",Price: "325 RS",Image:"./images/milk'.jpeg" },
    { name: "Raw Green Ice Tea Peach", description: "250 ML",Price:"60 RS" ,Image:"./images/peach.jpeg"},
    { name: "Raw Green Ice Tea Lemon", description: "250 ML",Price:"60 RS",Image:"./images/lemon.jpeg" },
    { name: "Raw Green Ice Tea Jasmine", description: "250 ML",Price:"60 RS",Image:"./images/jasmine.jpeg" },
    { name: "Raw Green Ice Tea Mojito", description: "250 ML",Price:"60 RS" ,Image:"./images/mojito.jpeg"}
   
];

let displayedProducts = 6;

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});

function displayProducts() {
    const productCards = document.getElementById('product-cards');
    productCards.innerHTML = '';

    products.slice(0, displayedProducts).forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<h2>${product.name}</h2><p>${product.description}</p><p>${product.Price}</p><img src="${product.Image}" alt="not found"/>`;
        productCards.appendChild(card);
    });

    const loadMoreButton = document.getElementById('load-more');
    if (displayedProducts >= products.length) {
        loadMoreButton.style.display = 'none';
    } else {
        loadMoreButton.style.display = 'block';
    }
}

function loadMoreProducts() {
    displayedProducts += 6;
    displayProducts();
}

function searchProducts() {
    const query = document.getElementById('search').value.toLowerCase();
    if(query === '') return displayProducts();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    
    const productCards = document.getElementById('product-cards');
    productCards.innerHTML = '';

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<h2>${product.name}</h2><p>${product.description}</p><p>${product.Price}</p><img src="${product.Image}" alt="not found"/>`;
        productCards.appendChild(card);
    });

    const loadMoreButton = document.getElementById('load-more');
    loadMoreButton.style.display = 'none';
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});
let brands = [
    { name: "Brand 1", description: "Britania",Image:"./images/brit.jpg" },
    { name: "Brand 2", description: "Cadbury",Image:"./images/cad.jpeg" },
    { name: "Brand 3", description: "Wingreens",Image:"./images/win.jpeg" },
    { name: "Brand 4", description: "Winkies",Image:"./images/winkies.jpeg" }
];

document.addEventListener('DOMContentLoaded', () => {
    displayBrands();
});

function displayBrands() {
    const brandCards = document.querySelector('#brands .brand-cards');
    brandCards.innerHTML = '';

    brands.forEach(brand => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<h2>${brand.name}</h2><p>${brand.description}</p><img src="${brand.Image}" alt="not found"/>`;
        brandCards.appendChild(card);
    });
}


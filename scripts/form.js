// Get Dates
const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById("modification").innerHTML = lastModified;

// toggle menu in small view
const mainNav = document.querySelector('.navigation');
const navbutton = document.querySelector('#menu');

navbutton.addEventListener('click', () => {
  mainNav.classList.toggle('show');
  navbutton.classList.toggle('show');
});

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const productSelect = document.getElementById('product');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Track number of reviews completed by the user
const reviewCounterKey = 'reviewCounter';

// Check if the counter exists in localStorage, if not, initialize it
if (!localStorage.getItem(reviewCounterKey)) {
  localStorage.setItem(reviewCounterKey, 0);
}

// Increment the counter each time the page is loaded
let reviewCounter = parseInt(localStorage.getItem(reviewCounterKey), 10);
reviewCounter += 1;
localStorage.setItem(reviewCounterKey, reviewCounter);

// Display the counter on the page
const reviewCounterDisplay = document.getElementById('reviewCounter');

  reviewCounterDisplay.textContent = reviewCounter;


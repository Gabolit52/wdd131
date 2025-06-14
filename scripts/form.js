// Product Array
const products = [
  { id: 'fc-1888', name: 'Flux Capacitor' },
  { id: 'fc-2050', name: 'Power Laces' },
  { id: 'fs-1987', name: 'Hoverboard' },
  { id: 'fs-2030', name: 'Hydration Pizza' },
  { id: 'ac-1993', name: 'Smart Jacket' }
];

// Populate select dropdown
const select = document.querySelector('#productName');
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});

// localStorage counter
if (window.location.href.includes('review.html')) {
  let count = localStorage.getItem('reviewCount');
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem('reviewCount', count);

  const counter = document.createElement('p');
  counter.textContent = `You have submitted ${count} review(s).`;
  document.body.appendChild(counter);
} 

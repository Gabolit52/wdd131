const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Added 3 more temples:
  {
    templeName: "Quito Ecuador",
    location: "Quito, Ecuador",
    dedicated: "1999, July, 9",
    area: 8500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quito-ecuador/400x250/quito-ecuador-temple-exterior-1234567-wallpaper.jpg"
  },
  {
    templeName: "Okinawa Japan",
    location: "Okinawa, Japan",
    dedicated: "2000, May, 21",
    area: 11100,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/okinawa-japan/400x250/okinawa-japan-temple-exterior-1234568-wallpaper.jpg"
  },
  {
    templeName: "Stockholm Sweden",
    location: "Stockholm, Sweden",
    dedicated: "1985, August, 25",
    area: 9800,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/stockholm-sweden/400x250/stockholm-sweden-temple-exterior-1234569-wallpaper.jpg"
  }
];

const container = document.getElementById('temples-container');
const buttons = {
  home: document.getElementById('filter-home'),
  old: document.getElementById('filter-old'),
  new: document.getElementById('filter-new'),
  large: document.getElementById('filter-large'),
  small: document.getElementById('filter-small')
};

// Helper: parse dedication year from string "YYYY, Month, Day"
function getDedicationYear(dedicated) {
  return new Date(dedicated).getFullYear();
}

// Create temple card HTML element
function createTempleCard(temple) {
  const card = document.createElement('article');
  card.className = 'temple-card';

  card.innerHTML = `
    <img class="temple-image" src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
    <div class="temple-info">
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    </div>
  `;

  return card;
}

// Render temples in container
function renderTemples(templesToRender) {
  container.innerHTML = '';
  templesToRender.forEach(temple => {
    container.appendChild(createTempleCard(temple));
  });
}

// Filter handlers
function filterOld() {
  return temples.filter(t => getDedicationYear(t.dedicated) < 1900);
}

function filterNew() {
  return temples.filter(t => getDedicationYear(t.dedicated) > 2000);
}

function filterLarge() {
  return temples.filter(t => t.area > 90000);
}

function filterSmall() {
  return temples.filter(t => t.area < 10000);
}
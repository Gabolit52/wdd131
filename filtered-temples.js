// Array of temple objects (10 total)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Added 3 more temples:
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 48433,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/52/Tokyo_Japan_Temple.jpg",
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Salt_Lake_Temple_-_SLC_2008.JPG",
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 25843,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
  },
];

// Function to parse dedication year from string like "2005, August, 7"
function getDedicationYear(dedicatedStr) {
  return parseInt(dedicatedStr.split(",")[0]);
}

// Create and display temple cards inside the container
function displayTemples(filteredTemples) {
  const container = document.getElementById("temples-container");
  container.innerHTML = ""; // Clear existing

  filteredTemples.forEach((temple) => {
    const card = document.createElement("section");
    card.className = "temple-card";

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    container.appendChild(card);
  });
}

// Filtering functions
function filterOld() {
  const oldTemples = temples.filter(t => getDedicationYear(t.dedicated) < 1900);
  displayTemples(oldTemples);
}

function filterNew() {
  const newTemples = temples.filter(t => getDedicationYear(t.dedicated) > 2000);
  displayTemples(newTemples);
}

function filterLarge() {
  const largeTemples = temples.filter(t => t.area > 90000);
  displayTemples(largeTemples);
}

function filterSmall() {
  const smallTemples = temples.filter(t => t.area < 10000);
  displayTemples(smallTemples);
}

function filterHome() {
  displayTemples(temples);
}

// Setup event listeners for buttons after DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initial display of all temples
  displayTemples(temples);

  // Buttons
  document.getElementById("btn-old").addEventListener("click", filterOld);
  document.getElementById("btn-new").addEventListener("click", filterNew);
  document.getElementById("btn-large").addEventListener("click", filterLarge);
  document.getElementById("btn-small").addEventListener("click", filterSmall);
  document.getElementById("btn-home").addEventListener("click", filterHome);

  // Footer date and copyright
  const yearSpan = document.getElementById("current-year");
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();

  const lastModSpan = document.getElementById("last-modified");
  if(lastModSpan) lastModSpan.textContent = document.lastModified;

  const studentNameSpan = document.getElementById("student-name");
  if(studentNameSpan) studentNameSpan.textContent = "Your Name Here"; // Replace with your name
});

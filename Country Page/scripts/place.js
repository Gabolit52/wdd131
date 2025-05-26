// Static values
const temperature = 50;
const windSpeed = 5;

function calculateWindChill(temp, speed) {
  return (
    35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

function displayWindChill() {
  const chillElem = document.getElementById('chill');
  if (temperature <= 50 && windSpeed > 3) {
    chillElem.textContent = calculateWindChill(temperature, windSpeed) + "°F";
  } else {
    chillElem.textContent = "N/A";
  }
}

function updateFooter() {
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
}

displayWindChill();
updateFooter();

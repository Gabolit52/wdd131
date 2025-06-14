// scripts/review.js

// Set current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Count number of reviews submitted using localStorage
let reviewCount = localStorage.getItem("reviewCount");
reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
localStorage.setItem("reviewCount", reviewCount);
document.getElementById("review-count").textContent = reviewCount;

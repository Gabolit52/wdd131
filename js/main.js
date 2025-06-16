// ✅ localStorage: Track form submissions
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("review-form");
  const counterElement = document.getElementById("review-counter");

  // Initialize counter
  let reviewCount = localStorage.getItem("reviewCount") || 0;
  updateCounter();

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const review = document.getElementById("review").value.trim();
      const rating = document.getElementById("rating").value;

      if (!name || !review) {
        alert("Please fill in all fields.");
        return;
      }

      // ✅ Object and Template Literals
      const newReview = {
        name,
        review,
        rating: Number(rating),
        date: new Date().toLocaleDateString()
      };

      displayReview(newReview);
      reviewCount++;
      localStorage.setItem("reviewCount", reviewCount);
      updateCounter();
      form.reset();
    });
  }

  // ✅ Array and array method
  const sampleTestimonials = [
    {
      name: "Alice",
      review: "Wonderful experience!",
      rating: 5,
      date: "2024-06-01"
    },
    {
      name: "Bob",
      review: "Very helpful service.",
      rating: 4,
      date: "2024-06-03"
    }
  ];

  // Display sample testimonials
  sampleTestimonials.forEach(displayReview);

  // ✅ Lazy loading support
  const images = document.querySelectorAll("img[loading='lazy']");
  images.forEach((img) => {
    img.addEventListener("error", () => {
      img.src = "images/fallback.jpg"; // optional fallback
    });
  });

  // ✅ Update counter display
  function updateCounter() {
    if (counterElement) {
      counterElement.textContent = `Total Reviews Submitted: ${reviewCount}`;
    }
  }

  // ✅ DOM manipulation and Template Literals
  function displayReview({ name, review, rating, date }) {
    const container = document.getElementById("testimonial-container");
    if (!container) return;

    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review");

    reviewCard.innerHTML = `
      <p><strong>${name}</strong> (${date})</p>
      <p>${review}</p>
      <p>⭐ Rating: ${"⭐".repeat(rating)}</p>
      <hr/>
    `;

    container.prepend(reviewCard);
  }
});

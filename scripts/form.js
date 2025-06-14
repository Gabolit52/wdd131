// Product array - id used for value, name used for option display
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

// Populate the product select element dynamically
document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("product-name");

  // Clear any existing options except placeholder
  productSelect.innerHTML = '';

  // Add placeholder option
  const placeholderOption = document.createElement("option");
  placeholderOption.textContent = "Select a Product ...";
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  placeholderOption.value = "";
  productSelect.appendChild(placeholderOption);

  // Add product options dynamically
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});

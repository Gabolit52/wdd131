// Product array - id used for value, name used for option display
const products = [
  { id: "p1", name: "SuperWidget 3000" },
  { id: "p2", name: "Gadget Pro X" },
  { id: "p3", name: "UltraTool Deluxe" },
  { id: "p4", name: "MegaDevice Plus" }
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

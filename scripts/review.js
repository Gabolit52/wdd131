// review.js

// Helper: Get URL parameters as an object
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  let entries = {};
  for (const [key, value] of params.entries()) {
    // For checkboxes with multiple values (features), group them into arrays
    if (entries[key]) {
      // If already an array, push; else convert to array
      if (Array.isArray(entries[key])) {
        entries[key].push(value);
      } else {
        entries[key] = [entries[key], value];
      }
    } else {
      entries[key] = value;
    }
  }
  return entries;
}

// Display data in <dd> elements with IDs matching field names + "-value"
function displayData(data) {
  // Mapping for checkbox features: join array values or show 'None'
  if (data.usefulFeatures) {
    if (Array.isArray(data.usefulFeatures)) {
      data.usefulFeatures = data.usefulFeatures.join(", ");
    }
  } else {
    data.usefulFeatures = "None";
  }

  // Optional fields: if empty, show "Not provided"
  const optionalFields = ["writtenReview", "userName"];
    optionalFields.forEach(field => {
      if (!data[field] || data[field].trim() === "") {
        data[field] = "Not provided";
      }
    });
  }

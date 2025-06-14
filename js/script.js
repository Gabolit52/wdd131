// Wireframe sketches for mobile and desktop views

const mobileWireframe = `
+-------------------------+
| Logo + Site Name        |
+-------------------------+
| Navigation (hamburger)  |
+-------------------------+
| Hero Image / Slider     |
+-------------------------+
| Services Overview       |
+-------------------------+
| Gallery (scrollable)    |
+-------------------------+
| Testimonials            |
+-------------------------+
| Contact Form / Info     |
+-------------------------+
| Footer                  |
+-------------------------+
`;

const desktopWireframe = `
+----------------------------------------------------+
| Logo           | Navigation Links                   |
+----------------------------------------------------+
| Hero Image (large)                                 |
+----------------------------------------------------+
| Services Section       | Gallery Section               |
+----------------------------------------------------+
| Testimonials Section                              |
+----------------------------------------------------+
| Contact Form & Info                               |
+----------------------------------------------------+
| Footer                                            |
+----------------------------------------------------+
`;

// Insert wireframes into the page
document.getElementById('mobile-wireframe').textContent = mobileWireframe.trim();
document.getElementById('desktop-wireframe').textContent = desktopWireframe.trim();

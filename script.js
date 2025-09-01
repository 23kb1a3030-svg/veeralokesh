// Select by ID
const title = document.getElementById("main-title");
console.log("Title:", title.textContent);

// Select by class
const description = document.querySelector(".description");
console.log("Description:", description.textContent);

// Select by tag name
const buttons = document.getElementsByTagName("button");
console.log("All buttons:", buttons);

// Select by name attribute
const signUpButton = document.querySelector('button[name="signup"]');
const signInButton = document.querySelector('button[name="signin"]');
console.log("Sign Up Button:", signUpButton.textContent);
console.log("Sign In Button:", signInButton.textContent);

// Select all elements with class 'product'
const products = document.querySelectorAll(".product");
products.forEach(product => {
  console.log("Product:", product.textContent, "| ID:", product.dataset.id);
});
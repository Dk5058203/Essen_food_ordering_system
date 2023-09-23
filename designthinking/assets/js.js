// Get all "Add to Cart" buttons on the page
const addToCartButtons = document.querySelectorAll('.button');
// Loop through each button and add a click event listener
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the parent food item element
    const foodItem = button.parentElement.parentElement;
    
    // Get the name and price of the food item
    const foodName = foodItem.querySelector('h1').textContent;
    const foodPrice = foodItem.querySelector('.price').textContent;
    // Create an object to represent the cart item
    const cartItem = {
      name: foodName,
      price: foodPrice,
      quantity: 1
    };
    
    // Check if there are existing cart items in localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Check if the current food item is already in the cart
    const existingItemIndex = cartItems.findIndex(item => item.name === cartItem.name);
    if (existingItemIndex > -1) {
      // If the item is already in the cart, update its quantity
      cartItems[existingItemIndex].quantity += 1;
      
    } else {
      // If the item is not yet in the cart, add it
      cartItems.push(cartItem);
    }
    
    // Save the updated cart items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Alert the user that the item was added to the cart
    alert(`${cartItem.name} added to cart!`);
  });

  // add event listeners to the "Remove" buttons
const removeButtons = document.querySelectorAll('.remove-btn');
removeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const cartWrap = button.closest('.cart_wrap');
    cartWrap.remove();
  });
});

});

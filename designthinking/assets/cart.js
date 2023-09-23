
const namee = document.querySelector('.cart-name')
const price = document.querySelector('.cart-price')
const qty = document.querySelector(".cart-qty")
const cartContainer = document.getElementById('cart-container');
const totalBox = document.getElementById('total-box');

let cartData = JSON.parse(localStorage.getItem('cartItems')) || [];

// function to calculate and display the total price
function updateTotal() {
    const totalPrice = cartData.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    totalBox.innerText = `Total price: $${77}`;
}

cartData.forEach((item, index) => {
    // create the cart_wrap div
    const cartWrap = document.createElement('div');
    cartWrap.classList.add('cart_wrap');

    // create the h2 element with the item name
    const h2 = document.createElement('h2');
    h2.innerText = `Name: ${item.name}`;

    cartWrap.appendChild(h2);

    // create the h3 element with the item price
    const h3Price = document.createElement('h3');
    h3Price.innerText = `Price: ${item.price}`;

    cartWrap.appendChild(h3Price);

    // create the h3 element with the item quantity
    const h3Qty = document.createElement('h3');
    h3Qty.innerText = `Quantity: ${item.quantity}`;

    cartWrap.appendChild(h3Qty);

    // create the remove button
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.addEventListener('click', () => {
        cartData.splice(index, 1); // remove the item from the cartData array
        localStorage.setItem('cartItems', JSON.stringify(cartData)); // update local storage
        cartWrap.remove(); // remove the item from the DOM
        updateTotal(); // update the total price
    });

    cartWrap.appendChild(removeBtn);

    // add the cart_wrap div to the cart container
    cartContainer.appendChild(cartWrap);
});

updateTotal(); // display the initial total price




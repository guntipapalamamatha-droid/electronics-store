/* =========================================================
   CART FUNCTIONALITY (js/cart.js)
   ========================================================= */

// 1. ADD ITEM TO CART
function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let existingIndex = cart.findIndex(item => item.name === name);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ name: name, price: price, image: image, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = "cart.html";
}

// 2. DISPLAY CART ITEMS & CALCULATE TOTALS
function displayCartItems() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let container = document.getElementById('cart-items');
  let subtotalEl = document.getElementById('cart-subtotal');
  let totalEl = document.getElementById('cart-total');

  if (!container) return;

  // Professional English Empty State
  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 50px 20px; color: #a0aec0;">
        <i class="fa-solid fa-cart-shopping" style="font-size: 50px; color: #d4af37; margin-bottom: 15px;"></i>
        <h3 style="color: #ffffff; margin-bottom: 8px;">Your Shopping Cart is Empty</h3>
        <p style="font-size:13px; color:#718096;">Browse our latest products and exclusive offers to add items to your cart.</p>
      </div>`;
    if (subtotalEl) subtotalEl.innerText = "₹0";
    if (totalEl) totalEl.innerText = "₹0";
    return;
  }

  container.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item, index) => {
    let numericPrice = parseInt(item.price.toString().replace(/[^0-9]/g, ''));
    let itemTotal = numericPrice * item.quantity;
    subtotal += itemTotal;

    container.innerHTML += `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}">
        <div class="item-details">
          <h4>${item.name}</h4>
          <p class="item-price">₹${numericPrice.toLocaleString('en-IN')} x ${item.quantity} = <strong style="color:#d4af37;">₹${itemTotal.toLocaleString('en-IN')}</strong></p>
        </div>
        
        <!-- Quantity Controls -->
        <div class="quantity-control">
          <button onclick="changeQuantity(${index}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeQuantity(${index}, 1)">+</button>
        </div>

        <!-- Remove Item Button -->
        <button class="btn-remove" onclick="removeCartItem(${index})" title="Remove Item">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
  });

  if (subtotalEl) subtotalEl.innerText = "₹" + subtotal.toLocaleString('en-IN');
  if (totalEl) totalEl.innerText = "₹" + subtotal.toLocaleString('en-IN');
}

// 3. CHANGE QUANTITY (+ / -)
function changeQuantity(index, change) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}

// 4. REMOVE ITEM DIRECTLY
function removeCartItem(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}

document.addEventListener('DOMContentLoaded', displayCartItems);
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
  const cartContainer = document.getElementById("cart");
  const totalPriceEl = document.getElementById("total-price");
  const noProductEl = document.getElementById("no-product");
  cartContainer.innerHTML = "";
  let totalPrice = "Rp";

  if (cart.length === 0) {
    noProductEl.style.display = "block";
  } else {
    noProductEl.style.display = "none";
  }

  cart.forEach((item, index) => {
    totalPrice += item.price;
    cartContainer.innerHTML += `
      <div class="cart-item">
        <span>${item.name} - ${item.price.toLocaleString()}</span>
        <button onclick="removeFromCart(${index})" class="btn">Hapus dari Wishlist</button>
      </div>
    `;
  });

  totalPriceEl.innerText = totalPrice.toLocaleString();
  localStorage.setItem("cart", JSON.stringify(cart));
}




function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart(); 
}

document.addEventListener("DOMContentLoaded", updateCart);
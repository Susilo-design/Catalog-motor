let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
  const cartContainer = document.getElementById("cart");
  const totalPriceEl = document.getElementById("total-price");
  cartContainer.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item, index) => {
    totalPrice += item.price;
    cartContainer.innerHTML += `
            <div class="cart-item">
                <span>${item.name} - Rp ${item.price.toLocaleString()}</span>
                <button onclick="removeFromCart(${index})">Hapus</button>
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

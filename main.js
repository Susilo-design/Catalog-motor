const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

// Remove wishlist functionality
// const wishlistButtons = [...document.querySelectorAll('.card-btn')];
// let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// wishlistButtons.forEach((button, i) => {
//     button.addEventListener('click', () => {
//         const productCard = button.closest('.product-card');
//         const productInfo = productCard.querySelector('.product-info');
//         const productName = productInfo.querySelector('.product-brand').innerText;
//         if (!wishlist.includes(productName)) {
//             wishlist.push(productName);
//             alert(`${productName} has been added to your wishlist!`);
//             localStorage.setItem('wishlist', JSON.stringify(wishlist));
//         } else {
//             alert(`${productName} is already in your wishlist!`);
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const wishlistContainer = document.querySelector('#wishlist-container');
//     wishlist.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.innerText = item;
//         wishlistContainer.appendChild(listItem);
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    const button = card.querySelector('button[onclick^="addToCart"]');
    if (button) {
      button.addEventListener("click", () => {
        const productName = card.querySelector(".product-brand").innerText;
        const productPrice = parseFloat(
          card.querySelector(".price").innerText.replace(/[^0-9.-]+/g, "")
        );
        addToCart(productName, productPrice);
      });
    }
  });
});

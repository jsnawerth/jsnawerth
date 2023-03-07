const cartData = JSON.parse(localStorage.getItem('cart'));

const menuIcon = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobileMenu');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('showMobileMenu')
})

const saveCartToLocalStorage = () => {
  const cartItems = document.querySelectorAll('.checkout-item');
  const cart = [];
  cartItems.forEach(cartItem => {
    const productName = cartItem.querySelector('.description h3').textContent;
    const productPrice = cartItem.querySelector('.description p:last-child').textContent;
    const imgSrc = cartItem.querySelector('img').getAttribute('src');
    const quantity = parseInt(cartItem.querySelector('.quantity').textContent);
    cart.push({
      productName,
      productPrice,
      imgSrc,
      quantity,
    });
  });
  localStorage.setItem('cart', JSON.stringify(cart));
}

const updateSummary = () => {
  const cartData = JSON.parse(localStorage.getItem('cart'));
  let totalPrice = 0;
  for (let item of cartData) {
    totalPrice += parseFloat(item.productPrice) * item.quantity;
  }
  const totalSummary = document.getElementById('total')
  totalSummary.textContent = (totalPrice.toFixed(2))+'€';
}

const addOrRemoveCartItem = () => {
  const listContainer = document.querySelector('.list-container');
  listContainer.addEventListener('click', (event) => {
    const target = event.target;
    const product = target.closest('.checkout-item');
    const quantity = product.querySelector('.quantity');
    if (target.classList.contains('plus-1')) {
      quantity.textContent = parseInt(quantity.textContent) + 1;
    } else if (target.classList.contains('minus-1')) {
      const newQuantity = parseInt(quantity.textContent) - 1;
      if (newQuantity === 0) {
        product.remove();
      } else {
        quantity.textContent = newQuantity;
      }
    } else if (target.classList.contains('delete')) {
      product.remove();
    }
    saveCartToLocalStorage();
    updateSummary();
  });
}

const checkoutList = document.querySelector('.list-container');

if (!checkoutList) {
  throw new Error('Cannot find checkout list element');
}

if (cartData && cartData.length) {
  for (const item of cartData) {
    const { productName, productPrice, imgSrc, quantity } = item;

    const listItem = document.createElement('div');
    listItem.classList.add('checkout-item');

    const figure = document.createElement('figure')
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa", "fa-minus-circle", "delete");

    const itemImg = document.createElement('img');
    itemImg.setAttribute('src', imgSrc);
    itemImg.setAttribute('alt', productName);
    figure.appendChild(deleteIcon);
    figure.appendChild(itemImg);

    const description = document.createElement("div");
    description.classList.add("description");

    const itemName = document.createElement('h4');
    itemName.classList.add('checkout-item__name');
    itemName.textContent = productName;
    description.appendChild(itemName);

    const productPriceP = document.createElement("p");
    const minusButton = document.createElement("i");
    minusButton.classList.add("fa", "fa-minus-square", "minus-1", "cartBtn");
    productPriceP.appendChild(minusButton);
    productPriceP.appendChild(document.createTextNode('\u00A0\u00A0'));

    const quantitySpan = document.createElement("span");
    quantitySpan.classList.add("quantity");
    quantitySpan.textContent = quantity;
    productPriceP.appendChild(quantitySpan);
    productPriceP.appendChild(document.createTextNode("x\u00A0\u00A0"));

    const plusButton = document.createElement("i");
    plusButton.classList.add("fa", "fa-plus-square", "plus-1", "cartBtn");
    productPriceP.appendChild(plusButton);
    description.appendChild(productPriceP);

    const priceP = document.createElement('p');
    priceP.textContent = productPrice;
    description.appendChild(priceP)

    listItem.appendChild(figure);
    listItem.appendChild(description);

    checkoutList.appendChild(listItem);
  }
  updateSummary();
  addOrRemoveCartItem();
} else {
  console.log('No items in cart');
}

// Get form and form inputs
const mainArea = document.querySelector('.payment-form')
const form = document.querySelector('form');
const cardHolderInput = document.getElementById('card-holder');
const cardNumberInput = document.getElementById('card-number');
const expirationMonthInput = document.getElementById('month');
const expirationYearInput = document.getElementById('year');
const cvcInput = document.getElementById('cvc');

// Add event listener to form submit event
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form from submitting by default
  
  // Validate form inputs
  if (cardHolderInput.value.trim() === '') {
    alert('Please enter a valid card holder name.');
    cardHolderInput.focus();
    return;
  }

  if (cardNumberInput.value.trim() === '' || !/^\d{16}$/.test(cardNumberInput.value)) {
    alert('Please enter a valid 16-digit card number.');
    cardNumberInput.focus();
    return;
  }

  if (expirationMonthInput.value.trim() === '' || !/^\d{1,2}$/.test(expirationMonthInput.value) || Number(expirationMonthInput.value) > 12) {
    alert('Please enter a valid expiration month.');
    expirationMonthInput.focus();
    return;
  }

  if (expirationYearInput.value.trim() === '' || !/^\d{2}$/.test(expirationYearInput.value) || Number(expirationYearInput.value) < 23) {
    alert('Please enter a valid expiration year.');
    expirationYearInput.focus();
    return;
  }

  if (cvcInput.value.trim() === '' || !/^\d{3}$/.test(cvcInput.value)) {
    alert('Please enter a valid 3-digit CVC code.');
    cvcInput.focus();
    return;
  }

  const success = document.createElement('div')
  success.classList.add('success', 'container');

  const successMessage = document.createElement('p')
  successMessage.textContent = 'Your Order has Been Placed! Please Check your Email'
  success.appendChild(successMessage)

  const anchor = document.createElement('a')
  anchor.setAttribute('href', './index.html')

  const homeBtn = document.createElement('button');
  homeBtn.classList.add('homeBtn');
  homeBtn.textContent = 'Back Home'
  anchor.appendChild(homeBtn)
  success.appendChild(anchor);

  mainArea.innerHTML = ''
  mainArea.appendChild(success);
  localStorage.removeItem('cart');
});


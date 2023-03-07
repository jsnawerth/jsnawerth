//=====================Set the work of the search button==========================//
export const setSearchFunctionality = (containerId) => {
    const icon = document.querySelector('.icon');
    const search = document.querySelector('.search');
    const clear = document.querySelector('.clear');
    const mySearch = document.getElementById("mySearch");
  
    icon.onclick = () => {
      search.classList.toggle('open');
      mySearch.focus();
    }
  
    clear.onclick = () => {
      mySearch.value = '';
    }
  
    const prodCont = document.querySelector(`#${containerId}`);
  
    mySearch.addEventListener('keydown', (event) => {
      if (event.key === "Enter") {
        const inputValue = mySearch.value.toLowerCase();
        let found = false;
  
        // loop through each product and check if it matches the search query
        prodCont.querySelectorAll('.product').forEach(product => {
          const productName = product.querySelector('.p-name').textContent.toLowerCase();
          const productCat = product.querySelector('span').textContent.toLowerCase();
          if (productName.includes(inputValue) || productCat.includes(inputValue)) {
            product.style.display = '';
            found = true;
          } else {
            product.style.display = 'none';
          }
        });
  
        // show message if no products were found
        const noProductsFound = document.querySelector('.noProductsFound');
        if (!found) {
          if (!noProductsFound) {
            const message = document.createElement('div');
            message.classList.add('noProductsFound');
            message.textContent = 'No items found';
            prodCont.appendChild(message);
          }
        } else {
          if (noProductsFound) {
            prodCont.removeChild(noProductsFound);
          }
        }
      }
    });
}

//==================== Show All ====================================//
export const showAll = () => {
  const prodCont = document.querySelector(`#container`);
  prodCont.querySelectorAll('.product').forEach(product => {
      product.style.display = '';
  });

}

//=======================Updates cart summary=====================================//
const subtotal = document.querySelector('.subtotal span');
let total = parseFloat(subtotal.textContent);
const cart = document.querySelector('#cart-ammount'); 
const cartWrapper = document.querySelector('.list-wrapper');
const noProducts = document.querySelector('.noProducts');

export const updateSummary = (value)=>{
  if (typeof value === 'number') {
    // value is a product price, add it to the total
    total += parseFloat(value);
  } else {
    // value is a total, update the total directly
    total = parseFloat(value);
  }
  
  const summarySpan = document.querySelector('.summary span');
  summarySpan.textContent = cartNum;

  subtotal.textContent = total.toFixed(2);
  if (cart){
    if(cartNum>0){
      cart.style.display = 'inline-flex';
      cart.textContent = cartNum;
      cartWrapper.style.display = 'block';
      noProducts.style.display = 'none'
    }else{
      cart.style.display = '';
      cartWrapper.style.display = '';
      noProducts.style.display = ''
    }
  }
  
}
//====================Creates a product  and add it in the cart===================//
let cartNum = 0;

const listContainer = document.querySelector('.list-container');

const createCartProduct = (productName, productPrice, imgSrc, quantity=1) => {
  const cartProduct = document.createElement("div");
  cartProduct.classList.add("cart-product");

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa", "fa-minus-circle", "delete", "cartBtn");
  cartProduct.appendChild(deleteIcon);

  const img = document.createElement("img");
  img.src = imgSrc;
  img.setAttribute("alt", `${productName}`);
  cartProduct.appendChild(img);

  const description = document.createElement("div");
  description.classList.add("description");

  const productNameP = document.createElement("p");
  productNameP.textContent = productName;
  description.appendChild(productNameP);

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

  cartProduct.appendChild(description);

  // Append cart item to parent element
  listContainer.appendChild(cartProduct);
}


const saveCartToLocalStorage = () => {
  const cartItems = document.querySelectorAll('.cart-product');
  const cart = [];
  cartItems.forEach(cartItem => {
    const productName = cartItem.querySelector('.description p:first-child').textContent;
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


//this will add the product to the cart list checking if the product is not already in it
export const addProduct = (product) => {
  const productName = product.querySelector('.p-name').textContent;
  const productPrice = product.querySelector('.price').textContent;
  const imgSrc = product.querySelector('img').getAttribute('src');
  cartNum++;
  // Iterate over existing cart items to check if item already exists
  let itemAlreadyInCart = false;
  const cartItems = document.querySelectorAll('.cart-product');
  
  cartItems.forEach(cartItem => {
    const existingItemName = cartItem.querySelector('.description p:first-child').textContent;
    if (existingItemName === productName) {
      // Update quantity of existing cart item
      const existingQuantitySpan = cartItem.querySelector('.description span');
      const existingQuantity = parseInt(existingQuantitySpan.textContent);
      existingQuantitySpan.textContent = `${existingQuantity + 1}`;
      itemAlreadyInCart = true;
    }
  });

  // Create cart item element if item not already in cart
  if (!itemAlreadyInCart) {
    createCartProduct(productName, productPrice, imgSrc);
  }
  updateSummary(parseFloat(productPrice));
  saveCartToLocalStorage();
  const popup = document.getElementById('cartPopup');
  popup.style.visibility = 'visible';
  popup.textContent = `${productName} has been added to your cart`
  setTimeout(() => {
    popup.style.visibility = '';
  }, 1500);

};
//==== This set the funtionaliy of the buttons plus or minus inside the cart ===//
export const addOrRemoveCartItem = () => {
  const listContainer = document.querySelector('.list-container');
  listContainer.addEventListener('click', (event) => {
    const target = event.target;
    const product = target.closest('.cart-product');
    const quantity = product.querySelector('.quantity') || product.querySelector('.description span');
    const price = product.querySelector('.description p:last-child').textContent;
    if (target.classList.contains('plus-1')) {
      cartNum++;
      if(cart){
        cart.textContent = cartNum;
      }
      document.querySelector('.summary span').textContent = cartNum;
      quantity.textContent = parseInt(quantity.textContent) + 1;
      updateSummary(parseFloat(price));
    } else if (target.classList.contains('minus-1')) {
      cartNum--;
      if(cart){
        cart.textContent = cartNum;
      }
      document.querySelector('.summary span').textContent = cartNum;
      const newQuantity = parseInt(quantity.textContent) - 1;
      if (newQuantity === 0) {
        product.remove();
      } else {
        quantity.textContent = newQuantity;
      }
      updateSummary(-parseFloat(price));
    } else if (target.classList.contains('delete')) {
      const numToDelete = parseInt(quantity.textContent);
      cartNum -= numToDelete
      product.remove();
      updateSummary(-(numToDelete * parseFloat(price)));
    }
    saveCartToLocalStorage();
  });
}


export const loadCart = () => {
  let cart = [];
  const cartData = JSON.parse(localStorage.getItem('cart'));
  if (cartData) {
    cart = cartData;
  }
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    createCartProduct(item.productName, item.productPrice, item.imgSrc, item.quantity);
  }
  let totalQuantity = 0;
  let totalPrice = 0;
  for (let item of cart) {
    totalQuantity += item.quantity;
    totalPrice += parseFloat(item.productPrice) * item.quantity;
  }
  cartNum = totalQuantity;
  total = totalPrice.toString();
  updateSummary(total);
}



//=================Creates a product to add in the wishlist=======================//
const wishlistWrapper = document.querySelector('.wish-container');
const wishlist = document.querySelector('#wish-ammount');

let wishNum = parseInt(document.getElementById('wish-ammount').textContent)
if(isNaN(wishNum)){
  wishNum = 0;
}


const createWishlistProduct = (productName, productPrice, imgSrc) => {
  const wishlistProduct = document.createElement("div");
  wishlistProduct.classList.add("wishlist-product");

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa", "fa-minus-circle", "delete", "wishlistBtn");
  wishlistProduct.appendChild(deleteIcon);

  const img = document.createElement("img");
  img.src = imgSrc;
  img.setAttribute("alt", `${productName}`);
  wishlistProduct.appendChild(img);

  const description = document.createElement("div");
  description.classList.add("description");

  const productNameP = document.createElement("p");
  productNameP.textContent = productName;
  description.appendChild(productNameP);

  const productPriceP = document.createElement("p");
  productPriceP.textContent = productPrice;
  description.appendChild(productPriceP);

  wishlistProduct.appendChild(description);

  // Append wishlist item to parent element
  wishlistWrapper.appendChild(wishlistProduct);
};

const wishlistData = () => {
  const wishlistData = wishlistWrapper.innerHTML;
  localStorage.setItem('wishlist', wishlistData);
}

export const addProductToWishlistIfNotExists = (product,wishlistContainer) => {
  const productName = product.querySelector('.p-name').textContent;
  const productPrice = product.querySelector('.price').textContent;
  const imgSrc = product.querySelector('img').getAttribute('src');

  // Iterate over existing wishlist items to check if item already exists
  const wishlistItems = wishlistContainer.querySelectorAll('.wishlist-product');
  let exists = false;
  wishlistItems.forEach((wishlistItem) => {
    const existingItemName = wishlistItem.querySelector('.description p:first-child').textContent;
    if (existingItemName === productName) {
      exists = true;
      wishlistItem.remove();
      wishNum--;
    }
  });

  // Add item to wishlist if not already in wishlist
  if (!exists) {
    createWishlistProduct(productName, productPrice, imgSrc);
    wishNum++;
    wishlist.style.display = 'inline-flex';

    const popup = document.getElementById('wishPopup');
    popup.style.visibility = 'visible';
    popup.textContent = `${productName} has been added to your wishlist`
    setTimeout(() => {
      popup.style.visibility = '';
    }, 1500);
  }
  
  // Save wishlist to local storage
  wishlistData();
  
  wishlist.textContent = wishNum;
  return wishNum;
};
// Check if wishlist data exists in local storage and recreate the wishlist
export const loadWishlist = () => {
  if (localStorage.getItem('wishlist')) {
    const wishlistContainer = document.querySelector('.wishlist-wrapper');
    const noProductsWish = document.querySelector('.noProductsWish');
    wishlistWrapper.innerHTML = localStorage.getItem('wishlist');
    wishNum = wishlistWrapper.querySelectorAll('.wishlist-product').length;
    wishlist.style.display = 'inline-flex';
    wishlist.textContent = wishNum;
    wishlistContainer.style.display = 'block';
    noProductsWish.style.display = 'none';
    return wishNum;
  }
}

//================ Remove items from Wishlist =====================//
export const removeWishlistItem = (wishlistContainer) => {
  const noProductsWish = document.querySelector('.noProductsWish');
  wishlistContainer.addEventListener('click', (event) => {
    const target = event.target;
    const product = target.closest('.wishlist-product');
    if (target.classList.contains('delete')) {
      wishNum --;
      wishlist.textContent = wishNum;
      const productName = product.querySelector('.description p:first-child').textContent;
      const products = document.querySelectorAll('.product');
      products.forEach(productItem => {
        if(productItem.querySelector('.p-name').textContent === productName){
          const heart = productItem.querySelector('.wishBtn');
          heart.classList.replace('fa-heart', 'fa-heart-o')
        }
      })
      product.remove();
      wishlistData();
    }
    if(wishNum === 0){
      wishlistContainer.style.display = '';
      wishlist.style.display = '';
      noProductsWish.style.display = '';
    }
  });
}
//========Adds border to card product when hovering over button area==============//
export const hoverbuttons = () =>{
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    const sibling = button.previousElementSibling;

    button.addEventListener('mouseover', () => {
      if (sibling && sibling.classList.contains('card')) {
        sibling.style.border = '2px solid rgba(20, 114, 168, 0.5)';
      }
    });

    button.addEventListener('mouseout', () => {
      if (sibling && sibling.classList.contains('card')) {
        sibling.style.border = '';
      }
    });
  });
}

//========================= Set the Categories Filter ===========================//
export const categoriesFilter=() => {
  const categories = document.querySelectorAll('.categorie');
  categories.forEach(categorie => {
    categorie.addEventListener('click', () => {
      const id = categorie.getAttribute('id');
      const prodCont = document.getElementById('container');
      prodCont.querySelectorAll('.product').forEach(product => {
        const productCat = product.querySelector('span').textContent.toLowerCase();
        if (productCat.includes(id)) {
          product.style.display = '';
        } else {
          product.style.display = 'none';
        }
      });
    })
  })
}


//=================== Toggle Lis or Grid View =====================//
export const toggleGridList = () => {
  const productsContainer = document.querySelector('#container');
  const productItems = document.querySelectorAll('.productItem');
  const gridBtn = document.querySelector('#dispGrid');
  const listBtn = document.querySelector('#dispList');
  const btnGrid = document.querySelectorAll('.btn');
  const btnlist = document.querySelectorAll('.btn-list');

  gridBtn.addEventListener('click', () => {
    productsContainer.classList.replace("list", "grid");
    productItems.forEach((product) => {
      product.classList.replace('show-list', 'card')
    });
    btnlist.forEach(button => {
      button.style.position = '';
      button.style.visibility = '';
    });
    btnGrid.forEach(button => {
      button.style.display = '';
    });
  })

  listBtn.addEventListener('click', () => {
    productsContainer.classList.replace("grid", "list");
    productItems.forEach((product) => {
      product.classList.replace('card', 'show-list')
    })
    btnGrid.forEach(button => {
      button.style.display = 'none';
    })
    btnlist.forEach(button => {
      button.style.position = 'static';
      button.style.visibility = 'visible';
    });
  })
}


//======================== Dropdown Mobile Menu ==========================//
export const dropdownMobile = () => {
  const menuIcon = document.getElementById('mobile-btn');
  const mobileMenu = document.getElementById('mobileMenu');

  menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('showMobileMenu')
  })
}

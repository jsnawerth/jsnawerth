const cart = document.querySelector('#cart-ammount');
let cartNum = 0;
//============= Import and set the functionality of the searchBar ================//
import {dropdownMobile, loadCart, loadWishlist, removeWishlistItem, setSearchFunctionality} from './help-functions/helperFuntions.js'
if(document.getElementById('container')){
  setSearchFunctionality('container');
}

//======== Adds border to card product when hovering over button area =============//
import { hoverbuttons } from './help-functions/helperFuntions.js';

//============= Import function to add products to wishlist ======================//
import { addProductToWishlistIfNotExists } from './help-functions/helperFuntions.js';

//============ Import and creation of products from a json file ==================//
import { buildProducts } from './help-functions/buldProducts.js'

//====== Import function to create a product that will be added in the cart ======//
import { addProduct } from './help-functions/helperFuntions.js';

//============= Import funtion to add or remove item from the cart ===============//
import { addOrRemoveCartItem } from './help-functions/helperFuntions.js';

//============= Import function to show or hide the wishlist or cart ============//
import { toggleCartOrWishlist } from './help-functions/dropdownCart.js';

//=================== Import function to show All the products ==================//
import { showAll } from './help-functions/helperFuntions.js';

//toggle list and grid view
import { toggleGridList } from './help-functions/helperFuntions.js';

dropdownMobile();

let productsData =[];
fetch('./resources/products.json')
.then(response => response.json())
.then(data => {
  productsData = data.products; // store data in a variable
  if(document.getElementById('container')){
    buildProducts(productsData);  
  }
    
  
  //==============Add or Remove Products from the wishlist =====================//
  const wishlistButtonList = document.querySelectorAll('.heart');
  const wishlistContainer = document.querySelector('.wishlist-wrapper');
  const noProductsWish = document.querySelector('.noProductsWish');
  const wishlist = document.querySelector('#wish-ammount');

  // Check if wishlist data exists in local storage and recreate the wishlist
  let wishNum = parseInt(loadWishlist());
  if(isNaN(wishNum)){
    wishNum = 0;
  }
  hoverbuttons();
  if(wishNum === 0){
    wishlistContainer.style.display = '';
    wishlist.style.display = '';
    noProductsWish.style.display = '';
  }
  
  wishlistButtonList.forEach((button) => {
    button.addEventListener('click', (event) => {
      const product = event.target.closest('.product');
      if(button.classList.contains('fa-heart-o')){
        button.classList.replace('fa-heart-o', 'fa-heart')
        wishNum = addProductToWishlistIfNotExists(product, wishlistContainer, wishNum);
        wishlistContainer.style.display = 'block';
      }else{
        button.classList.replace('fa-heart', 'fa-heart-o')
        wishNum = addProductToWishlistIfNotExists(product, wishlistContainer, wishNum);
      }
      if(wishNum > 0){
        noProductsWish.style.display = 'none';
      }else if(wishNum === 0){
        wishlistContainer.style.display = '';
        wishlist.style.display = '';
        noProductsWish.style.display = '';
      }
    });
  });

  //=================Remove items in the wishlist============================//
  if(wishlistContainer){
    wishNum = removeWishlistItem(wishlistContainer);
  }


  const checkWishlist = () => {
    const wishlistItems = document.querySelectorAll('.wishlist-product')
    const productNames = document.querySelectorAll('#container .p-name')
  
    productNames.forEach(productName => {
      wishlistItems.forEach(wishlistItem => {
        const existingItemName = wishlistItem.querySelector('.description p:first-child').textContent
        if (existingItemName === productName.textContent) {
          const wishBtn = productName.closest('.productItem').querySelector('.heart')
          wishBtn.classList.replace('fa-heart-o', 'fa-heart')
        }
      })
    })
  }
  checkWishlist();
  //================== Adds product to cart ==================================//
  const addButtonList = document.querySelectorAll('.add');
  addButtonList.forEach(button => {
    button.addEventListener('click', (event) => {
      const product = event.target.closest('.product');
      addProduct(product);
    }); 
  });

  addOrRemoveCartItem();
  if(document.getElementById('container')){
    toggleGridList();
  }
  toggleCartOrWishlist();

  loadCart();

  //=========== Show All Products ===================//
  const showAllBtn = document.querySelector('#showAll');
  if(showAllBtn){
    showAllBtn.addEventListener('click',() => {
      showAll();
    })
  }
  
})
.catch(error => console.error(error));

//========== Set the funtionallity of the categories filter ========//
import { categoriesFilter } from './help-functions/helperFuntions.js';
categoriesFilter();

// hide the navbar when scrolling
window.addEventListener('scroll',()=>{
  const navbar = document.querySelector('.bottom-nav');
  const topBar = document.querySelector('.contact-info');
  
  const scrollValue = window.scrollY;
  
  if (scrollValue > 100) {
    navbar.style.display = 'none';
    topBar.style.display = 'none';
  } else {
    navbar.style.display = '';
    topBar.style.display = '';
  }
});

function setScrollPaddingTop() {
  const links = document.querySelectorAll('a[href^="#"]');

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
      const html = document.querySelector("html");
      html.style.scrollPaddingTop = '140px';
      setTimeout(() => {
        html.style.scrollPaddingTop = '';
      }, 200);
    });
  }
}

setScrollPaddingTop();
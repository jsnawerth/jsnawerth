export const toggleCartOrWishlist = () => {
    const cartBtns = document.querySelectorAll('.cartDropdown');
    const cartMenu = document.querySelector('.cart-container');
    const wishBtns = document.querySelectorAll('.wishDropdown');
    const wishMenu = document.querySelector('.wishlist-container');
  
    cartBtns.forEach((cartBtn) => {
      cartBtn.addEventListener('click', () => {
        if (wishMenu.classList.contains('showMenu')) {
          wishMenu.classList.remove('showMenu');
        }
        cartMenu.classList.toggle('showMenu');
      });
    });
  
    wishBtns.forEach((wishBtn) => {
      wishBtn.addEventListener('click', () => {
        if (cartMenu.classList.contains('showMenu')) {
          cartMenu.classList.remove('showMenu');
        }
        wishMenu.classList.toggle('showMenu');
      });
    });
  if(document.getElementById('container')){
    document.addEventListener('click', (event) => {
      const clickedElement = event.target;
      let clickedInside = false;
      cartBtns.forEach((cartBtn) => {
        if (cartBtn.contains(clickedElement)) {
          clickedInside = true;
        }
      });
      wishBtns.forEach((wishBtn) => {
        if (wishBtn.contains(clickedElement)) {
          clickedInside = true;
        }
      });
  
      if (!clickedInside && cartMenu.classList.contains('showMenu') && !cartMenu.contains(clickedElement) && !clickedElement.classList.contains('cartBtn')) {
        cartMenu.classList.remove('showMenu');
      }

      if (!clickedInside && wishMenu.classList.contains('showMenu') && !wishMenu.contains(clickedElement) && !clickedElement.classList.contains('wishlistBtn')) {
        wishMenu.classList.remove('showMenu');
      }
    });
  }
    
  };
  
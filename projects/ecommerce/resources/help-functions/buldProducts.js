const buildProducts = (productsData) => {
    const container = document.getElementById('container');
  
    productsData.forEach((item) => {
      const product = document.createElement('div');
      product.classList.add('product');
      const productItem = document.createElement('div');
      productItem.classList.add('productItem', 'card');
      
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      img.src = item.product.image;
      figure.appendChild(img);
      productItem.appendChild(figure);
      
      const descriptionList = document.createElement('div');
      descriptionList.classList.add('description-list');
      const category = document.createElement('span');
      category.textContent = item.product.category;
      const name = document.createElement('h3');
      name.classList.add('p-name');
      name.textContent = item.product.name;
      const price = document.createElement('p');
      price.classList.add('price');
      price.textContent = item.product.price;
      const button = document.createElement('button');
      button.classList.add('add', 'btn-list');
      button.textContent = item.product.button;
      descriptionList.appendChild(category);
      descriptionList.appendChild(name);
      descriptionList.appendChild(price);
      descriptionList.appendChild(button);
      productItem.appendChild(descriptionList);
      
      const wishBtn = document.createElement('i');
      wishBtn.classList.add('fa', 'fa-heart-o', 'heart', 'wishBtn');
      const wishlist = document.createElement('p');
      wishlist.classList.add('wishlist');
      wishlist.textContent = 'Add to Wishlist';
      wishBtn.appendChild(wishlist);
      productItem.appendChild(wishBtn);
      
      /*const cartBtn = document.createElement('i');
      cartBtn.classList.add('fa', 'fa-eye', 'eye', 'cartBtn');
      const look = document.createElement('p');
      look.classList.add('look');
      look.textContent = 'Quick Look';
      cartBtn.appendChild(look);
      productItem.appendChild(cartBtn);*/
      
      product.appendChild(productItem);
      
      const btn = document.createElement('div');
      btn.classList.add('btn');
      const addBtn = document.createElement('button');
      addBtn.classList.add('add');
      addBtn.textContent = item.product.button;
      btn.appendChild(addBtn);
      product.appendChild(btn);
      
      container.appendChild(product);
    });
  }
  
  export { buildProducts };
  
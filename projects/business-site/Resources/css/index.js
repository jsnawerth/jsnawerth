const menuBox = document.getElementById('menu');
const menuList = document.getElementById('list-menu');

function toggleMenu() {  
    if(menuList.style.display == "flex") { // if is menuBox displayed, hide it
      menuList.style.display = "none";
    }
    else { // if is menuBox hidden, display it
      menuList.style.display = "flex";
    }
  }

menuBox.addEventListener('click', toggleMenu);

[].forEach.call(document.querySelectorAll('.nav-mobile'), function (el) {
    el.addEventListener('click', toggleMenu);
    });

    
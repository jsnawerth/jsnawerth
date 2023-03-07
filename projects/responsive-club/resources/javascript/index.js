const menuBox = document.getElementById('menu');
const menuList = document.getElementById('list-menu');

function toggleMenu() {  
    if(menuList.style.display == "block") { // if is menuBox displayed, hide it
      menuList.style.display = "none";
    }
    else { // if is menuBox hidden, display it
      menuList.style.display = "block";
    }
  }

menuBox.addEventListener('click', toggleMenu);

[].forEach.call(document.querySelectorAll('.list-menu'), function (el) {
    el.addEventListener('click', toggleMenu);
    });
const text1 = document.getElementById('textAnimate');

const textLoad = () => {
    setTimeout(()=>{
        text1.textContent = 'Web Designer';
    }, 0)
    setTimeout(()=>{
        text1.textContent = 'Freelancer';
    }, 1500)
    setTimeout(()=>{
        text1.textContent = 'Web Developer';
    }, 2500)
}

textLoad();
setInterval(textLoad, 4000)

const changeBg=()=>{
    let navbar = document.getElementById('navbar');
    let scrollValue = window.scrollY;
    if(scrollValue < 200){
        navbar.classList.remove('bgColor');
    }else{
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll',changeBg)

// Dropmenu
const menuBtn = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
const dropMenu = () => {
    if(menu.style.display === 'none'){
        menu.style.display='block';
    }else{
        menu.style.display = 'none';
    }
}

menuBtn.addEventListener('click',dropMenu);

    
    
window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 941px)").matches) {
        menu.style.display = 'none';
    } else {
        [].forEach.call(document.querySelectorAll('.menu'), function (el) {
            el.addEventListener('click', dropMenu);
            });
    }
    })

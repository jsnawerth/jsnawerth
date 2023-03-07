//button for light or dark mode
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
btn2.style.display = "none";
let dark = false; 
//buttons for change colors code
const hex = document.getElementById('hex');
const rgb = document.getElementById('rgb');
const hsl = document.getElementById('hsl');

//dark or light mode!
function darkMode(id){
    if (id.target.id == 'btn1'){
        
        document.body.style.backgroundColor = 'black';
        document.body.style.color = "white";
        document.getElementById('header').style.color ="white";
        document.getElementById('header').style.backgroundColor ="rgb(40, 40, 45)";
        document.getElementById('footer').style.color ="white";
        document.getElementById('footer').style.backgroundColor ="rgb(40, 40, 45)";
        btn1.style.display = "none";
        btn2.style.display = "inline-block";
        dark = true;
        [].forEach.call(document.querySelectorAll('.btn-color'), function (es) {
            es.style.backgroundColor = 'rgb(40, 40, 45)';
            });
        [].forEach.call(document.querySelectorAll('.active'), function (el) {
            el.style.backgroundColor = 'gainsboro';
            });
        [].forEach.call(document.querySelectorAll('.inactive'), function (el) {
            el.style.backgroundColor = 'rgb(40, 40, 45)';
            });
    //change the background of the heading section
        [].forEach.call(document.querySelectorAll('.flex-color'), function (es) {
            es.style.backgroundColor = 'rgb(40, 40, 45)';
            });
    }else if (id.target.id == 'btn2'){
        document.body.style.backgroundColor = 'white';
        document.body.style.color = "black";
        document.getElementById('header').style.color ="gray";
        document.getElementById('header').style.backgroundColor ="whitesmoke";
        document.getElementById('footer').style.color ="gray";
        document.getElementById('footer').style.backgroundColor ="whitesmoke";
        btn2.style.display = "none";
        btn1.style.display = "inline-block"
        dark = false;
        [].forEach.call(document.querySelectorAll('.btn-color'), function (es) {
            es.style.backgroundColor = 'white';
            });
        
        [].forEach.call(document.querySelectorAll('.inactive'), function (el) {
                el.style.backgroundColor = 'white';
                });
        [].forEach.call(document.querySelectorAll('.active'), function (el) {
            el.style.backgroundColor = 'gainsboro';
            });
        //change the background of the heading section
        [].forEach.call(document.querySelectorAll('.flex-color'), function (es) {
            es.style.backgroundColor = 'whitesmoke';
            });
    }
}
btn1.addEventListener('click', darkMode);
btn2.addEventListener('click', darkMode);

//color hex, rgb or hsl display
function colorType(id){
    if (dark == false){
        if (id.target.id == 'hex'){
            [].forEach.call(document.querySelectorAll('.btn-color'), function (el) {
                el.classList.remove("active");
                });
            [].forEach.call(document.querySelectorAll('.btn-color'), function (el) {
                el.classList.remove("inactive");
                });
            hex.classList.add("active");
            hex.style.backgroundColor = 'gainsboro';
            rgb.classList.add("inactive");
            rgb.style.backgroundColor = 'white';
            hsl.classList.add("inactive");
            hsl.style.backgroundColor = 'white';
            [].forEach.call(document.querySelectorAll('.rgb'), function (el) {
                el.style.display = 'none';
                });
            [].forEach.call(document.querySelectorAll('.hsl'), function (el) {
                el.style.display = 'none';
                });
            [].forEach.call(document.querySelectorAll('.hex'), function (el) {
                el.style.display = 'block';
                });
        }else if (id.target.id == 'rgb'){
            [].forEach.call(document.querySelectorAll('.btn-color'), function (el) {
                el.classList.remove("active");
                });
            [].forEach.call(document.querySelectorAll('.btn-color'), function (el) {
                el.classList.remove("inactive");
                });
            rgb.classList.add("active");
            rgb.style.backgroundColor = 'gainsboro';
            hex.classList.add("inactive");
            hex.style.backgroundColor = 'white';
            hsl.classList.add("inactive");
            hsl.style.backgroundColor = 'white';
            [].forEach.call(document.querySelectorAll('.rgb'), function (el) {
                el.style.display = 'block';
            });
            [].forEach.call(document.querySelectorAll('.hsl'), function (el) {
                el.style.display = 'none';
            });
            [].forEach.call(document.querySelectorAll('.hex'), function (el) {
                el.style.display = 'none';
            });
        }else if (id.target.id == 'hsl'){
            [].forEach.call(document.querySelectorAll('.btn-color'), function (el) {
                el.classList.remove("active");
                });
            [].forEach.call(document.querySelectorAll('.btn-color'), function (el) {
                el.classList.remove("inactive");
                });
            hsl.classList.add("active");
            hsl.style.backgroundColor = 'gainsboro';
            hex.classList.add("inactive");
            hex.style.backgroundColor = 'white';
            rgb.classList.add("inactive");
            rgb.style.backgroundColor = 'white';
            [].forEach.call(document.querySelectorAll('.rgb'), function (el) {
                el.style.display = 'none';
            });
            [].forEach.call(document.querySelectorAll('.hsl'), function (el) {
                el.style.display = 'block';
            });
            [].forEach.call(document.querySelectorAll('.hex'), function (el) {
                el.style.display = 'none';
            });
        }
    }else if (dark == true){
        if (id.target.id == 'hex'){
            [].forEach.call(document.querySelectorAll('.btn-color'), function (el) {
                el.classList.remove("active");
                });
            [].forEach.call(document.querySelectorAll('.btn-color'), function (el) {
                el.classList.remove("inactive");
                });
            hsl.classList.add("inactive");
            hsl.style.backgroundColor = 'rgb(40, 40, 45)';
            hex.classList.add("active");
            hex.style.backgroundColor = 'gainsboro';
            rgb.classList.add("inactive");
            rgb.style.backgroundColor = 'rgb(40, 40, 45)';
            [].forEach.call(document.querySelectorAll('.rgb'), function (el) {
                el.style.display = 'none';
                });
            [].forEach.call(document.querySelectorAll('.hsl'), function (el) {
                el.style.display = 'none';
                });
            [].forEach.call(document.querySelectorAll('.hex'), function (el) {
                el.style.display = 'block';
                });
            
        }else if (id.target.id == 'rgb'){
            [].forEach.call(document.querySelectorAll('.btn-color'), function (el) {
                el.classList.remove("active");
                });
            [].forEach.call(document.querySelectorAll('.btn-color'), function (el) {
                el.classList.remove("inactive");
                });
            hsl.classList.add("inactive");
            hsl.style.backgroundColor = 'rgb(40, 40, 45)';
            hex.classList.add("inactive");
            hex.style.backgroundColor = 'rgb(40, 40, 45)';
            rgb.classList.add("active");
            rgb.style.backgroundColor = 'gainsboro';
            [].forEach.call(document.querySelectorAll('.rgb'), function (el) {
                el.style.display = 'block';
            });
            [].forEach.call(document.querySelectorAll('.hsl'), function (el) {
                el.style.display = 'none';
            });
            [].forEach.call(document.querySelectorAll('.hex'), function (el) {
                el.style.display = 'none';
            });
        }else if (id.target.id == 'hsl'){
            [].forEach.call(document.querySelectorAll('.btn-color'), function (el) {
                el.classList.remove("active");
                });
            [].forEach.call(document.querySelectorAll('.btn-color'), function (el) {
                el.classList.remove("inactive");
                });
            hsl.classList.add("active");
            hsl.style.backgroundColor = 'gainsboro';
            hex.classList.add("inactive");
            hex.style.backgroundColor = 'rgb(40, 40, 45)';
            rgb.classList.add("inactive");
            rgb.style.backgroundColor = 'rgb(40, 40, 45)';
            [].forEach.call(document.querySelectorAll('.rgb'), function (el) {
                el.style.display = 'none';
            });
            [].forEach.call(document.querySelectorAll('.hsl'), function (el) {
                el.style.display = 'block';
            });
            [].forEach.call(document.querySelectorAll('.hex'), function (el) {
                el.style.display = 'none';
            });
        }
    }
}

hex.addEventListener('click', colorType);
rgb.addEventListener('click', colorType);
hsl.addEventListener('click', colorType);
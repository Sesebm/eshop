import { list } from './lista.js';

function mostrarelementos() {
    const showBox = document.getElementById("showbox");
    let html = "";
    for (let i = 0; i < list.length; i++) {
        html += `<article class="productosjs">
                 <div class="imagen_tarjeta"><img src="${list[i].img}" alt="${list[i].titulo}" class="imgtarjeta"></div>
                 <button class="btn_agregar" data-id="${list[i].id}">+</button>
                 <div class="info_tarjeta">
                 
                 <p class="grande">${list[i].titulo} </p>
                 </div>
                     
        </article>`;
    }
    showBox.innerHTML = html;

}
mostrarelementos()
let collection = [];
let element;
document.addEventListener("click", function (event) {
    console.log(event.target.dataset);
});

document.querySelector('.cerrar1').addEventListener('click', function (event) {
    document.querySelector('.checkbox').checked = false;
});

document.querySelector('.cerrar2').addEventListener('click', function (event) {
    document.querySelector('.checkbox').checked = false;
});

document.querySelector('.all.barra').addEventListener('click', function (event) {
    console.log('hola');
    const showBox = document.getElementById("showbox");
    let html = "";
    for (let i = 0; i < list.length; i++) {
        html += `<article class="productosjs">
                     <div class="imagen_tarjeta"><img src="${list[i].img}" alt="${list[i].titulo}" class="imgtarjeta"></div>
                     <button class="btn_agregar" data-id="${list[i].id}">+</button>
                     <div class="info_tarjeta">
                     
                     <p>${list[i].titulo} </p>
                     </div>
                         
            </article>`;
    }    showBox.innerHTML = html;
});

 document.querySelector('.hoodies.barra').addEventListener('click', function (event) {
    const showBox = document.getElementById("showbox");
    let html = "";
    for (let i = 0; i < list.length; i++) {
        if(list[i].id==1){
        html += `<article class="productosjs">
                     <div class="imagen_tarjeta"><img src="${list[i].img}" alt="${list[i].titulo}" class="imgtarjeta"></div>
                     <button class="btn_agregar" data-id="${list[i].id}">+</button>
                     <div class="info_tarjeta">
                     
                     <p>${list[i].titulo} </p>
                     </div>
                         
            </article>`;}    showBox.innerHTML = html;
    }
}); 

document.querySelector('.shirts.barra').addEventListener('click', function (event) {
    const showBox = document.getElementById("showbox");
    let html = "";
    for (let i = 0; i < list.length; i++) {
        if(list[i].id==2){
        html += `<article class="productosjs">
                     <div class="imagen_tarjeta"><img src="${list[i].img}" alt="${list[i].titulo}" class="imgtarjeta"></div>
                     <button class="btn_agregar" data-id="${list[i].id}">+</button>
                     <div class="info_tarjeta">
                     
                     <p>${list[i].titulo} </p>
                     </div>
                         
            </article>`;}    showBox.innerHTML = html;
    }
}); 
document.querySelector('.sweatshirts.barra1').addEventListener('click', function (event) {
    const showBox = document.getElementById("showbox");
    let html = "";
    for (let i = 0; i < list.length; i++) {
        if(list[i].id==3){
        html += `<div class="productosjs">
                     <div class="imagen_tarjeta"><img src="${list[i].img}" alt="${list[i].titulo}" class="imgtarjeta"></div>
                     <button class="btn_agregar" data-id="${list[i].id}"><p>+</p></button>
                     <div class="info_tarjeta">
                     
                     <p>${list[i].titulo} </p>
                     </div>
                         
            </div>`;}    showBox.innerHTML = html;
    }
}); 
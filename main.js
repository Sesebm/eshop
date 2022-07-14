import { list } from './lista.js';


window.addEventListener("load", function (event) {
    const loading = document.getElementById('load')
    console.log("'Todos los recursos terminaron de cargar!");
    let listo = true
    if (listo) {
        setTimeout(() => {
            loading.style.display = 'none'
        }, 2000)
    }

});


var cantidadtotal = 0;
/* para navbar queu se haga de color solido con scroll 

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
           
             document.querySelector('.nav-container').classList.add('coloreado');

    } else {
    /* arriba en top */
/*     document.querySelector('.nav-container').classList.remove('coloreado');
  ;
    }
} */



function mostrarelementos() {
    const showBox = document.getElementById("showbox");
    let html = "";
    for (let i = 0; i < list.length; i++) {
        html += `<article class="productosjs">
                 <div class="imagen_tarjeta"><img src="${list[i].img}" alt="${list[i].titulo}" class="imgtarjeta"></div>
                 <button class="btn_agregar" data-id="${list[i].id}">+</button>
                 <div class="info_tarjeta">
                 
                 <p class="grande">${list[i].titulo} </p>
                 <p class="peque">Price: ${list[i].precio}.00$</p>
                 <p class="mini">stock: ${list[i].stock} </p>
                 </div>
                     
        </article>`;
    }
    showBox.innerHTML = html;

}
mostrarelementos()

/* cerrar navbar movil POR COPIARLA DE INTERNET Y ETABA MEDIO MALA XD*/

document.querySelector('.cerrar1').addEventListener('click', function (event) {
    document.querySelector('.checkbox').checked = false;
});

document.querySelector('.cerrar2').addEventListener('click', function (event) {
    document.querySelector('.checkbox').checked = false;
});

/* Filtros */

document.querySelector('.all.barra').addEventListener('click', function (event) {
    ;
    const showBox = document.getElementById("showbox");
    let html = "";
    for (let i = 0; i < list.length; i++) {
        html += `<article class="productosjs">
        <div class="imagen_tarjeta"><img src="${list[i].img}" alt="${list[i].titulo}" class="imgtarjeta"></div>
        <button class="btn_agregar" data-id="${list[i].id}">+</button>
        <div class="info_tarjeta">
        
        <p class="grande">${list[i].titulo} </p>
        <p>Price: ${list[i].precio}.00$</p>
        <p>stock: ${list[i].stock} </p>
        </div>
            
</article>`;
    } showBox.innerHTML = html;
});

document.querySelector('.hoodies.barra').addEventListener('click', function (event) {
    const showBox = document.getElementById("showbox");
    let html = "";
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == 1) {
            html += `<article class="productosjs">
            <div class="imagen_tarjeta"><img src="${list[i].img}" alt="${list[i].titulo}" class="imgtarjeta"></div>
            <button class="btn_agregar" data-id="${list[i].id}">+</button>
            <div class="info_tarjeta">
            
            <p class="grande">${list[i].titulo} </p>
            <p>Price: ${list[i].precio}.00$</p>
            <p>stock: ${list[i].stock} </p>
            </div>
                
   </article>`;
        } showBox.innerHTML = html;
    }
});

document.querySelector('.shirts.barra').addEventListener('click', function (event) {
    const showBox = document.getElementById("showbox");
    let html = "";
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == 2) {
            html += `<article class="productosjs">
            <div class="imagen_tarjeta"><img src="${list[i].img}" alt="${list[i].titulo}" class="imgtarjeta"></div>
            <button class="btn_agregar" data-id="${list[i].id}">+</button>
            <div class="info_tarjeta">
            
            <p class="grande">${list[i].titulo} </p>
            <p>Price: ${list[i].precio}.00$</p>
            <p>stock: ${list[i].stock} </p>
            </div>
                
   </article>`;
        } showBox.innerHTML = html;
    }
});
document.querySelector('.sweatshirts.barra1').addEventListener('click', function (event) {
    const showBox = document.getElementById("showbox");
    let html = "";
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == 3) {
            html += `<article class="productosjs">
            <div class="imagen_tarjeta"><img src="${list[i].img}" alt="${list[i].titulo}" class="imgtarjeta"></div>
            <button class="btn_agregar" data-id="${list[i].id}">+</button>
            <div class="info_tarjeta">
            
            <p class="grande">${list[i].titulo} </p>
            <p>Price: ${list[i].precio}.00$</p>
            <p>stock: ${list[i].stock} </p>
            </div>
                
   </article>`;
        } showBox.innerHTML = html;
    }
});



/* dark mode */
document.querySelector('.oscuroimg').addEventListener('click', function (event) {

    document.querySelector('body').classList.toggle('dark');


})

/* menu carrito */
document.querySelector('.carro').addEventListener('click', function (event) {

    document.querySelector('.cart').classList.toggle('showcart');
})

var carrito = [];

/* agregar al carro */
document.addEventListener("click", function (event) {
    if (event.target.classList.value == "btn_agregar") {
        var existe;

        /* Verificar que existe */
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].id == event.target.dataset.id) {
                if (carrito[i].cantidad >= carrito[i].stock) { alert('No hay mas stock'); return }
                carrito[i].cantidad++;
                existe = true;

            }

        }
        /* Si no Existe */
        if (!existe) {

            for (let i = 0; i < list.length; i++) {
                if (list[i].id == event.target.dataset.id) {
                    if (list[i].cantidad >= list[i].stock) { alert('No hay mas stock'); return }
                    carrito.push(list[i]);
                    carrito[carrito.length - 1].cantidad = 1;
                }
            }

        }
        PintarCarro()
        numerito();
    }
}
);
/* quitar del carro */
document.addEventListener("click", function (event) {

    if (event.target.classList.value == "btn_Restar") {
        let id = event.target.dataset.id;

        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].id == event.target.dataset.id) {
                carrito[i].cantidad--;
                if (carrito[i].cantidad == 0) {
                    carrito.splice(i, 1);
                }

            }
        }

        PintarCarro()
        numerito();
    }

}


);

/* ELIMINAR del carro */
document.addEventListener("click", function (event) {

    if (event.target.classList.value == "fa-solid fa-trash") {
        let id = event.target.dataset.id;

        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].id == event.target.dataset.id) {
                console.log('borrado')
                carrito[i].cantidad == 0;
                carrito.splice(i, 1);

            }
        }

        PintarCarro()

        numerito();
    }

}


);

/* sumar del carro */
document.addEventListener("click", function (event) {

    if (event.target.classList.value == "btn_Sumar") {
        let id = event.target.dataset.id;

        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].id == event.target.dataset.id) {
                
                    if (carrito[i].cantidad >= carrito[i].stock) { alert('No hay mas stock'); return }
                


                carrito[i].cantidad++;
            }
        }
        PintarCarro()
    }

}


);

function PintarCarro() {

    const kart = document.getElementById("kart");
    let auxpaintcart = ''
    for (let i = 0; i < carrito.length; i++) {
        auxpaintcart += `<div class="productoscarro">
        <div class="imagenCarro"><img src="${carrito[i].img}" alt="${carrito[i].titulo}" class="imgtarjeta"></div>
        <div class="datoscarro">
        <div class="derechacarro">
        <p class="grande">${carrito[i].titulo} </p>
        
        <div class="unidades">
        <button class="btn_Restar" data-id="${carrito[i].id}">-</button>
        <p class="peque">  ${carrito[i].cantidad} Units </p>
        <button class="btn_Sumar" data-id="${carrito[i].id}">+</button>

        <i class="fa-solid fa-trash" data-id="${carrito[i].id}"></i>

        </div>

        <p class="mini"> Price:${carrito[i].precio}.00$</p>
        <p class="mini"> Subtotal: ${carrito[i].precio * carrito[i].cantidad}.00$</p>
        </div>



        </div>
       
</div>`;

    }

    kart.innerHTML = auxpaintcart;
    carrovacio();
}

function carrovacio() {
    const kart = document.getElementById("kart");
    if (kart.innerHTML.trim() == '')
        kart.innerHTML = `    <img class="carritovacio" src="./empty-cart.png" alt=""><p>Your cart is empty</p>  
    <p>You can add items to your cart by clicking on the "+" button on the product page.</p>`;
    preciototal()
}


carrovacio();

function preciototal() {
    const bot = document.getElementById("preciototal");
    cantidadtotal = 0;
    let preciototal = 0;

    for (let i = 0; i < carrito.length; i++) {
        cantidadtotal = cantidadtotal + carrito[i].cantidad;
        preciototal += carrito[i].cantidad * carrito[i].precio;
    }
    console.log(cantidadtotal)


    bot.innerHTML = `    <div class="cantidad"> <p>${cantidadtotal} Items</p> </div>
    <div class="totalprecio"> <p class="mediano">Total Price:${preciototal}$</p> </div>        <div>

    </div>`
        ;


}
preciototal()

/* checkout */
document.addEventListener("click", function (event) {
    console.log (event.target.classList.value);
    if (event.target.classList.value == "checkout") {
            console.log ('por aca pasa');
            for (let i = 0; i < carrito.length; i++) {
                for (let j = 0; j < list.length; j++) { 
                    if(carrito[i].id == list[j].id){
                        list[j].stock = list[j].stock-carrito[i].cantidad;
                    }
        
        }}
            carrito= [];
            PintarCarro();
            mostrarelementos();
            numerito();

    }
}
);

function numerito() {
    console.log()
    if(cantidadtotal != 0){
    const flotador = document.getElementById("flotador");

    flotador.innerHTML = `<div class="flotante">${cantidadtotal}</div>`;}
    else flotador.innerHTML='';
}
numerito();
// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.querySelector("#container");
//     console.log(container);
// });

// window.addEventListener("load", function () {
//     const contentLoad = this.document.querySelector(".content_load");

//     setTimeout(function () {
//         contentLoad.style.display = "none";
//     }, 3000);
// });

/**
 * setTimeout
 *
 * console.log("Algo va a pasar en 3 segundos");

    setTimeout(function () {
        console.log("esto paso en 3 segundos");
    }, 3000);
 */

// let contador = 30;

// const intervalFunction = setInterval(function () {
//     contador--;
//     texto.textContent = contador;

//     if (contador === 0) {
//         texto.textContent = "Pregunta terminada";
//         clearInterval(intervalFunction);
//     }
// }, 100);

{
    const users = [
        { id: 1, name: "Juan", lastName: "marquez", age: "22", ocupation: "Z" },
        {
            id: 2,
            name: "Mario",
            lastName: "gonzales",
            age: "23",
            ocupation: "A",
        },
        {
            id: 3,
            name: "Stiven",
            lastName: "quiroz",
            age: "24",
            ocupation: "B",
        },
        { id: 4, name: "Mauro", lastName: "munoz", age: "24", ocupation: "C" },
    ];

    document.addEventListener("DOMContentLoaded", function () {
        const contentButtons = document.querySelector(".contentButtons");

        let htmlButtons = "";

        for (let i = 0; i < users.length; i++) {
            // htmlButtons += `<button class='btn' data-id='${users[i].id}' onclick='mostrar(${users[i].id})'>${users[i].name}</button>`;
            htmlButtons += `<button class='btn' data-id='${users[i].id}' >${users[i].name}</button>`;
        }

        contentButtons.innerHTML = htmlButtons;

        document.addEventListener(, function (event) {
            if (event.target.classList.contains("btn")) {
                const id = event.target.dataset.id;
                console.log(filtrarUsuario(users, id));
            }
        });
    });
}

function filtrarUsuario(array, id) {
    let user;
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === parseInt(id)) {
            user = array[i];
        }
    }

    return user;
}

// function mostrar(id) {
//     alert(id);
// }

// window.mostrar = mostrar;

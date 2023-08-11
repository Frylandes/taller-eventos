
const botonDiv = document.getElementById("botonDiv");

const miBoton = document.getElementById("miBoton");

miBoton.addEventListener("click", function (event) {
    alert("Hola! Soy el botón");
    event.stopPropagation();
});

botonDiv.addEventListener("click", function (event) {
    if (event.target !== miBoton) {
        alert("Hola! Soy el div");
    }
});
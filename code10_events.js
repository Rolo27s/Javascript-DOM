// EVENTS

function holaMundo() {
    alert("Hola Mundo");
}

const $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick = holaMundo;
// Se ejecuta el evento desde el JS. La función no lleva () porque significaría que se autoejecuta, pero queremos que se ejecute cuando se clique el boton.

const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo desde el manejador de eventos multiple");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});

// El evento semántico solo admite una orden para cada selector. En cambio el múltiple, como su nombre indica, admite varios.

function saludar (nombre = "Desconocid@") {
    alert (`Hola ${nombre}!`);
}

$eventoMultiple.addEventListener("click", () => saludar("Jon Mircha"));


// Para eliminar eventos de un elemento
const $remove = document.getElementById("evento-remover");

const removeDblClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $remove.removeEventListener("dblclick", removeDblClick);
    $remove.disabled = true;
};

$remove.addEventListener("dblclick", removeDblClick);


// Flujo de eventos
const $divEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divEventos);

function flujoEventos(e) {
    console.log(`Hola, te saluda ${this.className}, el click lo origino ${e.target.className}`);
    // Paramos la propagacion
    e.stopPropagation();
};

$divEventos.forEach( div => {
    div.addEventListener("click", flujoEventos);
});
// En nuestro ejemplo 3 esta dentro de 2 y 2 esta dentro de 1. Se tiene en cuenta la estructura de la rama para los eventos.
// El addEventListener tiene 3 parametros. El tercero por defecto esta en false y hace efecto bubble (se ejecuta desde fuera hacia dentro). Si se pone en true entra en modo captura y hace el efecto contrario, es decir, ejecuta desde dentro hacia fuera.
/* $divEventos.forEach( div => {
    div.addEventListener("click", flujoEventos, true);
}); */

// Tambien se puede mandar objetos en el tercer parametro. Es cuestion de revisar la documentacion

/* $divEventos.forEach( div => {
    div.addEventListener("click", flujoEventos, {
        capture: false,
        once: true,
    });
}); */

// Stop propagation y preventDefault

// Delegacion de eventos. La idea de delegar eventos es tener un listener en el document global y a partir de ahí indicar a que nodo queremos escuchar para interactuar. Evitaríamos la propagacion de manera automática.

document.addEventListener("click", (e) => {
    console.log("Click en ", e.target);

    if (e.target.matches(".eventos-flujo a")) {
        alert("Estoy presionando el link desde un listener global delegado");
        e.preventDefault();
    }

    // Podemos poner muchos condicionales con diferentes selectores y optimizariamos mucho el rendimiento
});
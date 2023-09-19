// Constantes para el control de los botones
const $btnAbrir = document.getElementById("abrir-ventana"),
$btnCerrar = document.getElementById("cerrar-ventana");

// Constantes para la información de la ventana a abrir
const link = document.getElementById("link");
const width = document.getElementById("width");
const height = document.getElementById("height");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
    const ventanaWidth = width.value;
    const ventanaHeight = height.value;
    
    e.preventDefault();
    ventana = window.open(link.value, "_blank", `width=${ventanaWidth}, height=${ventanaHeight}`);
    console.log(link.value);
});
$btnCerrar.addEventListener("click", (e) => {
    if (ventana) {
        ventana.close();
    }
});
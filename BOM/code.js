// BOM - Browser Object Model

/* // Parte visible util de la web que muestra info
console.log(window.innerWidth);
console.log(window.innerHeight);

// Parte total de la ventana de navegacion, incluyendo scrolls, navs, etc...
console.log(window.outerWidth);
console.log(window.outerHeight); */

// Con estas propiedades podemos configurar un evento para cuando cambie la ventana de tamaño
window.addEventListener("resize", (e) => {
    console.clear();
    console.info("****** Evento Resize ******");
    console.log('ancho visible: ', window.innerWidth);
    console.log('alto visible: ', window.innerHeight);
    console.log('ancho ventana: ', window.outerWidth);
    console.log('alto ventana: ', window.outerHeight);
    console.log(e);
});

// Control de barra de desplazamiento
window.addEventListener("scroll", (e) => {
    console.clear();
    console.info("****** Evento Resize - Scroll ******");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

// Control de coordenadas de posicion de una ventana en la pantalla. Marca la esquina de arriba a la izquierda.
window.addEventListener("load", (e) => {
    console.info("****** Evento load ******");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log('Tiempo de ejecucion: ', e.timeStamp);
    console.log(e);
});

// Volvemos un segundo al DOM para generar un evento de fin de carga del documento de la pagina web. Este carga más rapido que "load", porque load espera a que carge toda la pagina web al completo.
document.addEventListener("DOMContentLoaded", (e) => {
    console.info("****** Evento DOMContentLoaded ******");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log('Tiempo de ejecucion: ', e.timeStamp);
    console.log(e);
    const heading = document.querySelector("h1");
    heading.style.color = "blue";
});

// ****************************************************************
// BOTONES

const $btnAbrir = document.getElementById("abrir-ventana"),
$btnCerrar = document.getElementById("cerrar-ventana"),
$btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
    ventana = window.open("https://www.random.org/");
});
$btnCerrar.addEventListener("click", (e) => {
    ventana.close();
});
$btnImprimir.addEventListener("click", (e) => {
    window.print();
});

// ****************************************************************
// Objetos: URL, Historial y Navegador


console.log("********Objeto URL (location)*******");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();

console.log("********Objeto history*******");
console.log(history);
console.log(history.length);
console.log(history.back(1));
console.log(history.forward(1));
console.log(history.go(-1));
console.log(history.go(0));
console.log(history.go(1));

console.log("********Objeto Navigator*******");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);
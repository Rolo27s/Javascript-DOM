// Creando elementos y fragmentos

const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Cars");

import { $cards } from './code6.js'

// Ahora estaría creadas las etiquetas, pero no estarían implementadas en el DOM

// Comenzamos a construir dinámicamente desde lo más interno a lo más externo
$img.setAttribute("src", "https://picsum.photos/id/88/200/200")
$figcaption.appendChild($figcaptionText);

$figure.appendChild($img);
$figure.appendChild($figcaption);
$figure.classList.add("card");

$cards.appendChild($figure);


// Otra manera de construir nodos dinámicamente sin usar tanto el appendChild
const $figure2 = document.createElement("figure");
$figure2.innerHTML = `
    <img src="https://picsum.photos/id/121/200/200" alt="Mountain" />
    <figcaption>Mountain</figcaption>
`;

$figure2.classList.add("card");

$cards.appendChild($figure2);


// Que pasa si tenemos varios elementos

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
$ul = document.createElement("ul");

const finalNode1 = document.getElementById("final-node-1");
finalNode1.outerHTML = `<h3>Estaciones del año</h3>`;

document.body.appendChild($ul);

estaciones.forEach (el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});


// Lo mismo pero usando innerHTML. Recordar que con los innerHTML no se construyen como tal nuevos nodos HTML, pero para visualización es válido.

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
$ul2 = document.createElement("ul");

const finalNode2 = document.getElementById("final-node-2");
finalNode2.outerHTML = `<h3>Continentes del mundo</h3>`;

document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach (el => $ul2.innerHTML += `<li>${el}</li>`);


// Las inserciones al DOM son de las acciones más pesadas que puedes hacer a la web. Por eso existe el documentFragment, para optimizar el resultado. Esta sería la forma correcta de implementar nodos al DOM.

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
],
$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

$ul3.appendChild($fragment);
document.body.appendChild($ul3);
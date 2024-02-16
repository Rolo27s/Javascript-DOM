// Modificando elementos del DOM

// --- Modo antiguo ---
const $cards9 = document.querySelector(".cards"),
$newCard = document.createElement("figure");

$newCard.innerHTML = `
    <img src="https://picsum.photos/id/189/200/200" alt="imgReplace" />
    <figcaption>imgReplace</figcaption>
`;

$newCard.classList.add("card");

// Para reemplazar metemos el nuevo nodo y el viejo
$cards9.replaceChild($newCard, $cards9.children[2]);

// Si queremos insertar antes de un nodo referencia. Nuevo nodo y nodo de referencia
$cards9.insertBefore($newCard, $cards9.firstElementChild)

// Para eliminar
$cards9.removeChild($cards9.lastElementChild);

// Para clonar cosas. Si quiero que clone tambien todo el contenido le pasamos el parámetro true.
const $cloneCards = $cards9.cloneNode(true);
document.body.appendChild($cloneCards);


// --- Modo nuevo ---
// Es muy parecido al uso de librerias JQuery
/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

Posiciones (es como un orden cronológico) - La analogía a la librería JQuery es esta:
    beforebegin (hermano anterior)  - prepend
    afterbegin (primer hijo)        - append
    beforeend (ultimo hijo)         - before
    afterend  (hermano siguiente)   - after
*/

$cards9.insertAdjacentElement("beforebegin", $newCard);
$cards9.insertAdjacentElement("afterbegin", $newCard);
$cards9.insertAdjacentElement("beforeend", $newCard);

let $contenCard = `
<img src="https://picsum.photos/id/199/200/200" alt="contentCard" />
<figcaption></figcaption>
`;


$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "playaDinamic");
$newCard.insertAdjacentHTML("beforeend", $contenCard);

$cards9.insertAdjacentElement("afterend", $newCard);

// Acceso a clases. add, remove, toggle, replace y contains.
// La palabra class esta reservada. Entonces es className y/o classList

const $card = document.querySelector(".card");

// Devuelve el nombre de la clase
console.log($card.className);
// Devuelve un token list con todas las clases de la seleccion
console.log($card.classList);

// Compruebo si una clase esta en una seleccion o no
console.log($card.classList.contains("rotate-45"));

$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));

console.log($card.className);
console.log($card.classList);

$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));

// Opcion de Toogle (palanca) Si no esta se activa y si esta se desactiva
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");

// add, remove y toggle soportan varias clases a la vez. Se separan con comas.
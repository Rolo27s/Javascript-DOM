// Atributos y data-attributes
/* En el HTML puedo agregar atributos con el nombre data-NombreAtributo, para luego interactuar con ellos desde javascript (ES6) */

// Accedemos a la etiqueta lang
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

// Interactuamos con el link de la web
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

// Cambiamos el lang a ingles
document.documentElement.lang = "en";
console.log(document.documentElement.getAttribute("lang"));
// Otra forma es con set
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.getAttribute("lang"));

// ------------------------------------

const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");

// Comprobamos si nuestra etiqueta seleccionada tiene el atributo
console.log($linkDOM.hasAttribute("rel"));

// Removemos el atributo
$linkDOM.removeAttribute("rel");
// Comprobamos si nuestra etiqueta seleccionada tiene el atributo
console.log($linkDOM.hasAttribute("rel"));

// Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.id);
$linkDOM.setAttribute("data-description", "Modelo de objeto del Documento");
console.log($linkDOM.getAttribute("data-description"));
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
console.log($linkDOM.getAttribute("data-description"));
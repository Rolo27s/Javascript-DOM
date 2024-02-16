// Estilos y variables CSS

console.log($linkDOM.style);

$linkDOM.style.setProperty("background-color", "#F11");
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.color = "yellow";

// Variables dinámicas - Custom properties CSS
const $html = document.documentElement;
const $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

// Para modificar algun color
$html.style.setProperty("--dark-color", "#666");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor);
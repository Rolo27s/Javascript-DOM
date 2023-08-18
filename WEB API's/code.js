// Ejemplo de API de reproducción de texto
let texto = "Hola Fran. ¿Que tal estas?";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto);
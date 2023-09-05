// Selecciono los botones de la alarma
const $iniciarAlarma = document.getElementById("iA");
const $detenerAlarma = document.getElementById("dA");
const audio = document.createElement("audio");

function alerta () {
    audio.src = "alarm.wav";
    audio.play();
}

function alertaPause () {
    audio.src = "alarm.wav";
    audio.pause();
}

$iniciarAlarma.addEventListener("click", alerta);
$detenerAlarma.addEventListener("click", alertaPause);

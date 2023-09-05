const d = document.getElementById("dias");
const h = document.getElementById("horas");
const m = document.getElementById("minutos");
const s = document.getElementById("segundos");

const regExDias = /^[0-9]*$/;
const regExHoras = /^([0-9]|1[0-9]|2[0-3])$/;
const regExMinSeg = /^(?:[0-9]|[1-5][0-9])$/;

/* const audio = document.createElement("audio");
function alerta () {
    audio.src = "alarm.wav";
    audio.play();
} */

let promptDias = prompt("¿Cuantos días tienes de plazo?");

while (!regExDias.test(promptDias)) {
    promptDias = prompt("Error de datos de entrada. ¿Cuantos días tienes de plazo?");
} 

let promptHoras = prompt("¿Cuantas horas tienes de plazo?");

while (!regExHoras.test(promptHoras)) {
    promptHoras = prompt("Error de datos de entrada. ¿Cuantas horas tienes de plazo?");
} 

let promptMinutos = prompt("¿Cuantos minutos tienes de plazo?");

while (!regExMinSeg.test(promptMinutos)) {
    promptMinutos = prompt("Error de datos de entrada. ¿Cuantos minutos tienes de plazo?");
} 

let promptSegundos = prompt("¿Cuantos segundos tienes de plazo?");

while (!regExMinSeg.test(promptSegundos)) {
    promptSegundos = prompt("Error de datos de entrada. ¿Cuantos segundos tienes de plazo?");
}

// Formato para mostrar siempre dos digitos
// if (promptMinutos < 9) promptMinutos = "0" + promptMinutos;
// if (promptHoras < 9) promptHoras = "0" + promptHoras;
// if (promptDias < 9) promptDias = "0" + promptDias;
// if (promptSegundos < 9) promptSegundos = "0" + promptSegundos;

function restTime() {
    if (promptSegundos >= 0) promptSegundos -= 1;

    if (promptSegundos < 0 && promptMinutos > 0) {
        promptSegundos = 59;
        promptMinutos -= 1;
        // if (promptMinutos < 9) promptMinutos = "0" + promptMinutos;
    }

    if (promptMinutos < 0 && promptHoras > 0) {
        promptMinutos = 59;
        promptHoras -= 1;
        // if (promptHoras < 9) promptHoras = "0" + promptHoras;
    }

    if (promptHoras < 0 && promptDias > 0) {
        promptHoras = 23;
        promptDias -= 1;
        // if (promptDias < 9) promptDias = "0" + promptDias;
    }

    // Formato para mostrar siempre dos digitos
    // if (promptSegundos < 9) promptSegundos = "0" + promptSegundos;
    if (promptDias > 9) {
        d.innerHTML = promptDias;
    } else {
        d.innerHTML = "0" + promptDias;
    }
    
    if (promptHoras > 9) {
        h.innerHTML = promptHoras;
    } else {
        h.innerHTML = "0" + promptHoras;
    }

    if (promptMinutos > 9) {
        m.innerHTML = promptMinutos;
    } else {
        m.innerHTML = "0" + promptMinutos;
    }

    if (promptSegundos > 9) {
        s.innerHTML = promptSegundos;
    } else {
        s.innerHTML = "0" + promptSegundos;
        if (promptDias == 0 && promptHoras == 0 && promptMinutos == 0 && promptSegundos == 0) {
            clearInterval(myInterval);
            promptSegundos = 0;
            
            // Esto no es posible desde 2018
            // document.body.appendChild(audio);
            // alerta();
        }
    }
    
    // Color rojo para fin de contador
    if (promptDias == 0 && promptHoras == 0 && promptMinutos == 0 && promptSegundos == 0) {
        d.style.setProperty("color", "red");
        h.style.setProperty("color", "red");
        m.style.setProperty("color", "red");
        s.style.setProperty("color", "red");
    }
}


const myInterval = setInterval(restTime, 1000);
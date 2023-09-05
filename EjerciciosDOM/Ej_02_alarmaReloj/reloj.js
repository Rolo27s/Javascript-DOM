const $reloj = document.getElementById("reloj");
// Variable para localizar y controlar si el intervalo esta activo o no
let intervalId; 

// Instancio un objeto de tipo Date y lo regenero a cada segundo
function $time () {
    intervalId = setInterval ( ()=> {
        const date = new Date;
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        // Seconds format
        if ( seconds == 0 ) seconds = "00";
        if ( seconds > 0 && seconds <= 9 ) seconds = "0" + seconds;

        // Minutes format
        if ( minutes == 0 ) minutes = "00";
        if ( minutes > 0 && minutes <= 9 ) minutes = "0" + minutes;

        // Hours format
        if ( hours == 0 ) hours = "00";
        if ( hours > 0 && hours <= 9 ) hours = "0" + hours;

        $reloj.innerHTML = (`${hours} : ${minutes} : ${seconds}`);
        // return (`${hours} : ${minutes} : ${seconds}`);
    }, 1000 );

}

function $stopTime () {
    // Detener el intervalo si está activo
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    
    const date = new Date;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Seconds format
    if ( seconds == 0 ) seconds = "00";
    if ( seconds > 0 && seconds <= 9 ) seconds = "0" + seconds;

    // Minutes format
    if ( minutes == 0 ) minutes = "00";
    if ( minutes > 0 && minutes <= 9 ) minutes = "0" + minutes;

    // Hours format
    if ( hours == 0 ) hours = "00";
    if ( hours > 0 && hours <= 9 ) hours = "0" + hours;

    $reloj.innerHTML = (`${hours} : ${minutes} : ${seconds}`);
    // return (`${hours} : ${minutes} : ${seconds}`);
}

// Selecciono los botones del reloj
const $iniciarReloj = document.getElementById("iR");
const $detenerReloj = document.getElementById("dR");

$iniciarReloj.addEventListener("click", $time);
$detenerReloj.removeEventListener("click", $time);
$detenerReloj.addEventListener("click", $stopTime);

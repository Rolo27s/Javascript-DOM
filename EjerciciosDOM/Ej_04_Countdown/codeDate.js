// CountDown usando libreria date - Estilo Jon Mircha
function countdown(limitDate) {
    const $countdown = document.querySelector(".container-libDate");
    const countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval( ()=>{
    let now = new Date().getTime(),
    limitTime = countdownDate - now,
    days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
    hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
    minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
    seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / (1000))).slice(-2);

    $countdown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;
        if(limitTime < 0) {
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>Fin de la cuenta regresiva</h3>`;
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", ()=> {
    countdown("Sep 15, 2023 16:00:00")
});
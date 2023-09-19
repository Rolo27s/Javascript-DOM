function draw(btn, selector) {
    const getWinner = (selector) => {
        const $players = document.querySelectorAll(selector),
         random = Math.floor(Math.random() * $players.length),
         winner = $players[random];

         return `El ganador es: ${winner.textContent}`;
    }

    // ¿Y si queremos tener un ganador entre varios usuarios que comentaron en twitter?
    /* 
        Solo tendríamos que ir a la web en cuestión, localizar cual es el selector de CSS donde está la información que queremos sortear (en este caso un nombre). Copiamos la función getWinner y la pegamos en el navegador pasándole el selector CSS correcto.
    */

    document.addEventListener("click", (e) => {
        if(e.target.matches(btn)) {
            let result = getWinner(selector);
            alert (result);
            console.log(result);
        }
    });
}

document.addEventListener("DOMContentLoaded", draw("#winner-btn", ".player"));

function speechReader() {
    const $speechSelect = document.getElementById("speech-select"),
    $speechTextarea = document.getElementById("speech-text"),
    $speechBtn = document.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance();

    // console.log(speechMessage);

    let voices = [];
    
    // El objeto generado de voz tiene una serie de eventos. Necesitamos acceder a su apartado de eventos y seleccionar ahí el método que detecta las voces reconocidas en el navegador
    document.addEventListener("DOMContentLoaded", (e) => {
        // console.log(speechSynthesis.getVoices());
        
        // Cuando cambia la voz en nuestro select que generaremos de forma dinámica con JS...
        speechSynthesis.addEventListener("voiceschanged", (e) => {
            console.log(e);

            // Relleno el array vacío con las voces disponibles en el navegador.
            voices = speechSynthesis.getVoices();
            console.log(voices);

            // Ingresamos al DOM de forma dinámica cada voz detectada por el navegador en nuestro sistema.
            voices.forEach(voice => {
                const $option = document.createElement("option");
                $option.value = voice.name;
                $option.textContent = `${voice.name} *** ${voice.lang}`;

                $speechSelect.appendChild($option);
            });
        });
    });

    // Cuando cambia la voz, si este es debido al select...
    document.addEventListener("change", (e) => {
        if(e.target === $speechSelect) {
            speechMessage.voice = voices.find(voice => voice.name === e.target.value);
        }

        console.log(speechMessage);
    });

    // Orden de leer el mensaje escrito en el textArea
    document.addEventListener("click", (e) => {
        if(e.target === $speechBtn) {
            speechMessage.text = $speechTextarea.value;
            speechSynthesis.speak(speechMessage);
        }
    });
};

// No se ejecuta con eventos porque la función ya se ejecuta usando el DOM
speechReader();
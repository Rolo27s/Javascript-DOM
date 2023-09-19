let i = 0;

function sliderClick () {
    const $nextBtn = document.querySelector(".slider-btns .next"),
    $prevBtn = document.querySelector(".slider-btns .prev"),
    $slides = document.querySelectorAll(".slider-slide");

    document.addEventListener("click", (e) => {
        if(e.target === $prevBtn || e.target.closest(".prev")) {
            e.preventDefault();
            $slides[i].classList.remove("active");
            i--;
            
            // Si el contador de slides es negativo, vete al último elemento
            if (i < 0) {
                i = $slides.length - 1;
            };

            $slides[i].classList.add("active");
        }


        if(e.target === $nextBtn || e.target.closest(".next")) {
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;
            
            // Si el contador de slides es negativo, vete al último elemento
            if (i >= $slides.length) {
                i = 0;
            };

            $slides[i].classList.add("active");
        }
    });

}

document.addEventListener("DOMContentLoaded", sliderClick);

// AutoSlider
function slider () {
    const $slides = document.querySelectorAll(".slider-slide");

    $slides[i].classList.remove("active");
    i++;
    
    // Si el contador de slides es negativo, vete al último elemento
    if (i >= $slides.length) {
        i = 0;
    };

    $slides[i].classList.add("active");
}

// Ejecuto slider cada 5s para que realmente sea automático
setInterval(slider, 5000);
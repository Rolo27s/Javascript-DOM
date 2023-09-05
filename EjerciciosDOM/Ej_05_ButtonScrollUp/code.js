const posBot = document.querySelector(".posicion-boton");

function scrollYBtn() {
    const action = window.scrollY;
    
    if (action > 600) {
        posBot.style.setProperty("bottom", "20px");
    } else {
        posBot.style.setProperty("bottom", "-80px");
    }
}

window.addEventListener("scroll", scrollYBtn);
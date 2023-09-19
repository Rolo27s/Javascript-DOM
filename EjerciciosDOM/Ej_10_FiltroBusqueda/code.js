function searchFilters(input, selector) {
    document.addEventListener("keyup", (e) => {
        if(e.target.matches(input)) {
            // console.log(e.key);
            // console.log(e.target.value);
            document.querySelectorAll(selector).forEach( el => {
                el.textContent.toLowerCase().includes(e.target.value.toLowerCase()) // Pasamos tanto la búsqueda como lo buscado a lower case para que no haya problemas con mayus y minus
                    ? el.classList.remove("filter")
                    : el.classList.add("filter")
            })

            // Agrego la tecla esc para limpiar la búsqueda
            if (e.key === "Escape") {
                e.target.value = "";
            }
        }
    });
}


// Ejecución del evento en el DOM cuando este cargue
document.addEventListener("DOMContentLoaded", searchFilters(".card-filter", ".card"));
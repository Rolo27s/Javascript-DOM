function contactFormValidations() {
    const $form = document.querySelector(".contact-form"), 
    $inputs = document.querySelectorAll(".contact-form [required]");

    console.log($inputs);

    $inputs.forEach(input => {
        const $span = document.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);
    });

    document.addEventListener("keyup", (e) => {
        if (e.target.matches(".contact-form [required]")) {
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;

            // console.log($input, pattern);
            if(pattern && $input.value !== "") {
                console.log("El input tiene patrón");
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                    ? document.getElementById($input.name).classList.add("is-active")
                    : document.getElementById($input.name).classList.remove("is-active");
            }
    
            if (!pattern) {
                console.log("El input no tiene patrón");
                return $input.value === ""
                    ? document.getElementById($input.name).classList.add("is-active")
                    : document.getElementById($input.name).classList.remove("is-active");
            }
        }
    });

    document.addEventListener("submit", (e) => {
        // e.preventDefault();
        alert("Enviar Formulario");
        
        const $loader = document.querySelector(".contact-form-loader"), 
        $response = document.querySelector(".contact-form-response");
    
        $loader.classList.remove("none");

        // Simular una consulta a un servidor
        setTimeout(() => {
            $loader.classList.add("none");
            $response.classList.remove("none");
            $form.reset();

            // Metemos un sub-time out para que desaparezca el mensaje de formulario enviado
            setTimeout(() => {
                $response.classList.add("none");
            }, 3000);

        }, 3000);
    });

}

document.addEventListener("DOMContentLoaded", contactFormValidations);
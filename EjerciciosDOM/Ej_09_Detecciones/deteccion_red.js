// El navegador tiene una propiedad que se llama onLine. Indica si tenemos o no conexión a la red.

function networkStatus () {
    const isOnLine = ()=> {
        const $div = d.createElement("div");
        
        if(n.onLine) {
            $div.textContent = "Conexión Restablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        } else {
            $div.textContent = "Conexión Perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }

        d.body.insertAdjacentElement("afterbegin", $div);
        setTimeout( () => d.body.removeChild($div) , 2000);
    };

    w.addEventListener("online", (e)=> isOnLine());
    w.addEventListener("offline", (e)=> isOnLine());
}

// En el inspector de Chrome/Service Workers, se puede simular conexión/desconexión

networkStatus();
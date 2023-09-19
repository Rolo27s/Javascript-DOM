const d = document,
n = navigator,
w = window,
ua = n.userAgent;

// Función que recibe el parámetro id donde se reflejará la información en el HTML. Esta función discrimina según estemos navegando con un dispositivo u otro. Es muy útil, por ejemplo, para ordenar opciones de descarga según el dispositivo en el que se está navegando...
function userDeviceInfo(id) {
    const $id = d.getElementById(id),
    isMobile = {
        // Uso de expresiones regulares. match es si se encuentra, se valida.
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipad/i),
        windows: () => ua.match(/windows phone/i),
        // Como en el método any se quiere referenciar con el this a las propiedades de los otros métodos, se usa una función anónima para poder ir a ese scope.
        any: function () {
            return this.android() || this.ios() || this.windows();
        },
    },
    isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function () {
            return this.linux() || this.mac() || this.windows();
        },
    },
    isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edge/i),
        any: function () {
            return (
                this.ie () ||
                this.edge () ||
                this.chrome () ||
                this.safari () ||
                this.firefox () ||
                this.opera ()
            );
        }
    };

    // Vamos a escribir un pequeño elemento HTML con información
    $id.innerHTML = `
    <ul>
        <li>User Agent: <b>${ua}</b></li>
        <li>Plataforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>
    `;

    // Ejemplo de contenido exclusivo dependiendo de las características de navegación. Por navegador:
    if(isBrowser.chrome()) {
        $id.innerHTML += `<p><mark>Este contenido sólo se ve en Chrome</mark></p>`;
    }

    if(isBrowser.firefox()) {
        $id.innerHTML += `<p><mark>Este contenido sólo se ve en Firefox</mark></p>`;
    }

    // Por sistema operativo:
    if(isDesktop.linux()) {
        $id.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p>`;
    }

    if(isDesktop.mac()) {
        $id.innerHTML += `<p><mark>Descarga nuestro software para Mac OS</mark></p>`;
    }

    if(isDesktop.windows()) {
        $id.innerHTML += `<p><mark>Descarga nuestro software para Windows</mark></p>`;
    }

    // Redirecciones
    if(isMobile.android()) {
        window.location.href = "https://jonmircha.com";
    }

    // Información completa del user agent
    console.log(ua);

    // Comprobamos que se esté navegando desde algún móvil
    console.log(isMobile.android());
    console.log(isMobile.ios());
    console.log(isMobile.windows());
    console.log(isMobile.any());

    // Comprobamos que se esté navegando desde algún escritorio
    console.log(isDesktop.linux());
    console.log(isDesktop.mac());
    console.log(isDesktop.windows());
    console.log(isDesktop.any());

    // Comprobamos el navegador que se está usando
    console.log(isBrowser.chrome());
    console.log(isBrowser.safari());
    console.log(isBrowser.firefox());
    console.log(isBrowser.opera());
    console.log(isBrowser.ie());
    console.log(isBrowser.edge());
    console.log(isBrowser.any());
}

document.addEventListener("DOMContentLoaded", ()=>{
    userDeviceInfo("user-device");
})
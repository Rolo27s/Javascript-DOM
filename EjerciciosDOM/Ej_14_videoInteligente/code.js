function smartVideo () {
    const $videos = document.querySelectorAll("data-smart-video");

    const cb = (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.play();
            } else {
                entry-target.pause();
            }
        });
    };

    const observer = new IntersectionObserver(cb, {threshold: 0.5});

    $videos.forEach((el) => observer.observer(el));
}

document.addEventListener("DOMContentLoaded", smartVideo);

/* 
Implementación para mejora de video en banner:
Utilizar el responsable responsive design, de tal manera que si se detecta dispositivo móvil que se cargue una imagen en el banner, o como mucho un video muy liviano de menos de 0.5Mb.
Si se detecta dispositivo desktop usar un banner de 2Mb máx aprox
*/
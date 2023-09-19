function webCam (id) {
    const $video = document.getElementById(id);
    // console.log(navigator.mediaDevices.getUserMedia);

    if(navigator.mediaDevices.getUserMedia) {
        // Esta API es una promesa. Trabajamos con then y catch.
        navigator.mediaDevices
            .getUserMedia({video:true, audio:false})
            .then((stream) => {
                console.log(stream);
                $video.srcObject = stream;
                $video.play();
            })
            .catch(err => {
                $video.insertAdjacentHTML("beforebegin", `<div><p><mark>¡Sucedió el siguiente error!: ${err}</mark></p></div>`);
                console.error(`¡Sucedió el siguiente error!: ${err}`);
            });
    }
}

d.addEventListener("DOMContentLoaded", webCam("webcam"));
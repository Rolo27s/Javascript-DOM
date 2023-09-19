let breakpoint;

function responsiveMedia(id, mq, mobileContent, desktopContent) {
    breakpoint = window.matchMedia(mq);

    const responsive = (e) => {
        if (e.matches) {
            document.getElementById(id).innerHTML = desktopContent;
        } else {
            document.getElementById(id).innerHTML = mobileContent;
        }

        console.log("MQ", breakpoint, e.matches);
    };
    breakpoint.addEventListener("change", responsive);
    responsive.breakpoint;
}


document.addEventListener("DOMContentLoaded", (e)=>{
    responsiveMedia("youtube", "(min-width: 1024px)", "Contenido Movil", "Contenido Escritorio");

    responsiveMedia("gmaps", "(min-width: 1024px)", "Contenido Movil", "Contenido Escritorio");
    
});

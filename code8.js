// Templates HTML
const $cards8 = document.querySelector(".cards"),
$template8 = document.getElementById("template-card").content,
$fragment8 = document.createDocumentFragment(),
cardContent = [
    {
        title: "imgDinamic1",
        img : "https://picsum.photos/id/122/200/200",
    },
    {
        title: "imgDinamic2",
        img : "https://picsum.photos/id/123/200/200",
    },
    {
        title: "imgDinamic3",
        img : "https://picsum.photos/id/124/200/200",
    },
    {
        title: "imgDinamic4",
        img : "https://picsum.photos/id/125/200/200",
    },
    {
        title: "imgDinamic5",
        img : "https://picsum.photos/id/126/200/200",
    },
];

cardContent.forEach ( el => {
    $template8.querySelector("img").setAttribute("src", el.img);
    $template8.querySelector("img").setAttribute("alt", el.title);
    $template8.querySelector("figcaption").textContent = el.title;

    // Para clonar un nodo. Con el true esta copiando la estructura completa
    let $clone = document.importNode($template8, true);
    $fragment8.appendChild($clone);
});

$cards8.appendChild($fragment8);
// Texto y HTML

const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

// Opcion antigua para internet explorer. No forma parte del standard. Esto no lo usaremos.
// $whatIsDOM.innerText = text;

// Esto si forma parte del standard, pero vemos que no se renderiza el contenido HTML
$whatIsDOM.textContent = text;

// innerHTML si renderiza el HTML
$whatIsDOM.innerHTML = text;

// outerHTML parte del nodo marcado y rellena hacia fuera. En este caso se eliminaría el p id="que-es" padre y quedaría el wrapper vacio <> </> que contendría a text. Se consume el nodo referencia.
$whatIsDOM.outerHTML = text;
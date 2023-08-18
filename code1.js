// Devuelve todo los documentos dependiendo de como lo seleccionemos en el HTML
console.info("Elementos seleccionados por tipo de etiqueta");
console.log(document.getElementsByTagName("li"));

console.info("Elementos seleccionados por nombre de clase");
console.log(document.getElementsByClassName("card"));

console.info("Elementos que tenga la propiedad name con un valor definido");
console.log(document.getElementsByName("nombre"));

// Estas tres formas de seleccionar han sido sustituidas por querySelector (consulta de selector). Admite cualquier selector válido de CSS. Es un poco más lento que los demás porque necesita comprobar que el selector es válido. No acepta pseudo elementos ni pseudo clases.
console.info("Selector por querySelector");
console.log(document.querySelector("#menu"));

console.info("Selectores por querySelectorAll");
console.log(document.querySelectorAll("a"));

// El getElementById se sigue usando porque es muy óptimo en cuestiones de rendimiento.
console.info("Elemento unico seleccionado por su ID")
console.log(document.getElementById("menu"));

// En 2020 se usaba principalmente estos 3 ultimos. querySelector, querySelectorAll y getElementByID
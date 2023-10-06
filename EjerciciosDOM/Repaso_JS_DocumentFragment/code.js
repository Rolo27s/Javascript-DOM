/* Agrega un escuchador de eventos: Utiliza JavaScript para agregar un escuchador de eventos al formulario para que se ejecute una función cuando se envíe el formulario. Puedes hacerlo dentro de una función DOMContentLoaded para asegurarte de que el DOM esté completamente cargado antes de trabajar con él. */
const formulario = document.getElementById('miFormulario');

document.addEventListener('DOMContentLoaded', function () {
  formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    // Aquí puedes llamar a una función para manejar el envío del formulario
  });
});


/* Maneja el envío del formulario: En la función manejada del evento, puedes recopilar los valores del formulario y crear un objeto o un fragmento de documento con esa información. Luego, puedes agregar este fragmento al DOM. */

function manejarEnvioFormulario() {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;

  const fragmento = document.createDocumentFragment();
  const lista = document.createElement('ul');
  
  const itemNombre = document.createElement('li');
  itemNombre.textContent = `Nombre: ${nombre}`;
  lista.appendChild(itemNombre);

  const itemEmail = document.createElement('li');
  itemEmail.textContent = `Email: ${email}`;
  lista.appendChild(itemEmail);

  fragmento.appendChild(lista);

  // Agregar el fragmento al DOM
  const contenedorResultado = document.getElementById('resultado');
  contenedorResultado.appendChild(fragmento);
}

// Asignar esta función al evento submit
formulario.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  manejarEnvioFormulario();
});

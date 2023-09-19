document.addEventListener('DOMContentLoaded', function () {
  // Obtén una referencia a todos los enlaces internos que tienen un atributo href que comienza con "#"
  var internalLinks = document.querySelectorAll('a[href^="#"]');

  // Agrega un evento clic a cada enlace interno
  internalLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Evita la acción predeterminada del enlace
      
      var targetId = this.getAttribute('href').substring(1); // Obtiene el ID del objetivo del enlace
      var targetElement = document.getElementById(targetId); // Obtiene el elemento de destino

      if (targetElement) {
        // Calcula la nueva posición de desplazamiento restando la altura del encabezado (en este caso, 10rem)
        var newPosition = targetElement.offsetTop - 10 * parseFloat(getComputedStyle(document.documentElement).fontSize);

        // Realiza el desplazamiento suave utilizando el método scrollIntoView
        window.scrollTo({
          top: newPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

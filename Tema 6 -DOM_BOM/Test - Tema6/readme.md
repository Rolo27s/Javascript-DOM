# Test Tema 6 - DOM y BOM

6.1. Desde el punto de vista de la jerarquía de objetos de JavaScript, ¿qué objeto es el padre de document?
**a) window**
b) navigator
c) location
d) document no tiene padre, es la raíz del modelo de objetos

6.2. ¿Qué modelo de objetos otorga acceso a todo lo que tiene que ver con el navegador?
a) DOM
**b) BOM**
c) COM
d) FOM

6.3. ¿Qué método de window permite que el usuario introduzca datos por teclado?
a) confirm()
b) print()
c) alert()
**d) prompt()**

6.4. ¿Qué objeto contiene una propiedad que da acceso a la geolocalización del usuario?
a) user-agent
b) location
**c) navigator**
d) screen

6.5. Para redireccionar al usuario a otra URL, ¿qué instrucción puedes usar?
a) window.newURL
**b) locaton.href**
c) navigator.destination
d) document.landing

6.6. ¿Cómo navegas hacia la página anterior visitada por el usuario?
a) path(-1)
b) previousSibling
c)pass(previous)
**d) go(-1)**

6.7. ¿Qué ocurre si no cancelas un temporizador definido con setInterval()?
a) Nada, el temporizador se ejecuta y el programa finaliza
b) Depende del intervalo
**c) El callback se ejecuta indefinidamente cada vez que se cumpla la cuenta**
d) El programa genera un error

6.8. ¿Quién es el padre del elemento body en cualquier documento HTML?
**a) html**
b) head
c) meta
d) doctype

6.9. ¿Qué propiedad de document almacena el tipo de nodo seleccionado?
a) nodeClass
**b) nodeType**
c) kindOfNode
d) nodeFlavour

6.10. ¿Cómo puedes saber cuántos elementos ha devuelto una selección realizada con getElementsByTagName?
a) Con numberOfElements
b) Con size
c) Solo puede hacerse creando un contador a partir de un recorrido
**d) Con length**

6.11. ¿Qué debes especificarle a querySelectorAll para seleccionar elementos?
*a) Cualquier selector que funcione en CSS**
b) El nombre del atributo
c) el nombre de la etiqueta
d) Nada, es un método que no recibe parámetros

6.12. ¿Qué devuelve la propiedad lastChild?
a) El último atributo en la lista de atributos de un elemento.
**b) El último elemento hijo del elemento sobre el que se aplica**
c) La última propiedad CSS modificada
d) El último nodo hijo del elemento sobre el que se aplica

6.13 El método createElement():
a) Inserta un elemento nuevo en el DOM
**b) Crea un elemento nuevo pero no lo inserta en el DOM**
c) Modifica la jerarquía de elementos del DOM
d) Comprueba si un elemento está repetido en el DOM

6.14. ¿Cómo obtienes la lista de propiedades CSS que se aplican sobre un elemento?
a) Con la propiedad style
b) Con el método getCSSProperties()
**c) Con el método getComputedStyle()**
d) Con la propiedad CSS

6.15. ¿Qué devuelve la instrucción document.getElementById("as").dataset?
a) Un array con todos los elementos que tienen como id="as"
**b) La lista de atributos data, y sus valores, del elemento con id="as"**
c) Una estructura de datos de tipo Set cuyo identificador es "as"
d) Los elementos con id="as" que representan valores numéricos operables

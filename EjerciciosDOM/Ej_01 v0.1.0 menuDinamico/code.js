// Look for .hamburger
  const hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    $newNav.classList.toggle("hide");
    // Do something else, like open/close menu
  });

  /* Necesito implementar que al clicar el boton se despliege un menu con las 5 secciones posibles y al clickar se haga scroll automatico hasta esa seccion */

const $newNav = document.createElement("nav"),
$newUl = document.createElement("ul");

const $sections = document.querySelectorAll("section");

$sections.forEach ( (el, index) => {
  const $newLi = document.createElement("li");
  const $newA = document.createElement("a");
  $newA.textContent = el.innerText;
  $newA.setAttribute("href",`#section-${index + 1}`);
  $newUl.appendChild($newLi);
  $newLi.appendChild($newA);
});

$newNav.appendChild($newUl);
$newNav.classList.add("menu");
$newNav.classList.add("hide");

document.body.appendChild($newNav);

const links = document.querySelectorAll("a");

links.forEach (link => {
  link.addEventListener("click", () => {
    $newNav.classList.add("hide");
    hamburger.classList.remove("is-active");
  });
});

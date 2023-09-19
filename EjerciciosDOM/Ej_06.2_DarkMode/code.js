const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const imgTheme = document.getElementById("img-theme");
const estado = document.getElementById("estado");
const estadoGuardado = localStorage.getItem("theme");

// Control de ultimo estado del tema guardado en localStorage
if (estadoGuardado == "dark") {
    imgTheme.setAttribute("src", "dark-mode.png");
    imgTheme.setAttribute("alt", "Modo Nocturno");
    estado.innerHTML = "Dark";
    body.classList.add('dark-mode');
} else {
    imgTheme.setAttribute("src", "day-mode.png");
    imgTheme.setAttribute("alt", "Modo Diurno");
    estado.innerHTML = "Light";
    body.classList.remove('dark-mode');
  }

// Control del estado del botón
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    imgTheme.setAttribute("src", "dark-mode.png");
    imgTheme.setAttribute("alt", "Modo Nocturno");
    estado.innerHTML = "Dark";
    localStorage.setItem("theme", "dark");
  } else {
    imgTheme.setAttribute("src", "day-mode.png");
    imgTheme.setAttribute("alt", "Modo Diurno");
    estado.innerHTML = "Light";
    localStorage.setItem("theme", "light");
  }
});
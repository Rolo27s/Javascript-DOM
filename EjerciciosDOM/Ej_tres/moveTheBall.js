const ball = document.querySelector(".ball");

let Y_axis = 45;
let X_axis = 45;
let move = 1;
const Y_MIN = 0, X_MIN = 0, Y_MAX = 90;
let X_MAX = window.innerWidth;
console.log(X_MAX);

// Porcentajes dinámicos segun el width
if (700 > X_MAX) X_MAX = 83;
if (700 < X_MAX && X_MAX < 800) X_MAX = 89;
if (800 < X_MAX && X_MAX < 900) X_MAX = 90;
if (900 < X_MAX && X_MAX < 1000) X_MAX = 91;
if (1000 < X_MAX && X_MAX < 1120) X_MAX = 92;
if (1120 < X_MAX && X_MAX < 1300) X_MAX = 93;
if (1300 < X_MAX && X_MAX < 1540) X_MAX = 94;
if (1540 < X_MAX && X_MAX < 1920) X_MAX = 94.5;
if (1920 < X_MAX) X_MAX = 95.5;

console.log(X_MAX);

// Eventos de teclado
document.addEventListener('keydown', (e) => {
      console.log('Key pressed:', e.key);
      switch (e.key) {
        case 'w':
        case 'ArrowUp':
            Y_axis -= move;
            if (Y_axis < Y_MIN) Y_axis = 0;
            break;
        case 's':
        case 'ArrowDown':
            Y_axis += move;
            if (Y_axis > Y_MAX) Y_axis = Y_MAX;
            break;
        case 'a':
        case 'ArrowLeft':
            X_axis -= move;
            if (X_axis < X_MIN) X_axis = 0;
            break;
        case 'd':
        case 'ArrowRight':
            X_axis += move;
            if (X_axis > X_MAX) X_axis = X_MAX;
            break;
        case ' ': 
        case 'Enter':
            Y_axis = 45;
            X_axis = 45;
            break;
    }

    // Actualizamos la posición de la pelota
    ball.style.top = `${Y_axis}%`;
    ball.style.left = `${X_axis}%`;
});

// Eventos con click desde pantalla
const up = document.querySelector(".up");
const down = document.querySelector(".down");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

up.addEventListener('click', ()=>{
    Y_axis -= move;
    if (Y_axis < Y_MIN) Y_axis = 0;

    // Actualizamos la posición de la pelota
    ball.style.top = `${Y_axis}%`;
    ball.style.left = `${X_axis}%`;
});

down.addEventListener('click', ()=>{
    Y_axis += move;
    if (Y_axis > Y_MAX) Y_axis = Y_MAX;

    // Actualizamos la posición de la pelota
    ball.style.top = `${Y_axis}%`;
    ball.style.left = `${X_axis}%`;
});

left.addEventListener('click', ()=>{
    X_axis -= move;
    if (X_axis < X_MIN) X_axis = 0;

    // Actualizamos la posición de la pelota
    ball.style.top = `${Y_axis}%`;
    ball.style.left = `${X_axis}%`;
});

right.addEventListener('click', ()=>{
    X_axis += move;
    if (X_axis > X_MAX) X_axis = X_MAX;

    // Actualizamos la posición de la pelota
    ball.style.top = `${Y_axis}%`;
    ball.style.left = `${X_axis}%`;
});
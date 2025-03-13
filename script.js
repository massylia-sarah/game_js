let container = document.querySelector('.container');
let button1 = document.querySelector('.start_button');
let button2 = document.querySelector('.restart_button');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');

let score = 0;
let time = 10;

button1.onclick = start_game;
button2.onclick = start_game;

function start_game() {
    score = 0;
    time = 10;
    container.innerHTML = ""; // Clear the container
    scoreContainer.innerHTML = score;
    timeContainer.innerHTML = time;

    let interval = setInterval(showTarget, 1000);
}

function showTarget() {
    let target = document.createElement('img');
    target.id = "target";
    target.src = "https://media.istockphoto.com/id/873881782/fr/photo/fleur-rose-rouge-isol%C3%A9-sur-le-fond-noir.jpg?s=612x612&w=0&k=20&c=yhOmqdIqoAtxqjefkAjdXwJhIYHzmXgUaXeSDtBAUuY=";
    container.appendChild(target);

    // Ensure the container has a position set for absolute positioning of the target
    container.style.position = 'relative';

    target.style.position = 'absolute';
    target.style.top = Math.random() * (500 - target.offsetHeight) + 'px';
    target.style.left = Math.random() * (600 - target.offsetWidth) + 'px';

    setTimeout(targetRemove, 2000);

    target.onclick = boom;

    time--;
    timeContainer.innerHTML = time;

    if (time === 0) {
        clearInterval(interval);
        container.innerHTML = "Game Over";
    }
}

function targetRemove() {
    let target = document.querySelector('#target');
    if (target) {
        target.remove();
    }
}

function boom() {
    score++;
    scoreContainer.innerHTML = score;
    let target = document.querySelector('#target');
    if (target) {
        target.style.display = 'none';
    }
}

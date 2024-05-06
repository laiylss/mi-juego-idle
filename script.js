
// script.js
let points = 0;
let pointsPerClick = 1;

function cleanAquarium() {
    points += pointsPerClick;
    updateDisplay();
    animateBubbles();
}

function buyFish() {
    if (points >= 100) {
        points -= 100;
        pointsPerClick += 1;
        addFish();
        updateDisplay();
    } else {
        alert("No tienes suficientes puntos!");
    }
}

function updateDisplay() {
    document.getElementById('points').innerText = 'Puntos: ' + points;
    document.getElementById('perClick').innerText = 'Puntos por limpieza: ' + pointsPerClick;
}

function addFish() {
    const aquarium = document.getElementById('aquarium');
    const fish = document.createElement('div');
    fish.style.position = 'absolute';
    fish.style.left = Math.random() * 280 + 'px';
    fish.style.top = Math.random() * 180 + 'px';
    fish.innerHTML = '🐟';
    aquarium.appendChild(fish);
}

function animateBubbles() {
    const aquarium = document.getElementById('aquarium');
    const bubble = document.createElement('div');
    bubble.style.position = 'absolute';
    bubble.style.left = Math.random() * 280 + 'px';
    bubble.style.bottom = '0px';
    bubble.innerHTML = '🔵';
    aquarium.appendChild(bubble);
    let pos = 0;
    const anim = setInterval(() => {
        if (pos === 200) {
            clearInterval(anim);
            aquarium.removeChild(bubble);
        } else {
            pos++;
            bubble.style.bottom = pos + 'px';
        }
    }, 10);
}

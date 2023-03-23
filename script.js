// slider display
const slider = document.getElementById('slider');
const sliderContainer = document.querySelector('form');
const display = document.querySelector('.display');

sliderContainer.appendChild(display);
slider.oninput = function () {
    display.textContent = `${this.value} X ${this.value}`
}
// To set grid size dynamically
const gridContainer = document.querySelector('.grid-container');
let gridSize = slider.value;


gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

function createGrid () {
    for (let i = gridSize * gridSize; i > 0 ; i--) {
        let div = document.createElement('div');
        div.classList.add('item');
        gridContainer.appendChild(div);
    }
}

const setButton = document.querySelector('button');

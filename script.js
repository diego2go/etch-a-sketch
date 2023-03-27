// slider display
const slider = document.getElementById('slider');
const sliderContainer = document.querySelector('form');
const display = document.querySelector('.display');

sliderContainer.appendChild(display);
slider.oninput = function () {
    display.textContent = `${this.value} X ${this.value}`;
    gridSize = slider.value;
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    resetGrid();
    createGrid();
    changeItemColor();
}

const gridContainer = document.querySelector('.grid-container');
let gridSize;

function createGrid () {
    for (let i = gridSize * gridSize; i > 0 ; i--) {
        let div = document.createElement('div');
        div.classList.add('item');
        gridContainer.appendChild(div);
    }
}

function resetGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function changeItemColor() {
    // event listener to change div items background color
    let tiles = document.querySelectorAll('div.item');
    tiles.forEach((div) => {
    div.addEventListener('mouseover', ( )=> {
        div.style.backgroundColor = '#303841';
    } )
})
}
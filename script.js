// slider display
const slider = document.getElementById('slider');
const sliderContainer = document.querySelector('form');
const display = document.createElement('p');

sliderContainer.appendChild(display);
slider.oninput = function () {
    display.textContent = `${this.value} X ${this.value}`
}

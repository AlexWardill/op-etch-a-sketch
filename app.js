const DEFAULT_BOX_COLOR = '#fefefe';
const DEFAULT_SIZE = 16;
let currentMode = 'DEFAULT';

let custom_color = 'black';

const body = document.getElementById('body');
const h1 = document.getElementById('h1');
const container = document.getElementById('container');

const resetButton = document.getElementById('reset-btn');
const blackButton = document.getElementById('black-btn');
const randomButton = document.getElementById('random-btn');
const eraserButton = document.getElementById('eraser-btn');
const colorPicker = document.getElementById('color-picker');
const slider = document.getElementById('slider');
let sliderLabel = document.getElementById('slider-label');

slider.value = 16;
sliderLabel.innerHTML = slider.value

slider.addEventListener('mousemove', (e) => {
    updateSizeLabel(e.target.value);
});

slider.addEventListener('change', (e) => {
    clearGrid();
    createGrid(e.target.value);
})

function updateSizeLabel(size) {
    sliderLabel.innerHTML = size
}

colorPicker.value = custom_color;
// random color
function randomColor() {
    let randomR = Math.floor(Math.random()*255);
    let randomG = Math.floor(Math.random()*255);
    let randomB = Math.floor(Math.random()*255);
    
    return `rgb(${randomR}, ${randomG}, ${randomB})`;
}

blackButton.addEventListener('click', () => {
    currentMode = 'BLACK';
});

randomButton.addEventListener('click', () => {
    currentMode = 'RANDOM';
});

eraserButton.addEventListener('click', () => {
    currentMode = 'ERASER';
});

colorPicker.addEventListener('change', (e) => {
    currentMode = 'COLOR';
    custom_color = e.target.value;
});

// create grid
function createGrid(gridSize) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i=0; i<gridSize*gridSize; i++) {
        var div = document.createElement('div');
        div.id = `${i}`;
        div.setAttribute('class', 'box');
    
        container.appendChild(div);
    }
    // add event listener for mouseover, change background colour to random colour
        let boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
        box.addEventListener('mouseover', function changeColor() {
            
            if (currentMode == 'DEFAULT' || currentMode == 'BLACK') {
                this.style.background = 'black';
            } else if (currentMode == 'RANDOM') {
                this.style.background = randomColor();
            } else if (currentMode == 'ERASER') {
                this.style.background = DEFAULT_BOX_COLOR;
            } else if (currentMode == 'COLOR') {
                this.style.background = custom_color;
            }
        });
    });
}

function clearGrid() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.background = DEFAULT_BOX_COLOR;
    });
}

// reset grid
function resetGrid() {
    clearGrid();
    updateSizeLabel(DEFAULT_SIZE);
    slider.value = DEFAULT_SIZE;
    return createGrid(DEFAULT_SIZE);
}

resetButton.addEventListener('click', resetGrid);

//

createGrid(10); // default grid size




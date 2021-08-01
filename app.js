const DEFAULT_BOX_COLOR = '#fefefe';

const body = document.getElementById('body');
const h1 = document.getElementById('h1');
const resetButton = document.getElementById('reset-btn');
const blackButton = document.getElementById('black-btn');
const randomButton = document.getElementById('random-btn');
const container = document.getElementById('container');


// random color
function randomColor() {
    let randomR = Math.floor(Math.random()*255);
    let randomG = Math.floor(Math.random()*255);
    let randomB = Math.floor(Math.random()*255);
    
    return `rgb(${randomR}, ${randomG}, ${randomB})`;
}

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
            this.style.background = randomColor();
        });
    });
}

// reset grid
function resetGrid() {
    let newSize = prompt("Enter new grid size: ");
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.background = DEFAULT_BOX_COLOR;
    });
    return createGrid(newSize);
}

resetButton.addEventListener('click', resetGrid);

//

createGrid(10); // default grid size




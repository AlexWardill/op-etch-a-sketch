const body = document.getElementById('body');
const h1 = document.getElementById('h1');
const button = document.getElementById('button');
const container = document.getElementById('container');


function createGrid(gridSize) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i=0; i<gridSize*gridSize; i++) {
        var div = document.createElement('div');
        div.id = `${i}`;
        div.setAttribute('class', 'box random-hover');
    
        container.appendChild(div);
    }
}


function resetGrid() {
    let newSize = prompt("Enter new grid size: ");
    return createGrid(newSize);
}

button.addEventListener('click', resetGrid);


createGrid(10); // default grid size
const body = document.getElementsByTagName('body');
const h1 = document.getElementsByTagName('h1');
const button = document.getElementsByTagName('button');
const container = document.getElementById('container');

// Method of creating grid size
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

createGrid(10); // default grid size



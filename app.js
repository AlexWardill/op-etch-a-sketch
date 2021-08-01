const body = document.getElementsByTagName('body');
const h1 = document.getElementsByTagName('h1');
const button = document.getElementsByTagName('button');
const container = document.getElementById('container');

// make 16x16 grid inside container

for (let i=0; i<256; i++) {
    var div = document.createElement('div');
    div.id = `${i}`;
    div.setAttribute('class', 'box random-hover')

    container.appendChild(div);
}
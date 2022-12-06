
const container = document.getElementById('container');
const square = document.getElementsByClassName('square');
let colorMode = 'default';
window.addEventListener('load', function () {
    createGrid(16,16)
});

const rainbowbutton = document.getElementById('rainbow-button');
const eraserbutton = document.getElementById('eraser-button');
const blackbutton = document.getElementById('black-button');
const actionButtons = [rainbowbutton, eraserbutton, blackbutton];
const clearbutton = document.getElementById('clear-button');

const gengrid = document.getElementById('gengrid')

gengrid.addEventListener('click', function () {
    let val = document.getElementById('gridnum').value;
    slider.value = val
    output.innerHTML = val
    createGrid (val, val)
});

rainbowbutton.onclick = () => {
    colorMode = 'rainbow';
    removeClassAllButtons();
    rainbowbutton.classList.add('currentmode');
};

eraserbutton.onclick = () => {
    colorMode = 'erase';
    removeClassAllButtons();
    eraserbutton.classList.add('currentmode');
};

blackbutton.onclick = () => {
    colorMode = 'default';
    removeClassAllButtons();
    blackbutton.classList.add('currentmode');
};

clearbutton.addEventListener ('click', function () {
    let currentSize = container.getElementsByTagName('*').length;
    let createNumber = Math.sqrt(currentSize);
    console.log(createNumber)
    container.innerHTML = " ";
    createGrid(createNumber, createNumber);  
});

function removeClassAllButtons () {
    for (i = 0; i < actionButtons.length; i++) {
        actionButtons[i].classList.remove('currentmode')
    }
        
};

function draw (e) {
    //if mouse left is down, mouseevent 'which'
    if (e.which === 1) {
        //Which button has the current mode class
        if (colorMode === 'default') {
            e.target.style.backgroundColor = 'black' 
        }
        else if (colorMode === 'rainbow') {
            const randomR = Math.floor(Math.random() * 256)
            const randomG = Math.floor(Math.random() * 256)
            const randomB = Math.floor(Math.random() * 256)
            e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})` 
        }
        else if (colorMode === 'erase') {
            e.target.style.backgroundColor = 'beige'
        }
    }
};

function createGrid (rows, cols) {
    document.getElementById("container").innerHTML = " "; //resets container div, making them not overlap infinitely 
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.classList = 'square';
        cell.onmouseenter = draw;
        container.appendChild(cell);
    }
};

//slider stuff
let slider = document.getElementById("myRange");
let output = document.getElementById("slidervalue");
output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value
    document.getElementById('gridnum').value = this.value
    let val = this.value
    createGrid(val, val)
};


document.getElementById('gridnum').addEventListener( 'keypress', function (e) {
    if (e.key === 'Enter') {
        let gridnum = this.value
        slider.value = this.value //gridnum
        output.innerHTML = this.value
        createGrid(gridnum, gridnum)
    }
});

// function updateGrid (val, emitter) { 
    //function UpdateGrid(val, emitter){
    //Updates slider position if emitter != slider
    //Updates input field if emitter != inputfild
    //Updates slider number if emitter 
    //createGrid(val, val)
// };



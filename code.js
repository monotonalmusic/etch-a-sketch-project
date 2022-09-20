/* Make a function to create divs
Make function recieve number to create certain amount of divs based on row and column
Make button to run that function
Make hover 'fill in' the divs
Make reset button
Add stylizing
Add extra grid sizes, colors etc.
*/
const container = document.getElementById('container');
const square = document.getElementsByClassName('square');
const gengrid = document.getElementById('gengrid')
let mouseDown = false
let colorMode = 'default'
window.addEventListener('load', function(){
    createGrid(16,16)
});

//slider stuff
let slider = document.getElementById("myRange")
let output = document.getElementById("slidervalue")
output.innerHTML = slider.value
slider.oninput = function (){
    output.innerHTML = this.value
    let gridnum = this.value
    createGrid(gridnum, gridnum)
}

gengrid.addEventListener('click', function (){
    let gridnum = document.getElementById('gridnum').value;
    createGrid (gridnum, gridnum)
});

const rainbowbutton = document.getElementById('rainbow-button')
const eraserbutton = document.getElementById('eraser-button')
const blackbutton = document.getElementById('black-button')
const clearbutton = document.getElementById('clear-button')


rainbowbutton.onclick = () => colorMode = 'rainbow'; 
eraserbutton.onclick = () => colorMode = 'erase'
blackbutton.onclick = () => colorMode = 'default'
clearbutton.onclick = () => document.getElementById("container").innerHTML = " "




function enableToggle (e) {
    mouseDown = true;

    if (e.target !== container) {
        toggle(e)
    }
}

function disableToggle () {
    mouseDown = false
}

function toggle (e) {
    if (mouseDown === false) {
        return
    }
    else if (colorMode === 'default') {
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






//creates grid making variables to then use in CSS with display:grid
function createGrid (rows, cols) {
    document.getElementById("container").innerHTML = " "; //resets container div, making them not overlap infinitely 
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    //toggle is enabled if mouse is down
    container.onmousedown = enableToggle;
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.classList = 'square';
        //if mouse is down AND mouse enters the div, then proceed to color
        cell.onmouseenter = toggle;
        container.appendChild(cell);
    }
    //toggle is disabled if mouse is up
    container.onmouseup = disableToggle;

}


    
//add function to add activated element to gridsquare when mousedown

//created Grid with individual divs for rows and columns
// function createGrid (x) {
//     document.getElementById("container").innerHTML = " "; //resets container div, making them not overlap infinitely
//     let d = document.getElementById("container"); //refers to document; will be used to append divs to  
//         for (i = 0; i < x; i++) {
//             //create x number of row divs
//             let row = document.createElement("div");
//             row.className = "row";
//             for (z = 1; z <= x; z++) {
//                 let cell = document.createElement("div");
//                 cell.className = "gridsquare";
//                 // cell.innerText = (i * x) + z
//                 row.appendChild(cell);
//             }
//             d.appendChild(row)
//         }
// }
/* Make a function to create divs
Make function recieve number to create certain amount of divs based on row and column
Make button to run that function
Make hover 'fill in' the divs
Make reset button
Add stylizing
Add extra grid sizes, colors etc.
*/

//creates grid making variables to then use in CSS with display:grid
function createGrid (rows, cols) {
    document.getElementById("container").innerHTML = " "; //resets container div, making them not overlap infinitely
    let d = document.getElementById("container"); //refers to document; will be used to append divs to  
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.className = "gridsquare";
        container.appendChild(cell);
    }


}
document.getElementById("16-button").addEventListener("click", function (){
    createGrid (16, 16);
});

document.getElementById("32-button").addEventListener("click", function (){
    createGrid (32, 32);
});

//created Grid with individual divs for rows and columns
/*function createGrid (x) {
    document.getElementById("container").innerHTML = " "; //resets container div, making them not overlap infinitely
    let d = document.getElementById("container"); //refers to document; will be used to append divs to  
        for (i = 0; i < x; i++) {
            //create x number of row divs
            let row = document.createElement("div");
            row.className = "row";
            for (z = 1; z <= x; z++) {
                let cell = document.createElement("div");
                cell.className = "gridsquare";
                // cell.innerText = (i * x) + z
                row.appendChild(cell);
            }
            d.appendChild(row)
        }
}
*/
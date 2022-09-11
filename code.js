/* Make a function to create divs
Make function recieve number to create certain amount of divs based on row and column
Make button to run that function
Make hover 'fill in' the divs
Make reset button
Add stylizing
Add extra grid sizes, colors etc.
*/

function createGrid (x) {
    let d = document.body; //refers to document; will be used to append divs to
        for (i = 0; i < x; i++) {
            //create x number of row divs
            let row = document.createElement("div");
            row.className = "row";
            for (z = 1; z <= x; z++) {
                let cell = document.createElement("div");
                cell.className = "gridsquare";
                cell.innerText = (i * x) + z
                row.appendChild(cell);
            }
            d.appendChild(row)
        }
}

document.getElementById("16-button").addEventListener("click", function (){
    createGrid (16);
});
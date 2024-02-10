const body = document.querySelector("body");
const gridOfSquares = document.querySelector("#gridofsquares");
const gridSize = document.querySelector("#gridsize");

let side = 16;

gridSize.addEventListener("click", () => {
    let size = prompt("Enter a grid dimension:", side);
    if (!Number.isNaN(size) && +size >= 1 && +size <= 100) {
        side = +size;
        createGrid(+size);
    }
})

function createGrid(gridSide) {
    while (gridOfSquares.firstChild) {
        gridOfSquares.removeChild(gridOfSquares.lastChild);
    }
    for (let i = 0; i < gridSide; i ++) {
        let outerDiv = document.createElement("div");
        outerDiv.style.display = "flex";
        outerDiv.style.margin = "0px";
        outerDiv.style.padding = "0px";
        outerDiv.style.justifyContent = "space-between";
        outerDiv.style.alignItems = "stretch";
        outerDiv.style.flex = "auto";
        outerDiv.style.gap = "0px";
        for (let j = 0; j < gridSide; j++) {
            let innerDiv = document.createElement("div");
            innerDiv.style.flex = "auto";
            innerDiv.style.margin = "0px";
            innerDiv.addEventListener("mouseenter", () => {
                innerDiv.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            })
            outerDiv.appendChild(innerDiv);
        }
        gridOfSquares.appendChild(outerDiv);
    }
}

createGrid(side);
const body = document.querySelector("body");
const gridOfSquares = document.querySelector("#gridofsquares");

for (let i = 0; i < 16; i ++) {
    let outerDiv = document.createElement("div");
    outerDiv.style.display = "flex";
    outerDiv.style.margin = "0px";
    outerDiv.style.padding = "0px";
    for (let j = 0; j < 16; j++) {
        let innerDiv = document.createElement("div");
        innerDiv.style.width = "45px";
        innerDiv.style.height = "45px";
        innerDiv.style.margin = "0px";
        innerDiv.addEventListener("mouseenter", () => {
            innerDiv.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        })
        outerDiv.appendChild(innerDiv);
    }
    gridOfSquares.appendChild(outerDiv);
}
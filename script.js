let gridContainer = document.querySelector(".grid-container");
let resizeBtn = document.querySelector(".resize-btn");

resizeBtn.addEventListener("click", () => resize());

function createGrid(size) {
    for(let i = 0; i < size; i++) {
        let horizDiv = document.createElement("div");
        gridContainer.appendChild(horizDiv);
        horizDiv.style.display = "flex";
        horizDiv.style.flexDirection = "column";

        for(let j = 0; j < size; j++) {
            let vertDiv = document.createElement("div");
            vertDiv.style.flex = "auto";
            vertDiv._opacity = 0;
            vertDiv.addEventListener("mouseenter", (event) => colorize(event.target));
            horizDiv.appendChild(vertDiv);
        }
    }
}

function colorize(element) {
    element._opacity += 0.1;
    element.style.opacity = element._opacity;
    element.style.backgroundColor = "black";
}

function resize() {
    let reSize = prompt("Enter the preferred size");
    gridContainer.innerHTML = "";
    if(reSize > 100) {
        createGrid(100);
    }
    else {
        createGrid(reSize);
    }
}

createGrid(20);
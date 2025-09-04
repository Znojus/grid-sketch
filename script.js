let gridContainer = document.querySelector(".grid-container");

function createGrid(size) {
    for(let i = 0; i < size; i++) {
        let horizDiv = document.createElement("div");
        gridContainer.appendChild(horizDiv);
        horizDiv.style.display = "flex";
        horizDiv.style.flexDirection = "column";

        for(let j = 0; j < size; j++) {
            let vertDiv = document.createElement("div");
            vertDiv.style.flex = "auto";
            vertDiv.addEventListener("mouseenter", (event) => colorize(event.target));
            horizDiv.appendChild(vertDiv);
        }
    }
}

function colorize(element) {
    element.style.backgroundColor = "black";
    element.style.opacity = "0.33 + 0.11";
}

createGrid(60);
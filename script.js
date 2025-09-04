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

createGrid(60);
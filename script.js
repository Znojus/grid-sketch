let gridContainer = document.querySelector(".grid-container");

function createGrid(size) {
    for(let i = 0; i < size; i++) {
        let horizDiv = document.createElement("div");
        gridContainer.appendChild(horizDiv);
        horizDiv.setAttribute("style", "display: flex; flex-direction: column");

        for(let j = 0; j < size; j++) {
            let vertDiv = document.createElement("div");
            vertDiv.setAttribute("style", "flex: auto;");
            horizDiv.appendChild(vertDiv);
        }
    }
}

createGrid(6);
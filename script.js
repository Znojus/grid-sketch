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
            let randomR = Math.floor(Math.random() * 256);
            let randomG = Math.floor(Math.random() * 256);
            let randomB = Math.floor(Math.random() * 256);

            let vertDiv = document.createElement("div");
            vertDiv.style.flex = "auto";
            vertDiv._opacity = 0;
            vertDiv.style.opacity = 0;
            vertDiv.style.backgroundColor = `rgb(${randomR}, ${randomB}, ${randomB})`;
            vertDiv.addEventListener("mouseenter", (event) => colorize(event.target));
            horizDiv.appendChild(vertDiv);
        }
    }
}

function colorize(element) {
    element._opacity += 0.1;
    element.style.opacity = element._opacity;
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
function makeGrid(rows, cols) {
    const container = document.getElementById("grid-container");

    let cell;
    for (let c = 0; c < (rows * cols); c++) {
        cell = document.createElement("div");
        
        container.appendChild(cell).className = "grid-item";
    };
};

makeGrid(16, 16)

grid-item.addEventListener('mouseover', (e) => {
    e.target.style.color = "purple";

    setTimeout(() => {
        e.target.style.color = "";
    },  500);

},
false,
);
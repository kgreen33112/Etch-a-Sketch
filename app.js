function makeGrid(rows, cols) {
    const container = document.getElementById("grid-container");

    let cell;
    for (let c = 0; c < (rows * cols); c++) {
        cell = document.createElement("div");
        
        container.appendChild(cell).className = "grid-item";
    };

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundcolor = "purple";
        });
    });
};

makeGrid(16, 16)

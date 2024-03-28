document.addEventListener("DOMContentLoaded", function() {
    const grid = document.querySelector(".grid");
    const numRows = 30; // Number of rows
    const numCols = 30; // Number of columns
    const colors = ["yellow", "blue", "purple", "green", "red"];

    // Calculate the width and height of each grid cell
    const cellWidth = 100 / numCols;
    const cellHeight = 100 / numRows;

    // Create points and add them to the grid in a grid layout
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            const point = document.createElement("div");
            point.classList.add("point");
            point.classList.add(colors[Math.floor(Math.random() * colors.length)]);
            point.style.top = `${row * cellHeight}%`;
            point.style.left = `${col * cellWidth}%`;
            grid.appendChild(point);

            // Add glowing effect to some points
            if (Math.random() < 0.1) {
                point.classList.add("glowing");
            }
        }
    }
});

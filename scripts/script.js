const mainContainer = document.querySelector(".main-container");

const container = document.querySelector("#container");

const pixelButton = document.createElement("button");

const clearButton = document.createElement("button");

const para = document.createElement("p");

const cell = document.createElement("div");

para.classList.add('para');
para.textContent = "Click the button below to change the number of pixels"
mainContainer.appendChild(para);

pixelButton.classList.add('pixelButton');
pixelButton.textContent = "Click Me for New Pixels"
pixelButton.addEventListener('click', () => {
  // clearGrid();
  let rS = parseInt(prompt("Enter a pixel figure:"))
  let cS;
  cS = rS;
  if (rS > 64) return
  else{
    makeGrids(rS, cS);
  }
});
mainContainer.appendChild(pixelButton);

mainContainer.appendChild(container);

clearButton.classList.add('clearButton');
clearButton.textContent = "Clear Grid"
clearButton.addEventListener('click', () => {
  clearGrid();
});
mainContainer.appendChild(clearButton);

function makeGrids(rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', columns);
  for (c = 0; c < (rows * columns); c++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item")
    container.appendChild(cell);
  };
  let gridPixels = container.querySelectorAll('.grid-item');
  gridPixels.forEach(gridPixel => gridPixel.addEventListener("dragover", gridHover));
  //  gridPixels.forEach(gridPixel => gridPixel.addEventListener("mouseleave", gridLeave));
};


function gridHover() {
    this.style.backgroundColor = 'green';
}

function gridLeave() {
    this.style.background = 'none';
}

function clearGrid() {
  location.reload();
  // makeGrids(16, 16);
}

makeGrids(16, 16);
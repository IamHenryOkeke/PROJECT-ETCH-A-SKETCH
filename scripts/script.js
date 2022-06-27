const mainContainer = document.querySelector(".main-container");

const container = document.getElementById("container");

const pixelButton = document.createElement("button");

const clearButton = document.createElement("button");

const rainbowButton = document.createElement("button");

const para = document.createElement("p");

const cell = document.createElement("div");

let gridPixels;

para.classList.add('para');
para.textContent = "Click the button below to change the number of pixels"
mainContainer.appendChild(para);

pixelButton.classList.add('pixelButton');
pixelButton.textContent = "Click Me for New Pixels"
pixelButton.addEventListener('click', () => {
  clearGrid();
  let newSquares = parseInt(prompt("Enter a pixel figure:"))
  if (newSquares > 64) return alert("Invalid input. Enter a number between 1 and 64");
  else{
    makeGrids(newSquares);
  }
});
mainContainer.appendChild(pixelButton);

mainContainer.appendChild(container);

rainbowButton.classList.add('rainbowButton');
rainbowButton.textContent = "Rainbow colour"
rainbowButton.addEventListener('click', () => {
  let gridPixels = container.querySelectorAll('div');
  gridPixels.forEach(gridPixel => gridPixel.addEventListener("mouseover", gridRandomHoverColor));
});
// rainbowButton.addEventListener('dblclick', () => {
//   let gridPixels = container.querySelectorAll('div');
//   gridPixels.forEach(gridPixel => gridPixel.addEventListener("mouseover", gridHoverColor));
// });
mainContainer.appendChild(rainbowButton);

clearButton.classList.add('clearButton');
clearButton.textContent = "Clear Grid"
clearButton.addEventListener('click', () => {
  clearGrid();
});
mainContainer.appendChild(clearButton);

function makeGrids(squares) {
  container.style.setProperty('--grid-rows', squares);
  container.style.setProperty('--grid-cols', squares);
  for (c = 0; c < (squares * squares); c++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item")
    cell.addEventListener("mouseover", gridHoverColor);
    container.appendChild(cell);
  };  
};

function gridHoverColor() {
    this.style.backgroundColor = 'black';
}

function gridRandomHoverColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    this.style.backgroundColor = bgColor;
}

function clearGrid() {
  let gridPixels = container.querySelectorAll('div');
  gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#ffffff');
}

makeGrids(16);
const container = document.getElementById("container");

function makeGrids(rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', columns);
  for (c = 0; c < (rows * columns); c++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item")
    container.appendChild(cell);
  };
  let gridPixels = container.querySelectorAll('.grid-item');
   gridPixels.forEach(gridPixel => gridPixel.addEventListener("mouseover", gridHover));
   gridPixels.forEach(gridPixel => gridPixel.addEventListener("mouseleave", gridLeave));
};

// document.getElementsByClassName("grid-item").addEventListener("mouseover", function() {
//         document.getElementById("grid-item").style.backgroundColor = "green";
//     });
// function hoverEffect(){
//     document.getElementsByClassName("grid-item").style.background-color = 'red'
// }
function gridHover() {
    this.style.backgroundColor = 'green';
}

function gridLeave() {
    this.style.backgroundColor = 'none';
}
// colorButtons.forEach(colorButton => colorButton.addEventListener('mouseover', buttonHover));
makeGrids(16, 16);
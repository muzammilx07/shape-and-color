// Color Change Section
let colorButton = document.getElementById("color-btn");
let bodyColor = document.getElementById("image-body");

colorButton.addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  bodyColor.style.backgroundColor = randomColor;
});

const shapes = {
  triangle: {
    url: "./assests/01.png",
    width: 120,
    height: 120,
  },
  square: {
    url: "./assests/02.png",
    width: 120,
    height: 120,
  },
  diamond: {
    url: "./assests/03.png",
    width: 120,
    height: 120,
  },
  circle: {
    url: "./assests/04.png",
    width: 120,
    height: 120,
  },
  hexagon: {
    url: "./assests/05.png",
    width: 120,
    height: 120,
  },
};

let shapeButton = document.getElementById("shape-btn");
let imageContainer = document.getElementById("img");

// Function to generate a random shape and update the image
function changeShape() {
  const shapeNames = Object.keys(shapes);
  const randomShape = shapeNames[Math.floor(Math.random() * shapeNames.length)];

  const shapeInfo = shapes[randomShape];

  imageContainer.style.backgroundImage = `url('${shapeInfo.url}')`;
  imageContainer.style.width = `${shapeInfo.width}px`;
  imageContainer.style.height = `${shapeInfo.height}px`;
}

shapeButton.addEventListener("click", changeShape);

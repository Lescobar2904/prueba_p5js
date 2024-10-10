let images = [];
let currentIndex = 0;

function preload() {
  // Carga las imágenes desde image1.jpeg hasta image9.jpeg
  for (let i = 1; i <= 9; i++) {
    images.push(loadImage(`images/image${i}.jpeg`)); // Asegúrate de que las imágenes estén en la carpeta 'images'
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  displayImage();
}

function draw() {
  // El dibujo se hace en la función displayImage()
}

function displayImage() {
  background(255);
  if (images.length > 0) {
    image(images[currentIndex], 0, 0, width, height);
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    currentIndex = (currentIndex + 1) % images.length; // Siguiente imagen
    displayImage();
  } else if (keyCode === LEFT_ARROW) {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Imagen anterior
    displayImage();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  displayImage();
}

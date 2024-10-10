let images = [];
let currentIndex = 0;
const maxWidth = 800;  // Ancho máximo para las imágenes
const maxHeight = 800; // Alto máximo para las imágenes

function preload() {
  // Carga las imágenes desde image1.jpeg hasta image9.jpeg
  for (let i = 1; i <= 9; i++) {
    images.push(loadImage(`images/image${i}.jpeg`));
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
    let img = images[currentIndex];
    let aspectRatio = img.width / img.height;

    // Calcular el tamaño de la imagen manteniendo la relación de aspecto
    let imgWidth, imgHeight;

    if (img.width > img.height) {
      imgWidth = maxWidth; // Limitar ancho
      imgHeight = maxWidth / aspectRatio; // Mantener relación de aspecto
    } else {
      imgHeight = maxHeight; // Limitar alto
      imgWidth = maxHeight * aspectRatio; // Mantener relación de aspecto
    }

    // Centrar la imagen en el lienzo
    image(img, (width - imgWidth) / 2, (height - imgHeight) / 2, imgWidth, imgHeight);
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

function mousePressed() {
  // Cambia a la siguiente imagen al hacer clic
  currentIndex = (currentIndex + 1) % images.length; // Siguiente imagen
  displayImage();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  displayImage();
}

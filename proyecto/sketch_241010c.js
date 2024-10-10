let images = [];
let currentIndex = 0;

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
    let canvasAspectRatio = width / height;

    // Calcular el tamaño de la imagen para que mantenga la relación de aspecto
    if (canvasAspectRatio > aspectRatio) {
      // El lienzo es más ancho que la imagen
      let imgHeight = height;
      let imgWidth = imgHeight * aspectRatio;
      image(img, (width - imgWidth) / 2, 0, imgWidth, imgHeight);
    } else {
      // El lienzo es más alto que la imagen
      let imgWidth = width;
      let imgHeight = imgWidth / aspectRatio;
      image(img, 0, (height - imgHeight) / 2, imgWidth, imgHeight);
    }
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

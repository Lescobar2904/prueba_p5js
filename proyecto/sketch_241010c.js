let img; // Variable para almacenar la imagen
let currentImageIndex = 1; // Índice de la imagen actual

function preload() {
    img = loadImage(`images/image${currentImageIndex}.jpeg`); // Cargar la primera imagen
}

function setup() {
    createCanvas(800, 800); // Tamaño del lienzo
}

function draw() {
    background(255); // Fondo blanco
    // Mostrar la imagen en el centro de la pantalla
    image(img, (width - 640) / 2, (height - 640) / 2, 640, 640); // Escala a 640x640
}

function mousePressed() {
    currentImageIndex++; // Incrementar el índice
    if (currentImageIndex > 9) { // Reiniciar si llega al final
        currentImageIndex = 1;
    }
    img = loadImage(`images/image${currentImageIndex}.jpeg`); // Cargar la nueva imagen
}

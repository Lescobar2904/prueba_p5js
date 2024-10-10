let img; // Variable para almacenar la imagen
let currentImageIndex = 1; // Índice de la imagen actual
let imgWidth = 640; // Ancho deseado para la imagen
let imgHeight = 640; // Alto deseado para la imagen

function preload() {
    img = loadImage(`images/image${currentImageIndex}.jpeg`); // Cargar la primera imagen
}

function setup() {
    createCanvas(windowWidth, windowHeight); // Tamaño del lienzo responsivo
}

function draw() {
    background(0); // Fondo negro
    // Calcular el centro de la pantalla y asegurar que la imagen no abarque toda la ventana
    let x = (width - imgWidth) / 2;
    let y = (height - imgHeight) / 2;
    
    // Mostrar la imagen en el centro de la pantalla
    image(img, x, y, imgWidth, imgHeight); // Mostrar la imagen en tamaño deseado
}

function mousePressed() {
    currentImageIndex++; // Incrementar el índice
    if (currentImageIndex > 9) { // Reiniciar si llega al final
        currentImageIndex = 1;
    }
    img = loadImage(`images/image${currentImageIndex}.jpeg`); // Cargar la nueva imagen
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Ajustar el lienzo al cambiar el tamaño de la ventana
}

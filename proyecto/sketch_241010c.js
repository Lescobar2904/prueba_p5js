let img; // Variable para almacenar la imagen
let currentImageIndex = 1; // Índice de la imagen actual
let imgWidth = 400; // Nuevo ancho deseado para la imagen
let imgHeight = 400; // Nuevo alto deseado para la imagen
let prevButton, nextButton; // Botones de navegación

function preload() {
    img = loadImage(`images/image${currentImageIndex}.jpeg`); // Cargar la primera imagen
}

function setup() {
    createCanvas(windowWidth, windowHeight); // Tamaño del lienzo responsivo
    createButtons(); // Crear los botones de navegación
}

function draw() {
    background(0); // Fondo negro

    // Calcular el centro de la pantalla
    let x = (width - imgWidth) / 2;
    let y = (height - imgHeight) / 2;

    // Mostrar la imagen en el centro de la pantalla
    image(img, x, y, imgWidth, imgHeight); // Mostrar la imagen en tamaño deseado

    // Reposicionar los botones a los lados de la imagen
    prevButton.position(x - 50, y + imgHeight / 2 - 20); // A la izquierda de la imagen
    nextButton.position(x + imgWidth + 10, y + imgHeight / 2 - 20); // A la derecha de la imagen
}

function createButtons() {
    // Crear el botón para la imagen anterior
    prevButton = createButton('←');
    prevButton.mousePressed(prevImage); // Asignar función

    // Crear el botón para la imagen siguiente
    nextButton = createButton('→');
    nextButton.mousePressed(nextImage); // Asignar función
}

function prevImage() {
    currentImageIndex--; // Decrementar el índice
    if (currentImageIndex < 1) {
        currentImageIndex = 9; // Si es menor que 1, volver a la última imagen
    }
    img = loadImage(`images/image${currentImageIndex}.jpeg`); // Cargar la imagen anterior
}

function nextImage() {
    currentImageIndex++; // Incrementar el índice
    if (currentImageIndex > 9) {
        currentImageIndex = 1; // Si excede el número de imágenes, volver a la primera
    }
    img = loadImage(`images/image${currentImageIndex}.jpeg`); // Cargar la siguiente imagen
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Ajustar el lienzo al cambiar el tamaño de la ventana
}

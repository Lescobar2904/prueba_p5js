let img; // Variable para almacenar la imagen
let currentImageIndex = 1; // Índice de la imagen actual
let imgWidth = 400; // Nuevo ancho deseado para la imagen
let imgHeight = 400; // Nuevo alto deseado para la imagen

function preload() {
    img = loadImage(`images/image${currentImageIndex}.jpeg`); // Cargar la primera imagen
}

function setup() {
    createCanvas(windowWidth, windowHeight); // Tamaño del lienzo responsivo
    createButtons(); // Crear los botones de navegación
}

function draw() {
    background(0); // Fondo negro
    // Calcular el centro de la pantalla y asegurar que la imagen no abarque toda la ventana
    let x = (width - imgWidth) / 2;
    let y = (height - imgHeight) / 2;
    
    // Mostrar la imagen en el centro de la pantalla
    image(img, x, y, imgWidth, imgHeight); // Mostrar la imagen en tamaño deseado
}

function createButtons() {
    // Botón para imagen anterior
    let prevButton = createButton('←');
    prevButton.position(50, height / 2 - 20); // Posición en el lado izquierdo
    prevButton.mousePressed(prevImage); // Asignar función

    // Botón para imagen siguiente
    let nextButton = createButton('→');
    nextButton.position(width - 100, height / 2 - 20); // Posición en el lado derecho
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
    createButtons(); // Reposicionar los botones después del redimensionamiento
}

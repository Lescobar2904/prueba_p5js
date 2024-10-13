let img; // Variable para almacenar la imagen principal
let currentImageIndex = 1; // Índice de la imagen actual
let imgWidth = 400; // Ancho deseado para la imagen principal
let imgHeight = 400; // Alto deseado para la imagen principal
let thumbnails = []; // Arreglo para las miniaturas
let cornerRadius = 30; // Radio de las esquinas redondeadas

function preload() {
    img = loadImage(`images/image${currentImageIndex}.jpeg`); // Cargar la primera imagen

    // Cargar las miniaturas
    for (let i = 1; i <= 9; i++) {
        thumbnails[i] = loadImage(`images/image${i}.jpeg`);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight); // Tamaño del lienzo responsivo
    createButtons(); // Crear los botones de navegación
}

function draw() {
    background(0); // Fondo negro

    // Mostrar miniaturas en el lado izquierdo
    for (let i = 1; i <= 9; i++) {
        let thumbnailX = 10; // Posición X fija
        let thumbnailY = i * 50; // Espacio entre miniaturas
        image(thumbnails[i], thumbnailX, thumbnailY, 40, 40); // Mostrar miniatura a 40x40
    }

    // Calcular el centro de la pantalla para la imagen principal
    let x = 150; // Ajustar posición horizontal para que no se sobreponga con las miniaturas
    let y = (height - imgHeight) / 2;

    // Dibujar un rectángulo redondeado
    noFill();
    stroke(255); // Color del borde
    strokeWeight(4); // Grosor del borde
    rect(x, y, imgWidth, imgHeight, cornerRadius); // Dibujar rectángulo con esquinas redondeadas

    // Usar clip() para que la imagen tenga los bordes redondeados
    beginShape();
    vertex(x, y);
    vertex(x + imgWidth, y);
    vertex(x + imgWidth, y + imgHeight);
    vertex(x, y + imgHeight);
    endShape(CLOSE);
    clip();

    // Mostrar la imagen principal dentro del área recortada
    image(img, x, y, imgWidth, imgHeight); // Mostrar la imagen en el tamaño deseado

    // Reposicionar los botones a los lados de la imagen principal
    prevButton.position(x - 50, y + imgHeight / 2 - 20); // Botón izquierdo
    nextButton.position(x + imgWidth + 10, y + imgHeight / 2 - 20); // Botón derecho

    // Terminar el clipping para que los elementos siguientes no sean afectados
    noClip();
}

function mousePressed() {
    // Verificar si se hace clic en una miniatura
    for (let i = 1; i <= 9; i++) {
        let thumbnailX = 10;
        let thumbnailY = i * 50;
        // Si el clic está dentro de los límites de una miniatura
        if (mouseX > thumbnailX && mouseX < thumbnailX + 40 && mouseY > thumbnailY && mouseY < thumbnailY + 40) {
            currentImageIndex = i; // Cambiar a la imagen correspondiente
            img = loadImage(`images/image${currentImageIndex}.jpeg`); // Cargar la imagen seleccionada
        }
    }
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

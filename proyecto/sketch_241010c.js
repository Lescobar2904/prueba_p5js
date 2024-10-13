let img;
let thumbnails = [];
let filterType = ''; // Variable para almacenar el filtro

function preload() {
    img = loadImage('images/image1.jpeg');
    for (let i = 1; i <= 9; i++) {
        thumbnails[i] = loadImage(`images/image${i}.jpeg`);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Crear botones para cambiar los filtros
    let grayscaleButton = createButton('Blanco y Negro');
    grayscaleButton.position(width - 150, 100);
    grayscaleButton.mousePressed(() => applyFilter('GRAY'));

    let sepiaButton = createButton('Sepia');
    sepiaButton.position(width - 150, 150);
    sepiaButton.mousePressed(() => applyFilter('SEPIA'));

    let invertButton = createButton('Inverso');
    invertButton.position(width - 150, 200);
    invertButton.mousePressed(() => applyFilter('INVERT'));

    let resetButton = createButton('Quitar filtro');
    resetButton.position(width - 150, 250);
    resetButton.mousePressed(() => applyFilter(''));
}

function draw() {
    background(0);

    // Mostrar miniaturas
    for (let i = 1; i <= 9; i++) {
        image(thumbnails[i], 10, i * 50, 40, 40);
    }

    // Mostrar imagen principal
    image(img, 150, (height - 400) / 2, 400, 400);

    // Aplicar filtro
    if (filterType !== '') {
        filter(filterType);
    }
}

// Función para aplicar los filtros según el botón presionado
function applyFilter(type) {
    filterType = type;
}

// Cambiar imagen al hacer clic en miniatura
function mousePressed() {
    for (let i = 1; i <= 9; i++) {
        if (mouseX > 10 && mouseX < 50 && mouseY > i * 50 && mouseY < i * 50 + 40) {
            img = loadImage(`images/image${i}.jpeg`);
        }
    }
}

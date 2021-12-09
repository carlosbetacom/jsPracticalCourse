/*******************
* Square
********************/

// Getting side square element
export const sideSquareElment = document.getElementById('sideSquare');

// Getting element to write results
export let perimeterSquareElement = document.getElementById('perimeterSquare');
export let areaSquareElement = document.getElementById('areaSquare');

// Functions to calculate perimetr and area
export let perimeterSquare = side => side * 4;
export let areaSquare = side => side * side;

/*******************
* Equilateral Triangle
********************/

// Getting triangle elements
const sideTriangleA = document.getElementById('sideTriangleA');
const sideTriangleB = document.getElementById('sideTriangleB');
const baseTriangle = document.getElementById('baseTriangle');
const heightTriangle = document.getElementById('heightTriangle');

// Getting element to write results
const perimeterTriangleElement = document.getElementById('perimeterTriangle');
const areaTriangleElement = document.getElementById('areaTriangle');

// Function to get two decimals
let getTwoDecimals = number => Number.parseFloat(number).toFixed(2);

// Function to calculate equilateral triangle height
let heightEqTriangle = side => Math.sqrt(side * 3) / 2;

// Functions to calculate perimeter and area
let perimeterEqTriangle = side => side * 3;
let areaEqTriangle = side => (side * heightEqTriangle(side)) / 2;

// Function to fill inputs (sideTriangleB and baseTriangle) with the sideTriangleA value
function fillInputs() {
    sideTriangleB.value = sideTriangleA.value;
    baseTriangle.value = sideTriangleA.value;
    heightTriangle.value = getTwoDecimals(heightEqTriangle(sideTriangleA.value));
}

// Functions to execute the calculation of the perimeter and area
function executePerimeterEqTriangle() {
    let perimeter = perimeterEqTriangle(sideTriangleA.value);
    perimeter = getTwoDecimals(perimeter);
    perimeterTriangleElement.innerHTML = String(perimeter);
}
function executeAreaEqTriangle() {
    let area = areaEqTriangle(sideTriangleA.value);
    area = getTwoDecimals(area);
    areaTriangleElement.innerHTML = String(area);
}

// Main function to execute calculates
function calculateTriangle() {
    fillInputs();
    executePerimeterEqTriangle();
    executeAreaEqTriangle();
}

/*******************
* Circle
********************/

// Getting radio element
const radio = document.getElementById('radio');

// Getting element to write results
const perimeterCircleElement = document.getElementById('perimeterCircle');
const areaCircleElement = document.getElementById('areaCircle');

// Function to calculate diameter
let diameter = r => r * 2;

// PI
const PI = Math.PI;

// Functions to calculate circunference and area
let circunference = d => d * PI;
let areaCircle = r => (r * r) * PI;

// Functions to execute the calculation of the perimeter and area
function executeCircunference() {
    let d = diameter(radio.value);
    let perimeter = circunference(d);
    perimeter = getTwoDecimals(perimeter);
    perimeterCircleElement.innerHTML = String(perimeter);
}
function executeAreaCircle() {
    let area = areaCircle(radio.value);
    area = getTwoDecimals(area);
    areaCircleElement.innerHTML = String(area);
}

// Main function to execute calculates
function calculateCircle() {

    executeCircunference();
    executeAreaCircle();

}
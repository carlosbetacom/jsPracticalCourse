function showFormFigure() {

    // Hide all figures
    document.getElementById('square').classList.add('hide');
    document.getElementById('triangle').classList.add('hide');
    document.getElementById('circle').classList.add('hide');
    
    // Obtaining selected figure
    let idName = document.getElementById("figureSelected").value;
    let elementFigure = document.getElementById(idName);

    // Showing figure selected
    if(idName != '0') elementFigure.classList.remove('hide');

}

/*******************
* Square
********************/

// Getting side square element
const sideSquareElment = document.getElementById('sideSquare');

// Getting element to write results
let perimeterSquareElement = document.getElementById('perimeterSquare');
let areaSquareElement = document.getElementById('areaSquare');

// Functions to calculate perimetr and area
let perimeterSquare = side => side * 4;
let areaSquare = side => side * side;

// Functions to execute the calculation of the perimeter and area
function executePerimeterSquare() {
    let perimeter = perimeterSquare(sideSquareElment.value);
    perimeterSquareElement.innerHTML = String(perimeter);
}

function executeAreaSquare() {
    let area = areaSquare(sideSquareElment.value);
    areaSquareElement.innerHTML = String(area);
}

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
    heightTriangle.value = heightEqTriangle(sideTriangleA);
}

// Functions to execute the calculation of the perimeter and area
function executePerimeterEqTriangle() {
    let perimeter = perimeterEqTriangle(sideTriangleA.value);
    perimeterTriangleElement.innerHTML = String(perimeter);
}
function executeAreaEqTriangle() {
    let area = areaEqTriangle(sideTriangleA.value);
    areaTriangleElement.innerHTML = String(area);
}

function calculateTriangle() {

    const sideTriangleB = sideTriangleA;
    document.getElementById('sideTriangleB').value = sideTriangleA;

    const baseTriangle = sideTriangleA;
    document.getElementById('baseTriangle').value = sideTriangleA;

    
    document.getElementById('heightTriangle').value = heightTriangle;

    let perimeterTriangle = sideTriangleA * 3;
    perimeterTriangle = Number.parseFloat(perimeterTriangle).toFixed(2);

    let areaTriangle = (baseTriangle * heightTriangle) / 2;
    areaTriangle = Number.parseFloat(areaTriangle).toFixed(2);

    

    perimeterTriangleElement.innerHTML = String(perimeterTriangle);
    areaTriangleElement.innerHTML = String(areaTriangle);

}

function calculateCircle() {

    const radio = Number(document.getElementById('radio').value);
    let diameter = radio * 2;
    const PI = Math.PI;

    let circunference = diameter * PI;
    circunference = Number.parseFloat(circunference).toFixed(2);

    let areaCircle = (radio * radio) * PI;
    areaCircle = Number.parseFloat(areaCircle).toFixed(2);

    const perimeterCircleElement = document.getElementById('perimeterCircle');
    const areaCircleElement = document.getElementById('areaCircle');

    perimeterCircleElement.innerHTML = String(circunference);
    areaCircleElement.innerHTML = String(areaCircle);

}
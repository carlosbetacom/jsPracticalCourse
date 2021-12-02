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

// Getting side value
const sideSquare = Number(document.getElementById('sideSquare').value);

// Functions to calculate perimetr and area
let perimeterSquare = side => side * 4;
let areaSquare = side => side * side;

// Functions to execute the calculation of the perimeter and area
function executePerimeterSquare() {
    let perimeter = perimeterSquare(sideSquare);

    let perimeterSquareElement = document.getElementById('perimeterSquare');
    perimeterSquareElement.innerHTML = String(perimeter);
}

function executeAreaSquare() {
    let area = areaSquare(sideSquare);

    let areaSquareElement = document.getElementById('areaSquare');
    areaSquareElement.innerHTML = String(areaSquare);
}

function calculateTriangle() {

    const sideTriangleA = Number(document.getElementById('sideTriangleA').value);

    const sideTriangleB = sideTriangleA;
    document.getElementById('sideTriangleB').value = sideTriangleA;

    const baseTriangle = sideTriangleA;
    document.getElementById('baseTriangle').value = sideTriangleA;

    let heightTriangle = Math.sqrt((sideTriangleB * sideTriangleB) - ((baseTriangle / 2) * (baseTriangle / 2)));
    heightTriangle = Number.parseFloat(heightTriangle).toFixed(2);
    document.getElementById('heightTriangle').value = heightTriangle;

    let perimeterTriangle = sideTriangleA * 3;
    perimeterTriangle = Number.parseFloat(perimeterTriangle).toFixed(2);

    let areaTriangle = (baseTriangle * heightTriangle) / 2;
    areaTriangle = Number.parseFloat(areaTriangle).toFixed(2);

    const perimeterTriangleElement = document.getElementById('perimeterTriangle');
    const areaTriangleElement = document.getElementById('areaTriangle');

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
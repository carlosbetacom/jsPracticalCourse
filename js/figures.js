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

function calculateSquare() {

    const sideSquare = String(document.getElementById('sideSquare').value);

    // Calculating perimeter and area
    let perimeterSquare = sideSquare * 4;
    let areaSquare = sideSquare * sideSquare;

    // Write results
    let perimeterSquareElement = document.getElementById('perimeterSquare');
    let areaSquareElement = document.getElementById('areaSquare');

    // Showing results
    perimeterSquareElement.innerHTML = String(perimeterSquare);
    areaSquareElement.innerHTML = String(areaSquare);

}

/*
Triangle:

const sideTriangle1;
const sideTriangle2;
const baseTriangle;
const heightTriangle;

let perimeterTriangle = sideTriangle1 + sideTriangle2 + baseTriangle;
let areaTriangle = (baseTriangle * heightTriangle) / 2;
*/
function calculateTriangle() {

    const sideTriangleA = Number(document.getElementById('sideTriangleA').value);
    const sideTriangleB = sideTriangleA;
    const baseTriangle = sideTriangleA;
    let heightTriangle = Math.sqrt((sideTriangleB * sideTriangleB) - ((baseTriangle / 2) * (baseTriangle / 2)));

    let perimeterTriangle = sideTriangleA * 3;
    let areaTriangle = (baseTriangle * heightTriangle) / 2;

    const perimeterTriangleElement = document.getElementById('perimeterTriangle');
    const areaTriangleElement = document.getElementById('areaTriangle');

    perimeterTriangleElement.innerHTML = String(perimeterTriangle);
    areaTriangleElement.innerHTML = String(areaTriangle);

}

/*
Circle:

const radio;
const diameter = radio * 2;
const PI = Math.PI;

let circunference = diameter * PI;
let areaCircle = (radio * radio) * PI;

*/
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
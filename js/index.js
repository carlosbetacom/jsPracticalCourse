import * as figuresModule from "figures";

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

// Functions to execute the calculation of the perimeter and area
function executePerimeterSquare() {
    let perimeter = figuresModule.perimeterSquare(figuresModule.sideSquareElment.value);
    figuresModule.perimeterSquareElement.innerHTML = String(perimeter);
}

function executeAreaSquare() {
    let area = figuresModule.areaSquare(figuresModule.sideSquareElment.value);
    figuresModule.areaSquareElement.innerHTML = String(area);
}
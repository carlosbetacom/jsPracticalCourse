function showBoxFigures() {

    // Hide others box 
    document.getElementById('pricesBox').classList.add('hide');

    // Showing figures box
    document.getElementById("figuresBox").classList.remove('hide');

}
function showBoxPrice() {

    // Hide others box 
    document.getElementById('figuresBox').classList.add('hide');

    // Showing figures box
    document.getElementById("pricesBox").classList.remove('hide');

}

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

export { showBoxFigures, showFormFigure, showBoxPrice };
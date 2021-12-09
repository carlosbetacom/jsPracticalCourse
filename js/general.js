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

export {showFormFigure};
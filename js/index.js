import * as general from "./general.js";
import * as figures from "./figures.js";
import * as discounts from "./discounts.js";

document.getElementById("figuresBoxBtn").addEventListener("click", general.showBoxFigures);
document.getElementById("pricesBoxBtn").addEventListener("click", general.showBoxPrice);

document.getElementById("figureSelected").addEventListener("change", general.showFormFigure);

document.getElementById("calculatePerimeterSquare").addEventListener("click", figures.executePerimeterSquare);
document.getElementById("calculateAreaSquare").addEventListener("click", figures.executeAreaSquare);
document.getElementById("sideTriangleA").addEventListener("input", figures.calculateTriangle);
document.getElementById("radio").addEventListener("input", figures.calculateCircle);

document.getElementById("btnPrices").addEventListener("click", discounts.calculatingPriceWithDiscount);
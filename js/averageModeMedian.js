
// Average

function calculatingAverage(list) {
    const sumList = list.reduce((acumValue = 0, newElement) => acumValue + newElement);
    const averageList = sumList / list.length;

    return averageList;
}

// Median

function isPair(number) {
    let result;
    number % 2 === 0 ? result = true : result = false;

    return result;
}

function calculatingMedian(list) {
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    list.sort((a, b) => a - b);

    const halfList = parseInt(list.length / 2);

    let median;
    if (isPair(list.length)) {
        const firstElement = list[halfList - 1];
        const secondElement = list[halfList];
    
        const avergaeFirstAndSecondElements = calculatingAverage([
            firstElement,
            secondElement,
        ]);

        median = avergaeFirstAndSecondElements;
    } else {
        median = list[halfList];
    }

    return median;
}

// Mode

function calculatingMode(list) {

    /*
    El método sort funciona así:

    El modo de ordenamiento por defecto, responde a la posición del valor del string de acuerdo a su valor Unicode.
    El método sort puede recibir de forma opcional una función como parámetro (compareFunction),
    la cual es una función que define el modo de ordenamiento. Si se omite, 
    el array es ordenado atendiendo a la posición del valor Unicode de cada caracter.

    Si se provee compareFunction, los elementos del array son ordenados de acuerdo al valor que retorna dicha 
    función de comparación. Siendo a y b dos elementos comparados, entonces:
    - Si compareFunction(a, b) es menor que 0, se sitúa a en un indice menor que b. Es decir, a viene primero.
    - Si compareFunction(a, b) retorna 0, se deja a y b sin cambios entre ellos.
    - Si compareFunction(a, b) es mayor que 0, se sitúa b en un indice menor que a.

    Entonces, en el código se está ejecutando el método sort en el array list,
    la función anónima de ordenamiento recibe como parámetro un elmento a 
    (que hace referencia al elemento actual de la iteración) y un elemento b
    (que hace referencia al siguiente elemento de la iteración actual).

    Entonces, ya dentro de la función de ordenamiento, volvemos a llamar al array y
    le aplicacmos el método filter, el cual devuelve un nuevo array con los elementos filtrados según la función
    que se le pasa como parámetro; en este caso, se compara cada elemento del array con el elemento a,
    el resultado es un nuevo array que contiene todos los elementos que son iguales al elemento a, a este nuevo array
    se le aplica el método length el cual devuelve la longitud del array; está longitud nos indica el número de veces
    que el elemento a se encuentra en todo el array.

    Después le restamos el resultado de la misma operación, pero ahora con el elemento b de la iteración acual
    de la función de ornamiento.

    Por último, vamos sacando con el método pop() el último lemento, esto nos va dejando el elemento
    que más se repite en el array.

    */
    return list.sort(function(a, b) { 
        list.filter(v => v===a).length - list.filter(v => v===b).length
    }).pop();

}

export {
    calculatingAverage,
    calculatingMedian,
    calculatingMode
}
const precioOriginal = 100;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});

function calculatingPriceWithDiscount(price, discout) {
    const percentagePriceWithDiscout = 100 - discout;
    const priceWithDiscout = (price * percentagePriceWithDiscout) / 100;

    return priceWithDiscout;
}
const inputPrice = document.getElementById('inputPrice');
const inputDiscount = document.getElementById('inputDiscount');

const priceWithDiscount = document.getElementById('priceWithDiscount');

function calculatingPriceWithDiscount() {
    const percentagePriceWithDiscout = 100 - Number(inputDiscount.value);
    const priceWithDiscoutResult = (Number(inputPrice.value) * percentagePriceWithDiscout) / 100;

    priceWithDiscount.innerHTML = String(priceWithDiscoutResult);
}

export { calculatingPriceWithDiscount }
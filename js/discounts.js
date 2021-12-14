const radioCoupon = document.getElementById('radioCoupon');
const radioPercent = document.getElementById('radioPercent');
const inputPrice = document.getElementById('inputPrice');
const inputDiscount = document.getElementById('inputDiscount');
const inputCoupon = document.getElementById('inputCoupon');

const priceWithDiscount = document.getElementById('priceWithDiscount');

const coupons = [
    {
        name: "20OFF",
        discount: 20
    },
    {
        name: "25OFF",
        discount: 25
    },
    {
        name: "50OFF",
        discount: 50
    }
];

function checkedRadioCoupon() {
    inputCoupon.disabled = false;
    inputDiscount.disabled = true;
}

function checkedRadioPercent() {
    inputCoupon.disabled = true;
    inputDiscount.disabled = false;
}

function calculatingPriceWithDiscount(discount) {
    const percentagePriceWithDiscout = 100 - Number(discount);
    const priceWithDiscoutResult = (Number(inputPrice.value) * percentagePriceWithDiscout) / 100;
    return priceWithDiscoutResult;
}

function executeCalculatePriceWithDiscount() {

    if(radioCoupon.checked) {

        let existCoupon = coupons.find(coupon => coupon.name === inputCoupon.value);

        if(existCoupon) {
            priceWithDiscount.innerText = String(calculatingPriceWithDiscount(existCoupon.discount));
        } else {
            priceWithDiscount.innerText = "Tu cupón no existe!";
        }

    } else if(radioPercent.checked) {

        const priceWithDiscout = calculatingPriceWithDiscount(Number(inputDiscount.value));
        priceWithDiscount.innerText = String(priceWithDiscout);

    }
}

export {
    radioCoupon,
    radioPercent,
    inputDiscount,
    inputCoupon,
    checkedRadioCoupon,
    checkedRadioPercent,
    executeCalculatePriceWithDiscount
}
const initialPrice = document.querySelector('#initial-price');
const currentPrice = document.querySelector('#current-price');
const quantity = document.querySelector('#quantity');
const calculateBtn = document.querySelector('#calculate-button');
const outputBox = document.querySelector('.output-container');


function displayMessage(msg) {
    outputBox.innerHTML = msg
}

function calculateProfitLoss(iP, cP, q) {
    if (cP > iP) {
        let profit = (cP - iP) * q;
        let profitPercentage = (profit * 100) / (iP * q)
        displayMessage(`Your profit is ${profit} and the percentage is ${profitPercentage}%`);
    } else if (iP > cP) {
        let loss = (iP - cP) * q;
        let lossPercentage = (loss * 100) / (iP * q);
        displayMessage(`Your loss is ${loss} and the percentage is ${lossPercentage}%`);
    }
}
calculateBtn.addEventListener('click', () => {
    calculateProfitLoss(Number(initialPrice.value), Number(currentPrice.value), Number(quantity.value));

})
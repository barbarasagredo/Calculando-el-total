price = 400000;
priceSpan = document.querySelector(".initial-price");
priceSpan.innerHTML = price;

amount = 0;
amountSpan = document.querySelector(".amount");
amountSpan.innerHTML = amount;

totalToPay = 0;
totalSpan = document.querySelector(".total");
totalSpan.innerHTML = totalToPay;

document.addEventListener("DOMContentLoaded", () => {
  const subtractButton = document.getElementById("subtractButton");
  const addButton = document.getElementById("addButton");

  addButton.onclick = () => {
    let number = Number(amountSpan.innerHTML);
    let addAmount = number + 1;

    amountSpan.innerHTML = addAmount;
    totalToPay = addAmount * price;
    totalSpan.innerHTML = totalToPay;
  };

  subtractButton.onclick = () => {
    let number = Number(amountSpan.innerHTML);
    let subtractAmount = number - 1;

    amountSpan.innerHTML = subtractAmount;
    totalToPay = subtractAmount * price;
    totalSpan.innerHTML = totalToPay;
  };
});

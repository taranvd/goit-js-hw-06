const decrementBtn = document.querySelector("[data-action='decrement']");
const currentValue = document.querySelector("#value");
const incrementBtn = document.querySelector("[data-action='increment']");

let counterValue = 0;

incrementBtn.addEventListener("click", handleIncrementButtonClock);
decrementBtn.addEventListener("click", handleDecrementButtonClock);

function handleIncrementButtonClock() {
	counterValue++;
	updateCurrentValueUI();
}

function handleDecrementButtonClock() {
	counterValue--;
	updateCurrentValueUI();
}

function updateCurrentValueUI() {
	currentValue.textContent = counterValue;
}

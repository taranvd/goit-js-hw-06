const decrementBtn = document.querySelector("[data-action='decrement']");
const currentValue = document.querySelector("#value");
const incrementBtn = document.querySelector("[data-action='increment']");

let counterValue = 0;

incrementBtn.addEventListener("click", incrementButton);

decrementBtn.addEventListener("click", decrementButton);

function incrementButton() {
	counterValue++;
	return updateValueUI();
}

function decrementButton() {
	counterValue--;

	return updateValueUI();
}

function updateValueUI() {
	return (currentValue.textContent = counterValue);
}

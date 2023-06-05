function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const divCreateButton = document.querySelector("[data-create]");
const divDestroyButton = document.querySelector("[data-destroy]");
const inputNumber = document.querySelector("input[type='number']");
const boxesDivEl = document.getElementById("boxes");

const createBoxes = () => {
	const amount = +inputNumber.value;
	let width = 30;
	let height = 30;

	for (let i = 0; i < amount; i++) {
		const createDivEl = document.createElement("div");
		createDivEl.style.width = `${width}px`;
		createDivEl.style.height = `${height}px`;
		createDivEl.style.backgroundColor = getRandomHexColor();

		boxesDivEl.appendChild(createDivEl);

		width += 10;
		height += 10;
	}
};

divCreateButton.addEventListener("click", createBoxes);
divDestroyButton.addEventListener("click", () => {
	boxesDivEl.innerHTML = "";
});

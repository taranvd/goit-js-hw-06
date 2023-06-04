function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const valueColor = document.querySelector(".color");

buttonChangeColor.addEventListener("click", () => {
	const changeColor = (document.body.style.backgroundColor =
		getRandomHexColor());

	valueColor.textContent = changeColor;
});

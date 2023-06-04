const inputEl = document.querySelector("#name-input");
const inputTextEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
	inputTextEl.textContent = event.target.value;

	if (!event.target.value) {
		inputTextEl.textContent = " Anonymous!";
	}
});

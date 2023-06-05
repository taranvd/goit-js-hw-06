const inputEl = document.querySelector("#name-input");
const inputTextEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (e) => {
	const trimmedValue = e.target.value.trim();

	inputTextEl.textContent = trimmedValue;

	if (!e.target.value) {
		inputTextEl.textContent = "Anonymous";
	}
});

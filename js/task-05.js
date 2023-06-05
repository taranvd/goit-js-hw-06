const inputEl = document.querySelector("#name-input");
const inputTextEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (e) => {
	inputTextEl.textContent = e.target.value;

	if (!e.target.value) {
		inputTextEl.textContent = "Anonymous";
	}
});

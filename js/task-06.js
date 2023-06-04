const validationInputEl = document.querySelector("#validation-input");
const dataLength = validationInputEl.getAttribute("data-length");

validationInputEl.addEventListener("blur", (e) => {
	const value = e.target.value;

	if (value.length === Number(dataLength)) {
		validationInputEl.classList.remove("invalid");
		validationInputEl.classList.add("valid");
	} else {
		validationInputEl.classList.remove("valid");
		validationInputEl.classList.add("invalid");
	}
});

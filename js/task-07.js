const textEl = document.getElementById("text");
const fontSizeControler = document.getElementById("font-size-control");

fontSizeControler.addEventListener("input", (event) => {
	const fontSize = event.target.value + "px";

	textEl.style.fontSize = fontSize;
});

const textEl = document.getElementById("text");
const fontSizeControler = document.getElementById("font-size-control");

fontSizeControler.addEventListener("input", (e) => {
	const fontSize = e.target.value + "px";
	textEl.style.fontSize = fontSize;
});

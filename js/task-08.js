const loginFormEl = document.querySelector(".login-form");
const inputEmailEl = document.querySelector('[name="email"]');
const inputPasswordEl = document.querySelector('[name="password"]');
const submitButtonEl = document.querySelector(".login-form > button");

loginFormEl.addEventListener("submit", (event) => {
	event.preventDefault();

	const formData = new FormData(event.currentTarget);

	if (!inputEmailEl.value || !inputPasswordEl.value) {
		alert("Всі поля повинні бути заповнені");
	}

	const objData = {};

	formData.forEach((value, key) => {
		objData[key] = value;
	});

	console.log(objData);

	loginFormEl.reset();
});

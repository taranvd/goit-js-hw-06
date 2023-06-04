const loginFormEl = document.querySelector(".login-form");
const inputEmailEl = document.querySelector('[name="email"]');
const inputPasswordEl = document.querySelector('[name="password"]');
const submitButtonEl = document.querySelector(".login-form > button");

loginFormEl.addEventListener("submit", (e) => {
	e.preventDefault();

	if (!inputEmailEl.value || !inputPasswordEl.value) {
		return alert("Всі поля повинні бути заповнені");
	}

	const formData = new FormData(e.currentTarget);
	const dataObj = {};
	formData.forEach((value, key) => {
		dataObj[key] = value;
	});

	console.log(dataObj);

	//* варіант 2
	// const formElements = e.currentTarget.elements;
	// const email = formElements.email.value;
	// const password = formElements.password.value;

	// const formData = {
	// 	email,
	// 	password,
	// };

	// console.log(formData);

	loginFormEl.reset();
});

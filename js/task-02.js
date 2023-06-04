const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const makeProductLi = function (array) {
	for (const ingredient of ingredients) {
		const liElement = document.createElement("li");
		liElement.classList.add("item");
		liElement.textContent = ingredient;

		ingredientsList.append(liElement);
	}
};

makeProductLi(ingredients);

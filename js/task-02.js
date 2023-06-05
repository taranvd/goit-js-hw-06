const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ingredientsListEl = document.getElementById("ingredients");

const makeingredientsListEl = (array) => {
	array.forEach((el) => {
		const ingredientLiEl = document.createElement("li");
		ingredientLiEl.classList.add("item");
		ingredientLiEl.append(el);
		return ingredientsListEl.append(ingredientLiEl);
	});
};

makeingredientsListEl(ingredients);

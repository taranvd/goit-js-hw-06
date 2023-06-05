const categoriesList = document.querySelectorAll(".item");

//* 1
console.log("Number of categories: ", categoriesList.length);

//* 2

categoriesList.forEach((e) => {
	console.log("Category: ", e.firstElementChild.textContent);
	console.log("Elements: ", e.lastElementChild.children.length);
});

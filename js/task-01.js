const categoriesList = document.querySelectorAll("#categories > li");

//* 1
const categoriesCount = categoriesList.length;
console.log(`Number of categories: ${categoriesCount}`);

//* 2
categoriesList.forEach((el) => {
	console.log(`Category: `, el.firstElementChild.textContent);
	console.log(`Elements: `, el.lastElementChild.children.length);
});

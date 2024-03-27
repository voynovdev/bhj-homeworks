const startBox = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const arrayLinks = Array.from(document.querySelectorAll(".dropdown__link"));
const arrayLi = Array.from(document.querySelectorAll(".dropdown__item"))

function moveList() {
	if (list.className === "dropdown__list") {
		list.className = "dropdown__list dropdown__list_active";
	} else {
		list.className = "dropdown__list";
	}
}

startBox.addEventListener("click", moveList);
list.addEventListener("click", (event) => event.preventDefault())

for (let i = 0; i <= 3; i++) {
	arrayLi[i].addEventListener("click",
		function() {
			startBox.textContent = arrayLinks[i].textContent;
		});
}
const arrayTab = Array.from(document.querySelectorAll(".tab"))
const arrayContent = Array.from(document.querySelectorAll(".tab__content"))

arrayTab.forEach((tab, index) => {
	tab.addEventListener("click", () => {
		arrayTab.forEach(tab => {
			tab.classList.remove("tab_active");
		});

		tab.classList.add("tab_active");

		arrayContent.forEach(content => {
			content.classList.remove("tab__content_active");
		});

		arrayContent[index].classList.add("tab__content_active");
	});
});


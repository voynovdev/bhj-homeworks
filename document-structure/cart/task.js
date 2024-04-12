const decBtn = document.querySelectorAll(`.product__quantity-control_dec`);
const incBtn = document.querySelectorAll(`.product__quantity-control_inc`);
const value = document.querySelectorAll(`.product__quantity-value`);
const backetBtn = document.querySelectorAll(`.product__add`);
const countArray = document.querySelectorAll(`.product__quantity-value`);
const srcArray = document.querySelectorAll(`.product__image`)
const idArray = document.querySelectorAll(`.product`)
const backet = document.querySelector(`.cart__products`)


decBtn.forEach(element => {
	element.addEventListener(`click`, () => {
		element.nextElementSibling.textContent--
		if (element.nextElementSibling.textContent < 1) {
			element.nextElementSibling.textContent = 1
		}
	})
});
incBtn.forEach(element => {
	element.addEventListener(`click`, () => {
		element.previousElementSibling.textContent++
	})
});

backetBtn.forEach(element => {
	element.addEventListener(`click`, () => {
		const dataId = element.closest(`.product`).getAttribute(`data-id`),
			  src = element.closest(`.product`).children[1].src,
			  count = element.previousElementSibling.children[1].textContent;
		
		const productId = element.closest(`.product`).getAttribute(`data-id`);
		const cartProducts = Array.from(document.querySelectorAll('.cart__product'))
		const productInCard = cartProducts.find(card => card.getAttribute(`data-id`) === productId)
		if(productInCard) {
			productInCard.lastElementChild.textContent = Number(productInCard.lastElementChild.textContent) + Number(element.previousElementSibling.children[1].textContent);
		} else {
			backet.insertAdjacentHTML(`beforeend`, `
			<div class="cart__product" data-id="${dataId}">
				<img class="cart__product-image" src="${src}">
				<div class="cart__product-count">${count}</div>
			</div>
			`)
		}
	})
})
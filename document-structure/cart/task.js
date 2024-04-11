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
		const outerElem = document.createElement(`div`);
		const imgElem = document.createElement(`img`);
		const innerElem = document.createElement(`div`);


		outerElem.classList.add(`cart__product`);
		imgElem.classList.add(`cart__product-image`);
		innerElem.classList.add(`cart__product-count`);
		outerElem.setAttribute(`data-id`, `${element.closest(`.product`).getAttribute(`data-id`)}`);
		productId = element.closest(`.product`).getAttribute(`data-id`);
		outerElem.innerHTML = `
                <img class="cart__product-image" src="${element.closest(`.product`).children[1].src}">
                <div class="cart__product-count">${element.previousElementSibling.children[1].textContent}</div>`;

		const cartProducts = document.querySelectorAll('.cart__product')

		if (cartProducts.length < 1) {
			backet.insertAdjacentElement(`beforeend`, outerElem);
		}

		let foundInCart = false;
		for (let i = 0; i < cartProducts.length; i++) {
			if (cartProducts[i].getAttribute(`data-id`) === element.closest(`.product`).getAttribute(`data-id`)) {
				cartProducts[i].children[1].textContent = Number(cartProducts[i].children[1].textContent) + Number(element.previousElementSibling.children[1].textContent);
				foundInCart = true;
				break;
			}
		}

		if (!foundInCart) {
			backet.insertAdjacentElement(`beforeend`, outerElem);
		}
	})
})
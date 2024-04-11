const elements = document.querySelectorAll(`.has-tooltip`);

elements.forEach(element=>{
    element.addEventListener(`click`, (e)=>{
        e.preventDefault();
        const titleText = element.getAttribute(`title`);

        let nextElem = element.nextElementSibling;

        if (nextElem && nextElem.classList.contains(`tooltip`)) {
            nextElem.remove();
        } else {
            const newElem = document.createElement(`div`);
            const rect = element.getBoundingClientRect();
            newElem.style.top = 5 + rect.bottom + `px`;
            newElem.style.left = rect.left + `px`;

            newElem.classList.add(`tooltip`, `tooltip_active`);
            newElem.textContent = titleText;
            element.insertAdjacentElement(`afterend`, newElem);
        }
})})
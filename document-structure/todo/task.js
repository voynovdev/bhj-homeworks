const input = document.querySelector(`.tasks__input`);
const btn = document.querySelector(`.tasks__add`);
const taskList = document.querySelector(`.tasks__list`);

btn.addEventListener(`click`, (e)=>{
    e.preventDefault();

    const outerElem = document.createElement(`div`);
    const innerElem = document.createElement(`div`);
    const removeElem = document.createElement(`a`);

    outerElem.classList.add(`task`);
    innerElem.classList.add(`task__title`);
    removeElem.setAttribute("href", "#")
    removeElem.classList.add(`task__remove`);
    removeElem.textContent = `×`;
    innerElem.textContent = input.value;
    

    taskList.insertAdjacentElement(`beforeend`, outerElem);
    outerElem.insertAdjacentElement(`beforeend`, innerElem);
    outerElem.insertAdjacentElement(`beforeend`, removeElem);

    input.value = ``;
})

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('task__remove')) {
      event.target.closest('.task').remove();
    }
});
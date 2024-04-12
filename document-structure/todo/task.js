const input = document.querySelector(`.tasks__input`);
const btn = document.querySelector(`.tasks__add`);
const taskList = document.querySelector(`.tasks__list`);

btn.addEventListener(`click`, (e)=>{
    e.preventDefault();
    if (input.value !== ``) {
      taskList.insertAdjacentHTML(`beforeend`,`
      <div class="task">
        <div class="task__title">
          ${input.value}
        </div>
        <a href="#" class="task__remove">×</a>
      </div>`)
      input.value = ``;
    } else {
      alert("Поле ввода пустое")
    }
})

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('task__remove')) {
      event.target.closest('.task').remove();
    }
});
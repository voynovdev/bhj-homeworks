const pollTitle = document.querySelector('.poll__title'); // подтянул переменную с вопросом
const pollAnswers = document.querySelector('.poll__answers'); // подтянул переменную со списком кнопок

let xhr = new XMLHttpRequest(); // записал в переменную экземпляр объекта

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true); // создал запрос на источник с вопросами/ответами

xhr.addEventListener('readystatechange', ()=>{
    if (xhr.readyState === xhr.DONE) {
        const parsetText = JSON.parse(xhr.responseText); // распарсил JSON текст в объект
        const question = parsetText.data.title; // из объекта взял вопрос
        const answerArr = parsetText.data.answers; // из объекта взял массив с ответами

        pollTitle.textContent = question; // записал вопрос в нужный блок

        for(let i = 0; i < answerArr.length; i++) {
            pollAnswers.insertAdjacentHTML('beforeend', `
                <button class="poll__answer">
                    ${answerArr[i]}
                </button>
            `) 
        } // цикл для перебора ответов и создания кнопок со значениями элементов 

        const btnAnswers = Array.from(document.querySelectorAll('.poll__answer')); // массив созданных кнопок

        btnAnswers.forEach(element => {
            element.addEventListener('click', () => {
                alert('Спасибо ваш голос засчитан!') 
            })
        }) // цикл-обработчик кнопок на нажатие пользователем и вывода диалогового окна
      } // условная конструкция проверяющая готовность
}) // создал обработчик события готовности запроса

xhr.send(); // отправил запрос

const itemsList = document.getElementById('items') // подтянул в переменную блок со списком валют

let xhr = new XMLHttpRequest(); // записал в переменную экземпляр объекта

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true); // создал запрос на источник с курсом валют

xhr.addEventListener('readystatechange', ()=>{
    if (xhr.readyState === xhr.DONE) {
        const loader = document.getElementById('loader'); // подтянул в переменную гифку прогрузки
        loader.className = 'loader'; // присвоил ей другой клас для скрытия со страницы

        const parsetText = JSON.parse(xhr.responseText); // распарсил JSON текст в объект
        const valutes = parsetText.response.Valute; // из объекта взял ключ Valutes
        const currencyObj = Object.keys(valutes); // вернул массив свойством Object.keys 
        const currencyAmount = currencyObj.length; // получил количество элементов в массиве
        for(let i = 0; i < currencyAmount; i++) {
            let currentKey = currencyObj[i]; // записал в переменную текущий ключ 
            let code = valutes[`${currencyObj[i]}`].CharCode; // записал аббревиатуру валюты в переменную
            let value = valutes[`${currencyObj[i]}`].Value; // записал значение валюты в переменную
            itemsList.insertAdjacentHTML('beforeend', `
                <div class="item">
                    <div class="item__code">
                        ${code}
                    </div>
                    <div class="item__value">
                        ${value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>
            `) // отрисовал HTML-разметку
        } // создал цикл для получения нужных значений и отрисовки HTML-разметки
      } // условная конструкция проверяющая готовность
}) // создал обработчик события готовности запроса

xhr.send(); // отправил запрос


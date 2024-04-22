const signinBtn = document.getElementById('signin__btn');
const signWindow = document.getElementById('signin');
const welcomeWindow = document.getElementById('welcome');
const userId = document.getElementById('user_id');


signinBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    const form = document.getElementById('signin__form');
    const formData = new FormData(form);
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = function() {
        if (xhr.status === 200 || xhr.status === 201) {
            let response = JSON.parse(xhr.responseText);
            if (response.success) {
                console.log('Авторизация успешна. ID пользователя: ' + response.user_id);
                localStorage.setItem('id', response.user_id)
                signWindow.className = "signin";
                welcomeWindow.className = "welcome welcome_active";
                userId.textContent = response.user_id;
            } else {
                alert("Неверный логин/пароль")
            }
        } else {
            console.error('Произошла ошибка. Статус:', xhr.status);
        }  
    };
    
    xhr.send(JSON.stringify(Object.fromEntries(formData)));
});

if (localStorage.getItem('id')) {
    signWindow.className = "signin";
    welcomeWindow.className = "welcome welcome_active";
    userId.textContent = localStorage.getItem('id');
} else {
    signWindow.className = "signin signin_active"
}
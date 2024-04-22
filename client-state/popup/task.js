const popup = document.getElementById('subscribe-modal');
const popupClose = document.querySelector('.modal__close');

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    
    if (cookie) {
        return cookie.substring(name.length + 1);
    } else {
        return null;
    }
}

if(getCookie('close') === "true") {
    console.log("Окно уже показывалось")
} else {
    popup.className = "modal modal_active";
    popupClose.addEventListener('click', () => {
        popup.className = "modal";
        setCookie('close', 'true')
    }) 
}




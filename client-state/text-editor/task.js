const textarea = document.getElementById('editor');
const savedText = localStorage.getItem('savedText');

if(savedText) {
    textarea.value = savedText;
} else {
    textarea.addEventListener('input', () => {
        localStorage.setItem('savedText', textarea.value)
    })
}
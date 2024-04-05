const rotator = document.getElementsByClassName("rotator__case");

let i = 0;

function reloadPage() {
    rotator[i].classList.toggle("rotator__case_active");
    i = (i + 1) % rotator.length;
    rotator[i].classList.toggle("rotator__case_active");
}

setInterval(reloadPage, 1000);
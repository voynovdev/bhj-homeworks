const reveal = document.getElementsByClassName("reveal");

function isVisible(el) {
	const {top, bottom} = el.getBoundingClientRect()

	if (bottom < 0) {
		return false
	}
	if (top > window.innerHeight) {
		return false
	}
	return true
}

function reloadPage() {
    for(let i = 0; i < reveal.length; i++) {
        if (isVisible(reveal[i])) {
            reveal[i].classList.add("reveal_active")
        } else {
            reveal[i].classList.remove("reveal_active")
        }
    }
}

setInterval(reloadPage, 50)
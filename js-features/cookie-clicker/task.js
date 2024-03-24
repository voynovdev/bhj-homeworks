let cookie = document.getElementById("cookie");
let clickerCounter = document.getElementById("clicker__counter");
let clickerCounterValue = clickerCounter.textContent;
cookie.onclick = function() {
	clickerCounterValue++;
	clickerCounter.textContent = clickerCounterValue;

	cookie.width = 300;
	setTimeout(() => {
		cookie.width = 200;
	}, 150);
}
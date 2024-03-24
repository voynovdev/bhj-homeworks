let timer = document.getElementById("timer");
let timerValue = timer.textContent;
let interval = setInterval(updateTimer, 1000);

function updateTimer() {
	if (timerValue > 0) {
		timerValue--;
		timer.textContent = timerValue;
	} else {
		clearInterval(interval);
		alert("Вы победили в конкурсе!");
	}
}


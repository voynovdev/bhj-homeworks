let deadElement = document.getElementById("dead");
let lostElement = document.getElementById("lost");
let deadCounter = deadElement.textContent;
let lostCounter = lostElement.textContent;
let index = 1;
let holeFinded = false;
let getHole;

function onHoleClickWin() {
	deadCounter++;
	deadElement.textContent = deadCounter;
}

function onHoleClickLose() {
	lostCounter++;
	lostElement.textContent = lostCounter;
}

function updateCounters() {
	if (lostCounter === 5) {
		alert("Вы проиграли!")
		deadCounter = 0;
		lostCounter = 0;
		deadElement.textContent = 0;
		lostElement.textContent = 0;
	} else if (deadCounter === 10) {
		alert("Вы выиграли!")
		deadCounter = 0;
		lostCounter = 0;
		deadElement.textContent = 0;
		lostElement.textContent = 0;
	}
}

function updateBoard() {
	while (!holeFinded) {
		console.log(index)
		getHole = document.getElementById(`hole${index}`);
		updateCounters();
		if (getHole.className.includes(`hole`)) {
			getHole.onclick = () => {
				onHoleClickLose()
			}
		}
		if (getHole.className.includes(`hole_has-mole`)) {
			getHole.onclick = () => {
				onHoleClickWin();
				getHole.onclick = null;
			}
			
			index = 1;
			break
		} else {
			index++;
		}
	}
}

setInterval(updateBoard, 700)
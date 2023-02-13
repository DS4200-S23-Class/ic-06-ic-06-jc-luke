
function buttonClicked() {
	let newText = "Button was clicked!";

	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = newText;
}

function button2Clicked() {
	let line = document.getElementByID("line");

	line.classList.add("red");
}

document.getElementByID("subButton").addEventListener('click', button2Clicked);
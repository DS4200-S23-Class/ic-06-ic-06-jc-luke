
function buttonClicked() {
	let newText = "Button was clicked!";

	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = newText;
}

<<<<<<< HEAD
function button2Clicked() {
	let line = document.getElementByID("line");

	line.classList.add("red");
}

document.getElementByID("subButton").addEventListener('click', button2Clicked);
=======

function mouseOver() {
	document.getElementById("circle").style.backgroundColor = 'orange';



}

document.getElementById("circle").addEventListener('mouseover', mouseOver);
>>>>>>> f09e390fee090d7f7e3ee13ca53681e02fd3c3d4

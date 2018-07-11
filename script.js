const hideButton = document.getElementById('hideAllTheSquares');
const showButton = document.getElementById('showAllTheSquares');
const redButton = document.getElementById('toggleRed');
const greenButton = document.getElementById('toggleGreen');
const blueButton = document.getElementById('toggleBlue');



hideButton.addEventListener('click', ()=>  {
	hideAllTheSquares();
});

showButton.addEventListener('click', ()=>  {
	showAllTheSquares();
});

redButton.addEventListener('click', ()=>  {
	toggleRed();
});

blueButton.addEventListener('click', ()=>  {
	toggleBlue();
});

greenButton.addEventListener('click', ()=>  {
	toggleGreen();
});



function hideAllTheSquares() {
	red.style.display = 'none';	
	green.style.display = 'none';
	blue.style.display = 'none';	
}

function showAllTheSquares() {
	red.style.display = 'inherit';
	green.style.display = 'inherit';
	blue.style.display = 'inherit';
}

function toggleRed() {
	const red = document.getElementById("red");
	if (red.style.display === 'none') {
		red.style.display = 'inherit';
	} else {
		red.style.display = 'none';
	}		
}

function toggleGreen() {
	const green = document.getElementById("green");
	if (green.style.display === 'none') {
		green.style.display = 'inherit';
	} else {
		green.style.display = 'none';
	}		
}

function toggleBlue() {
	const blue = document.getElementById("blue");
	if (blue.style.display === 'none') {
		blue.style.display = 'inherit';
	} else {
		blue.style.display = 'none';
	}		
}
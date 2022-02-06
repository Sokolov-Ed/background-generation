let background = document.querySelector('body');
let button = document.querySelector('button');
let backgroundData = document.querySelector('.backgroundData');
let firstColor, secondColor;

button.addEventListener('click', () => {
	firstColor = setColorHEX();
	secondColor = setColorHEX();
	background.style.background = `linear-gradient(to right, #${firstColor}, #${secondColor})`;
	backgroundData.innerHTML = `background: linear-gradient(to right, #${firstColor}, #${secondColor})`;
});

function convertTo16(number) {
	return number.toString(16);
}

function setColorHEX() {
	let colorHex = [];
	generationColorHEX();
	function generationColorHEX() {
		if(colorHex.length === 6) {
			return;
		}
		colorHex.push(convertTo16(Math.floor(Math.random() * 16)));
		generationColorHEX();
	}
	return colorHex.join().replace(/,/g, '');
}
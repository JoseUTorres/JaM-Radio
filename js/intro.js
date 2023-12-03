let secondLine = document.getElementById("secondP");
let press = document.getElementById("press");
let firstLine = document.getElementById("firstP");

function intro() {
	setTimeout(() => {
		secondLine.style.display = "block";
	}, 5000);
	setTimeout(() => {
		press.style.display = "flex";
	}, 8000);
}

async function typeSentence(sentence, eleRef, delay = 300) {
	const letters = sentence.split("");
	let i = 0;
	while (i < letters.length) {
		await waitForMs(delay);
		$(eleRef).append(letters[i]);
		i++;
	}
	return;
}

function waitForMs(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

$(document).ready(() => {
	typeSentence("for my love <3", firstLine);
	intro();
});

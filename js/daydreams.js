const memoriesPath = "./assets/memories/";
const sceneryPath = "./assets/scenery/";
const daydreamImages = [
	{
		path: `${memoriesPath}cd-1.jpg`,
	},
	{
		path: `${memoriesPath}cd-2.jpg`,
	},
	{
		path: `${memoriesPath}zoomers.JPG`,
	},
	{
		path: `${memoriesPath}theboys.JPEG`,
	},
	{
		path: `${memoriesPath}tea.JPG`,
	},
	{
		path: `${memoriesPath}sleep.JPEG`,
	},
	{
		path: `${memoriesPath}seattle.JPG`,
	},
	{
		path: `${memoriesPath}rooftop.JPG`,
	},
	{
		path: `${memoriesPath}river.jpeg`,
	},
	{
		path: `${memoriesPath}proud.JPEG`,
	},
	{
		path: `${memoriesPath}museum.JPG`,
	},
	{
		path: `${memoriesPath}momanddad.JPG`,
	},
	{
		path: `${memoriesPath}kiby.jpeg`,
	},
	{
		path: `${memoriesPath}jgarden.JPG`,
	},
	{
		path: `${memoriesPath}hercity.JPG`,
	},
	{
		path: `${memoriesPath}graduate.jpeg`,
	},
	{
		path: `${memoriesPath}ftc.JPEG`,
	},
	{
		path: `${memoriesPath}cuddle.JPEG`,
	},
	{
		path: `${memoriesPath}carousel.jpeg`,
	},
];
const filmImages = [
	{
		path: `${sceneryPath}tulips.JPG`,
	},
	{
		path: `${sceneryPath}path.JPG`,
	},
	{
		path: `${sceneryPath}lava.JPG`,
	},
	{
		path: `${sceneryPath}hotel.JPG`,
	},
	{
		path: `${sceneryPath}green.JPG`,
	},
	{
		path: `${sceneryPath}glassgarden.JPG`,
	},
	{
		path: `${sceneryPath}glass.JPG`,
	},
	{
		path: `${sceneryPath}gardengirl.JPG`,
	},
	{
		path: `${sceneryPath}garden2.JPG`,
	},
	{
		path: `${sceneryPath}garden.JPG`,
	},
	{
		path: `${sceneryPath}fountain.JPG`,
	},
	{
		path: `${sceneryPath}beach2.JPG`,
	},
	{
		path: `${sceneryPath}beach.JPG`,
	},
];

let daydreamIndex = Math.floor(Math.random() * daydreamImages.length);
let filmIndex = Math.floor(Math.random() * filmImages.length);
const changeButtons = document.querySelectorAll(".next-bar span");
const daydreamsPic = document.getElementById("daydreams-pic");
const filmPic = document.getElementById("film-pic");

$(document).ready(() => {
	daydreamsPic.src = daydreamImages[daydreamIndex].path;
	filmPic.src = filmImages[filmIndex].path;
});

changeButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const buttonId = button.id;
		if (buttonId.includes("prev")) {
			if (buttonId.includes("daydreams")) {
				if (daydreamIndex == 0) {
					daydreamIndex = daydreamImages.length - 1;
				} else {
					daydreamIndex -= 1;
				}
				daydreamsPic.src = daydreamImages[daydreamIndex].path;
			} else if (buttonId.includes("film")) {
				if (filmIndex == 0) {
					filmIndex = filmImages.length - 1;
				} else {
					filmIndex -= 1;
				}
				filmPic.src = filmImages[filmIndex].path;
			}
		} else if (buttonId.includes("next")) {
			if (buttonId.includes("daydreams")) {
				if (daydreamIndex == daydreamImages.length - 1) {
					daydreamIndex = 0;
				} else {
					daydreamIndex += 1;
				}
				daydreamsPic.src = daydreamImages[daydreamIndex].path;
			} else if (buttonId.includes("film")) {
				if (filmIndex == filmImages.length - 1) {
					filmIndex = 0;
				} else {
					filmIndex += 1;
				}
				filmPic.src = filmImages[filmIndex].path;
			}
		}
	});
});

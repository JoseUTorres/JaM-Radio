let defaultPlaylist = [
	{
		title: "Fireflies",
		artist: "Pearl and The Oysters",
		path: "../audio/Fireflies-Pearl and The Oysters.mp3",
	},
];
let ourPlaylist = [
	{
		title: "It's Ok You're With Me",
		artist: "Tyler, The Creator",
		path: "../audio/it's okay you're with me.mp3",
	},
];
let isLoading = false;
let currentTrack = document.createElement("audio");
let trackIndex = 0;
let updateTimer;
let isPlaying = false;
let currentPlaylist = defaultPlaylist;
let playButton = document.getElementById("play-pause");
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let currTime = document.getElementById("currTime");
let totalTime = document.getElementById("totalTime");
let displayPlaylist = document.getElementById("displayPlaylist");

let titleTrack = document.getElementById("titleTrack");
let artistName = document.getElementById("artistName");

playButton.addEventListener("click", playpauseTrack);
prevButton.addEventListener("click", () => {
	resetValues();
	setTimeout(prevTrack, 1000);
});
nextButton.addEventListener("click", () => {
	resetValues();
	setTimeout(nextTrack, 1000);
});

function loadTrack(trackIndex, playlist) {
	clearInterval(updateTimer);

	currentTrack.src = playlist[trackIndex].path;
	currentTrack.load();

	titleTrack.textContent = playlist[trackIndex].title;
	artistName.textContent = playlist[trackIndex].artist;

	updateTimer = setInterval(seekUpdate, 100);
	isLoading = false;
	currentTrack.addEventListener("ended", nextTrack);
}

function resetValues() {
	isLoading = true;
	currTime.textContent = "...";
	totalTime.textContent = "...";
	titleTrack.textContent = "Loading ...";
	artistName.textContent = "We'll be right back";
	currentTrack.pause();
}

function playpauseTrack() {
	if (!isPlaying) playTrack();
	else pauseTrack();
}

function playTrack() {
	currentTrack.play();
	isPlaying = true;

	playButton.classList.replace("paused", "playing");
}

function pauseTrack() {
	currentTrack.pause();
	isPlaying = false;

	playButton.classList.replace("playing", "paused");
}

function nextTrack() {
	if (trackIndex < currentPlaylist.length - 1) {
		trackIndex += 1;
	} else {
		trackIndex = 0;
	}
	loadTrack(trackIndex, currentPlaylist);
	playTrack();
}

function prevTrack() {
	if (trackIndex > 0) {
		trackIndex -= 1;
	} else {
		trackIndex = currentPlaylist.length - 1;
	}
	loadTrack(trackIndex, currentPlaylist);
	playTrack();
}

function seekUpdate() {
	if (!isNaN(currentTrack.duration)) {
		seekPosition = currentTrack.currentTime * (100 / currentTrack.duration);

		let currentMinutes = Math.floor(currentTrack.currentTime / 60);
		let currentSeconds = Math.floor(
			currentTrack.currentTime - currentMinutes * 60
		);
		let durationMinutes = Math.floor(currentTrack.duration / 60);
		let durationSeconds = Math.floor(
			currentTrack.duration - durationMinutes * 60
		);

		if (currentSeconds < 10) {
			currentSeconds = "0" + currentSeconds;
		}
		if (durationSeconds < 10) {
			durationSeconds = "0" + durationSeconds;
		}
		if (currentMinutes < 10) {
			currentMinutes = "0" + currentMinutes;
		}
		if (durationMinutes < 10) {
			durationMinutes = "0" + durationMinutes;
		}

		if (isLoading) return;
		currTime.textContent = currentMinutes + ":" + currentSeconds;
		totalTime.textContent = durationMinutes + ":" + durationSeconds;
	}
}

function changePlaylist(playlist, playlistName) {
	pauseTrack();
	currentPlaylist = playlist;
	displayPlaylist.textContent = playlistName;
	loadTrack(0, currentPlaylist);
	playTrack();
}

$(document).ready(() => {
	loadTrack(trackIndex, currentPlaylist);
});

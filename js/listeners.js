const options = document.getElementById("select-relative");
var list = document.getElementById("select-list");
var arrow = document.querySelectorAll(".select-wrapper")[0];
options.addEventListener("click", () => {
	let currStyle = list.style["display"];
	if (currStyle == "none" || !currStyle) {
		list.style["display"] = "block";
		arrow.style.setProperty("--rotate", "rotate(180deg)");
	} else {
		list.style["display"] = "none";
		arrow.style.setProperty("--rotate", "0");
	}
});

const playlists = document.querySelectorAll(".playlists li");
playlists.forEach((playlist) => {
	playlist.addEventListener("click", (e) => {
		let currPlaylistId = e.target.id;
		let currPlaylistName = e.target.textContent;
		changePlaylist(eval(currPlaylistId), currPlaylistName);
	});
});

let header = document.getElementById("header");
let everything = document.getElementById("everything");
let introElm = document.getElementById("intro");
let callback = function spaceStart(e) {
	if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
		introElm.remove();
		header.style.display = "flex";
		everything.style.display = "block";
		createVisualizer();
		currentTrack.play();
		isPlaying = true;
		document.body.removeEventListener("keyup", callback);
	}
};
document.body.addEventListener("keyup", callback);

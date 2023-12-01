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

document.body.onkeyup = function (e) {
	if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
		createVisualizer();
	}
};

function playSong(filename) {
    const player = document.getElementById("audioPlayer");
    const nowPlaying = document.getElementById("nowPlaying");
    const songName = filename.split('/').pop().replace(/_/g, ' ').replace('.mp3', '');
    nowPlaying.textContent = "🎧 Now Playing: " + songName;
    player.src = filename;
    player.play();
}

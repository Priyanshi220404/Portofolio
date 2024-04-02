var currentAudio = null;

function toggleMusic(musicPath) {
    if (currentAudio && currentAudio.src === musicPath) {
        if (currentAudio.paused) {
            currentAudio.play().catch(error => console.error('Play Error:', error));
        } else {
            currentAudio.pause();
        }
    } else {
        if (currentAudio) {
            currentAudio.pause();
        }

        currentAudio = new Audio(musicPath);
        currentAudio.play().catch(error => console.error('Play Error:', error));
    }
}

function stopMusic() {
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
    }
}
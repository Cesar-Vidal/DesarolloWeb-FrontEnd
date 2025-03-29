document.addEventListener('keydown', function (event) {
    const key = event.key.toUpperCase(); 
    const audio = document.querySelector(`#audio-${key}`);
    
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
});
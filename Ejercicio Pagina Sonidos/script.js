document.addEventListener('keydown', function (event) {
    const key = event.key.toUpperCase(); 
    const audio = document.querySelector(`#audio-${key}`);
    const keyDiv = document.querySelector(`.tecla[data-key="${event.key.toUpperCase().charCodeAt(0)}"]`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
    if (keyDiv) {
        keyDiv.classList.add('active');
        setTimeout(() => {
            keyDiv.classList.remove('active');
        }, 100);
    }
});
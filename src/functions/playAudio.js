export const playAudio = src => {
    const audio = document.querySelector("#audio")
    audio.src = src
    audio.currentTime = 0;
    audio.play();
}
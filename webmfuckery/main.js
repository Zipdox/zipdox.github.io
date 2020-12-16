const mainVideo = document.getElementById('mainVideo');
const backgroundVideo = document.getElementById('backgroundVideo');
mainVideo.volume = 0.5;
mainVideo.onclick = function(){
    if(this.paused) this.play()
    else this.pause();
}
mainVideo.onplay = function(){
    backgroundVideo.play();
    mainVideo.removeAttribute('title');
}
mainVideo.onpause = function(){
    backgroundVideo.pause();
    mainVideo.setAttribute('title', 'Click me!');
}
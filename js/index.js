import MediaPlayer from './MediaPlayer.js'

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new MediaPlayer({el: video}); // se envia en el objeto de configuracion el el
button.onclick = () => player.togglePlay();
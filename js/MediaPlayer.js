function MediaPlayer(config) { // el paramtro es un objeto de configuracion
    this.media = config.el;
}

MediaPlayer.prototype.funcionPlay = function(){ // se agrega como metodo con portotype
    // https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement
    //debugger
    this.media.play();
}

MediaPlayer.prototype.funcionPause = function(){ // se agrega como metodo con portotype
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function(){ // se agrega como metodo con portotype
    if(this.media.paused){
        this.funcionPlay();
    } else this.funcionPause();
}

export default MediaPlayer;
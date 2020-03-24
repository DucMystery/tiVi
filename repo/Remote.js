let Remote = function (id) {
    this.id = id;

    this.controlVolume = function (newVolume,tivi) {
        if (tivi.status)
           tivi.volume = newVolume;
        console.log(tivi.volume);

    }

    this.changeToChannel = function (newChannel,tivi) {
        if (tivi.status){
            tivi.currentChannel = newChannel;
            newChannel = tivi.currentChannel;
        }
    }

    this.turnTV = function (tivi) {
        if (tivi.status)
           tivi.status=!tivi.status;
    }
}
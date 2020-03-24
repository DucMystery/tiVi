let Tivi = function (currentChannel,volume,status) {
    this.currentChannel = currentChannel;
    this.volume = volume;
    this.status = status;

    this.swapChannel = function (newChannel) {
        if (this.status){
          this.currentChannel = newChannel;
          return this.currentChannel;
        }
    }

}
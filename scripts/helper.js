class Helper {
  playPauseAndUpdate (song) {
    player.playPause(song);
    const DURATION = player.currentlyPlaying.duration;
    $('#time-control .total-time').text(player.prettyTime(DURATION));
  }
};

const helper = new Helper;

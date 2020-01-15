
{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  $('button#next').on('click', function(){
    if (player.playState !== 'playing') { return; }
    const CURRENT_SONG_INDEX = album.songs.indexOf(player.currentlyPlaying);
    const NEXT_SONG_INDEX = CURRENT_SONG_INDEX + 1;
    if (NEXT_SONG_INDEX >= album.songs.length) { return; }
    const NEXT_SONG = album.songs[NEXT_SONG_INDEX];
    player.playPause(NEXT_SONG);

  });

  $('button#previous').on('click', function (){
    if (player.playState !== 'playing') { return; }
    const CURRENT_SONG_INDEX = album.songs.indexOf(player.currentlyPlaying);
    const PREV_SONG_INDEX = CURRENT_SONG_INDEX - 1;
    if (PREV_SONG_INDEX < 0) { return; }

    const PREV_SONG = album.songs[PREV_SONG_INDEX];
    player.playPause(PREV_SONG);
  });
}

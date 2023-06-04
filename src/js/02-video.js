import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_KEY = 'videoplayer-current-time';

function savesPointOfPlay({ seconds }) {
  localStorage.setItem(LOCAL_KEY, seconds);
}
player.on('timeupdate', throttle(savesPointOfPlay, 1000));

player.setCurrentTime(localStorage.getItem(LOCAL_KEY) || 0);

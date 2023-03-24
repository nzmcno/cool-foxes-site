import boostMusic from "../assets/boostMusic.mp3";
import boostMusic2 from "../assets/boostMusic2.mp3";

const playlist = [boostMusic, boostMusic2];

// Choose a random music file from the playlist
const randomMusic = playlist[Math.floor(Math.random() * playlist.length)];

export default randomMusic;

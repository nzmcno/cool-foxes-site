// Import all the mp3 files in the playlist folder using require.context
const context = require.context("../assets/playlist/", false, /\.mp3$/);
const playlist = context.keys().map(context);

// Choose a random music file from the playlist
const randomMusic = playlist[Math.floor(Math.random() * playlist.length)];

export default randomMusic;

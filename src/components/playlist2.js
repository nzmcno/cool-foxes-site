// Import all the mp3 files in the playlist folder using require.context
const context = require.context("../assets/playlist/", false, /\.mp3$/);
const playlist2 = context.keys().map(context);

// Shuffle the playlist2 randomly
for (let i = playlist2.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [playlist2[i], playlist2[j]] = [playlist2[j], playlist2[i]];
}

export default playlist2;

// next.config.js
const path = require('path')
const withImages = require('next-images')
module.exports = withImages({
  exclude: path.resolve(__dirname, 'shared/assets/svg'),
  webpack(config, options) {
    return config
  }
})

module.exports = {
  env: {
    SPOTIFY_CLIENT_ID: '20dd1375ac60446d9892f3219ed52c78',
    SPOTIFY_CLIENT_SECRET: 'dc235dcfba524c00b9bde002bdf7fdf6',
    SPOTIFY_AUTHENTICATE_URL: 'https://accounts.spotify.com/authorize'
  }
}

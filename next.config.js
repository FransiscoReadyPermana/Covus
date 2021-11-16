module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI: process.env.MONGO_URI,
  },

  images: {
    domains: ['media.discordapp.net', 'cdn.discordapp.com'],
  },
};

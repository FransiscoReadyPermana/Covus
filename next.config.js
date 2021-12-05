module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.SECRET_KEY,
    BASE_URL: process.env.BASE_URL,
    ADMIN: process.env.ADMIN,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },

  images: {
    domains: ['media.discordapp.net', 'cdn.discordapp.com'],
  },
};

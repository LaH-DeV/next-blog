const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    distDir: path.join(__dirname, 'styles')
  }
}

module.exports = nextConfig

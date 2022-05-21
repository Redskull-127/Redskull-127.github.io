/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: ""
  },
  basePath: "/redskull-127.github.io",
  assetPrefix: "/redskull-127.github.io"
}

module.exports = nextConfig

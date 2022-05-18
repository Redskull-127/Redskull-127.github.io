/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: ""
  },
  basePath: "/new",
  assetPrefix: "/new"
}

module.exports = nextConfig

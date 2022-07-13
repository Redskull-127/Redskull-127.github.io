/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    REACT_APP_FIREBASEAPI: process.env.REACT_APP_FIREBASEAPI,
    REACT_APP_FIREBASEAUTH: process.env.REACT_APP_FIREBASEAUTH,
    REACT_APP_NEPSTER: process.env.REACT_APP_NEPSTER,
  },
  images: {
    loader: "akamai",
    path: ""
  },
  basePath: "",
  assetPrefix: "",
}

module.exports = nextConfig

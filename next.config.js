/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.join(__dirname, "src/"),
      data: path.join(__dirname, "data/")
    };
    return config;
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        port: "",
        pathname: "/assets/**"
      }
    ]
  }
};

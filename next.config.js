/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.join(__dirname, "src/"),
      "content-parts": path.join(__dirname, "src/components/parts/contents/")
    };
    return config;
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")]
  }
};

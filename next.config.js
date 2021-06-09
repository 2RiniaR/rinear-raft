/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");

module.exports = {
  future: {
    webpack5: true
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.join(__dirname, "src/")
    };
    return config;
  }
};

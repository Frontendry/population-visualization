const paths = require("./paths");
module.exports = {
  modules: [paths.src, paths.nodeModules],
  alias: {
    jquery: `${paths.nodeModules}/jquery`,
    jQuery: `${paths.nodeModules}/jquery`,
    "popper.js": `${paths.nodeModules}/@popperjs/core`,
  },
};

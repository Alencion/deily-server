const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "src/"),
    "@apis": path.resolve(__dirname, "src/apis"),
    "@assets": path.resolve(__dirname, "src/assets"),
    "@components": path.resolve(__dirname, "src/components"),
    "@constants": path.resolve(__dirname, "src/constants"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@hook": path.resolve(__dirname, "src/hook")
  })
);

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  const htmlPlugin = config.plugins.find(
    (plugin) => plugin.constructor.name === "HtmlWebpackPlugin"
  );

  if (htmlPlugin)
    htmlPlugin.userOptions.template = __dirname + "/extensions/index.html";

  return config;
};

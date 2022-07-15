const HTMLWEBPACKPLUGIN = require("html-webpack-plugin"),
    CopyPlugin = require("copy-webpack-plugin"),
    path = require("path");

const cssRule = {
    test: /\.s[ac]ss$/i,
    use: [
        "style-loader",
        "css-loader",
        "sass-loader",
    ],
}

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [cssRule],
    },
    plugins: [
        new HTMLWEBPACKPLUGIN({
            template: "./src/index.html",
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/images", to: "images" },
            ],
        }),
    ],
}
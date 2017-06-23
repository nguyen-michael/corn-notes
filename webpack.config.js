var webpack = require("webpack");

module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "./public/bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: /app/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                }
            }
        ]
    },
    devtool: "eval-source-map"
};
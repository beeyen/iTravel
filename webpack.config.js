module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        path: "./app/temp/scripts",
        filename: "App.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                } 
            }
        ]
    }
}

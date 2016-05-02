module.exports = {
    entry: './frontend/js/src.jsx',
    output: {
        path: "public/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                  presets: ['react', 'es2015']
                }
            }
        ]
    }
};

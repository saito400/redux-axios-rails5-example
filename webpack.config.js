module.exports = {
    entry: './frontend/js/index.jsx',
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
                  plugins: ['transform-decorators-legacy' ],
                  presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    }
};

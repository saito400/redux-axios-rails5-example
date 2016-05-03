module.exports = {
    entry: './frontend/js/index.js',
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
            },
            { test: /\.css$/,                        loader: 'style-loader!css-loader'},
            { test: /\.(woff|woff2)$/,               loader: "url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    }
};

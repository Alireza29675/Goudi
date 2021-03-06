module.exports = {
    entry: './index.js',
    output: {
        filename: '../server/public/app.bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            { test: /\.(woff|png|jpg|gif)$/, loader: 'url-loader?limit=1000000' },
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}
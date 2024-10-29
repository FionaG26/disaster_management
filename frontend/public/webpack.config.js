const path = require('path');

module.exports = {
    entry: './src/index.js', // Change this if your entry point is different
    output: {
        path: path.resolve(__dirname, 'public'), // This should match where your index.html is
        filename: 'bundle.js', // Output file name
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // To handle CSS files
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 3000,
    },
};

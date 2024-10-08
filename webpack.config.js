const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./index.html",
  });

module.exports = 
    {
        entry: "./src/index.tsx",
        mode: "development",
        target: "web",
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "client_bundle.js"
        },
        resolve: {
            extensions: [".js", ".ts", ".tsx", ".jsx"]
        },
        module: {
            rules: [
                {
                    test:/\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },
                {
                    test:/\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react']
                        }
                    },
                },
                {
                    test: /\.(png|jpeg)$/i,
                    exclude: /node_modules/,
                    type: "asset/resource",
                },
                {
                    test: /\.(scss|css)$/,
                    exclude: /node_modules/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        plugins: [htmlPlugin],
        devServer: {
            hot: true
        },
    }

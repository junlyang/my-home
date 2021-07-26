
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const debug = true //process.env.NODE_ENV !== 'production'
const name = 'my-home'

module.exports = withBundleAnalyzer({
        assetPrefix: !debug ? `${name}/` : '',
        env: {
            google_id : "",
            facebook_id :"",
            kakao_id : "",
            naver_id : "",
            API_URL: process.env.NODE_ENV === "production" ? 'http://localhost:8000' : 'http://localhost:8000',
            IMAGE_URL : process.env.NODE_ENV === "production" ? 'http://localhost:8000' : 'http://localhost:8000',
            BASE_URL : process.env.NODE_ENV === "production" ? `/${name}` : '',
        },
        analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
        bundleAnalyzerConfig: {
            server: {
                analyzerMode: 'static',
                reportFilename: '../bundles/server.html'
                },
                browser: {
                    analyzerMode: 'static',
                    reportFilename: '../bundles/client.html'
                }
            },
            webpack(config) {
                const prod = process.env.NODE_ENV === "production";
                config.module.rules.push({
                    test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                            name: '[name].[ext]'
                        }
                    }
                })
                /*config.module.loader.push({
                    test: /\.scss$/,
                    loaders: ["style-loader", "css-loader", "sass-loader"]
                })*/
                /*config.module.loader = {
                    data: '@import "variables";',
                    includePaths: [
                        path.resolve(__dirname, "./styles/lib")
                    ]
                }*/

                return {
                    ...config,
                    mode: prod ? "production" : "development",
                    devtool: prod ? "hidden-source-map" : "eval",
                }
            }
        })

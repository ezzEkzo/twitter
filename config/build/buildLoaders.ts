import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders({isDev}: BuildOptions):webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                "plugins": [
                    [
                        "i18next-extract",
                        {
                            locates: ["ru", "en"],
                            keyAsDefaultValue: true
                        }
                    ],
                ]
            }
        }
    }

    const typescriptLoader =
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    const cssLoader =  {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (respPath: string) => Boolean(respPath.includes('.module.')),
                        localIdentName: isDev ? "[path].[name]__[local]" : "[hash:base64:8]"
                    }

                }
            },
            "sass-loader",
        ],
    }

    const fileLoader = {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        }


    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ]
}

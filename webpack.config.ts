import path from "path";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import webpack from "webpack";

const mode = "development"
const isDev = mode === "development"

const paths = {
        entry: path.resolve(__dirname, "src", "index.ts"),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, "public", "index.html")
    }

const config: webpack.Configuration = buildWebpackConfig({
    mode: "development",
    paths,
    isDev
});

export default config;

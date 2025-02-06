import path from "path"; // تغییر require به import
import CopyWebpackPlugin from "copy-webpack-plugin"; // تغییر require به import
import { fileURLToPath } from "url"; // برای استفاده از __dirname در ES Modules

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  // تغییر module.exports به export default
  entry: "./cli.ts",
  mode: "production",
  target: "node",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "cli.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "template", to: "template" }],
    }),
  ],
};

export default config; // تغییر module.exports به export default

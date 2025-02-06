import webpack from 'webpack'; // ایمپورت Webpack
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  entry: './src/evo.ts',
  mode: 'production',
  target: 'node',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'evo.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/template', to: 'template' },
        ],
      }),
      new webpack.BannerPlugin({ // اضافه کردن BannerPlugin
        banner: '#!/usr/bin/env node',
        raw: true,
        entryOnly: true,
      }),
    ],
};

export default config;
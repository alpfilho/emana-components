import { resolve } from 'path';
import webpack from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import pkg from './package.json';

const devMode = process.env.NODE_ENV === 'development';
const externals = Object.keys(pkg.peerDependencies);

const config: webpack.Configuration = {
	mode: devMode ? 'development' : 'production',
	devtool: devMode ? 'inline-source-map' : 'source-map',
	entry: resolve(__dirname, 'src/index.ts'),
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'commonjs'
	},
	resolve: {
		plugins: [new TsconfigPathsPlugin()],
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	externals,
	module: {
		rules: [
			/* Javascript */
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				enforce: 'pre',
				loader: 'source-map-loader'
			},
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					cacheDirectory: true
				}
			}
		]
	}
};

export default config;

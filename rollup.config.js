import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';
import babel from 'rollup-plugin-babel';
import del from 'rollup-plugin-delete';

import pkg from './package.json';

const extensions = ['.mjs', '.js', '.json', '.node', '.jsx', '.ts', '.tsx'];

export default [
	{
		input: 'src/index.ts',
		external: Object.keys(pkg.peerDependencies || {}),
		cache: true,
		plugins: [
			del({ targets: 'dist/*' }),
			resolve({ extensions }),
			commonjs(),
			typescript({
				typescript: ttypescript
			}),
			babel({ extensions, include: ['src/**/*'] })
		],
		output: [
			{ file: pkg.main, format: 'cjs', name: pkg.name, sourcemap: true },
			{ file: pkg.module, format: 'esm', name: pkg.name, sourcemap: true }
		],
		watch: {
			clearScreen: false
		}
	}
];

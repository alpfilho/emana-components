import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import ts from '@wessberg/rollup-plugin-ts';
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
			ts({
				transpiler: 'babel',
				exclude: ['node_modules/**/*.*']
			})
		],
		output: { file: pkg.module, format: 'esm', name: pkg.name, sourcemap: true },
		watch: {
			clearScreen: false
		}
	}
];

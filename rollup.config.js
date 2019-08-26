import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

const extensions = ['.mjs', '.js', '.json', '.node', '.jsx', '.ts', '.tsx'];

export default [
	{
		input: 'src/index.ts',
		external: Object.keys(pkg.peerDependencies || {}),
		plugins: [
			resolve({ extensions }),
			commonjs(),
			babel({ extensions, include: ['src/**/*'] })
		],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'esm' }
		]
	}
];

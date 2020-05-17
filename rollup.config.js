import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import multiInput from 'rollup-plugin-multi-input';
import { terser } from 'rollup-plugin-terser';

export default {
	input: ['src/**/*.js'],
	output: [
		{
			dir: 'bundle-es',
			format: 'es',
			name: 'bundle',
			plugins: [terser()],
		},
		{
			dir: 'bundle-cjs',
			format: 'cjs',
			exports: 'named',
			name: 'bundle',
			plugins: [
				terser({
					exclude: ['src/index.js'],
				}),
			],
		},
	],
	plugins: [
		multiInput(),
		resolve({
			jsnext: true,
			main: true,
			browser: true,
		}),
		commonjs(),
	],
};

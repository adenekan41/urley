import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import multiInput from 'rollup-plugin-multi-input';
import { terser } from 'rollup-plugin-terser';

export default {
	input: ['src/**/*.ts'],
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
		typescript(),
		resolve({
			mainFields: ['jsnext:main', 'module', 'main'],
		}),
		commonjs(),
	],
};

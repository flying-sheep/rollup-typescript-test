import typescript  from 'rollup-plugin-typescript2'
import commonjs    from 'rollup-plugin-commonjs'
import resolve     from 'rollup-plugin-node-resolve'

export default {
	entry: 'src/index.tsx',
	dest: 'dist/bundle.js',
	format: 'iife',
	plugins: [
		typescript(),
		commonjs(),
		resolve(),
	]
}

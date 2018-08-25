import babel from 'rollup-plugin-babel'
// import { terser } from "rollup-plugin-terser";
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'


export default {
  input: 'src/main.js',
  output: {
    format: 'umd',
    file: 'dist/h2pm.js',
    name: 'h2pm',
  },
  plugins: [
    babel(),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    // terser()
  ],
  external: ['lodash', 'jsdom', 'jquery']
};
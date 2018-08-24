// rollup.config.js
import babel from 'rollup-plugin-babel'
// import { uglify } from 'rollup-plugin-uglify'
import { terser } from "rollup-plugin-terser";
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'


export default {
  input: 'src/main.js',
  output: {
    file: 'dist/html2pdfmake.js',
    format: 'umd',
    name: 'html2pdfmake'
  },
  plugins: [
    babel(),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    terser()
  ],
  external: ['lodash', 'jsdom', 'jquery']
};
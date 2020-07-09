const path = require('path')
const entry = path.resolve(__dirname, './src')

//rollup解析nodejs的插件
const resolve = require('rollup-plugin-node-resolve')
//rollup解析commonjs规范的插件
const commonjs = require('rollup-plugin-commonjs')
//rollup转es6为es5的插件
const babel = require('rollup-plugin-babel')
//rollup打包json文件的插件
const json = require('rollup-plugin-json')
//rollup解析vue-cli的插件
const vue = require('rollup-plugin-vue')
//rollup解析css，scss等的插件
const postcss = require('rollup-plugin-postcss')

const outputUmdPath = path.resolve(__dirname, './dist/jingsi.data-visual.js')
const outputEsPath = path.resolve(__dirname, './dist/jingsi.data-visual.es.js')

module.exports = {
    input: entry,
    output: [
        {
            file: outputUmdPath,
            format: 'umd',
            name: 'DataVisual',
            globals: {
                vue: 'Vue'
            }
        },
        {
            file: outputEsPath,
            format: 'es',
            globals: {
                vue: 'Vue'
            }
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            //node_modules文件夹下的代码不进行es6转es5
            exclude: 'node_modules/**'
        }),
        json(),
        vue(),
        postcss({
            plugins: []
        })
    ],
    // 不把vue模块的代码打包到我们的框架中('vue'是模块名)
    external: ['vue']
}
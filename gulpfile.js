const gulp = require("gulp");

const serve = require('./gulp/tasks/serve')
const pug2html = require('./gulp/tasks/pug2html')
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/script')
const fonts = require('./gulp/tasks/fonts')
const imageMinify = require('./gulp/tasks/imageMinify')
const createWebp = require('./gulp/tasks/createWebp')
const svgSprite = require('./gulp/tasks/svgSprite')
const clean = require('./gulp/tasks/clean')
const staticCopy = require('./gulp/tasks/staticCopy')

function setMode(isProduction = false) {
    return cb => {
        process.env.NODE_ENV = isProduction ? 'production' : 'development'
            cb()
    }
}

const dev = gulp.parallel(pug2html, styles, script, fonts, staticCopy)

const build = gulp.series(clean, imageMinify, createWebp, svgSprite, dev)

module.exports.default = gulp.series(setMode(), build, serve)
module.exports.build = gulp.series(setMode(true), build)

module.exports.createWebp = gulp.series(setMode(true), createWebp)

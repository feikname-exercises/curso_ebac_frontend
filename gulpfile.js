/* Dependências */
// npm install --save-dev gulp sass gulp-sass gulp-sourcemaps gulp-uglify gulp-obfuscate gulp-imagemin

// OBS: Tive que usar ES modules em vez de commonJS porque o gulp-imagemin>=8
// converteu para ES modules e eu preferi não usar uma versão antiga

import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'
import obfuscate from 'gulp-obfuscate'
import imagemin from 'gulp-imagemin'

// OBS: Também é possível usar o node-sass em vez do dart, mas o dart é o unico
// que continua recebendo atualizações
const sass = gulpSass(dartSass)

/* Caminhos de entrada */
const BLOB_SOURCE_IMG = './src/img/*'
const BLOB_SOURCE_JS = './src/js/*.js'
const BLOB_SOURCE_STYLES = './src/styles/main.scss'

/* Caminhos de saída */
const BLOB_OUTPUT_IMG = './build/img'
const BLOB_OUTPUT_JS = './build/js'
const BLOB_OUTPUT_STYLES = './build/styles'
const BLOB_OUTPUT_STYLES_MAPS = './maps' // Será dentro de BLOB_OUTPUT_STYLES

/* Configurações SASS */
const MINIFICA_CSS = true
const GERAR_SOURCEMAP = true

/* Configurações JS */
const OBFUSCA_JS = false // desativado por padrão porque atrapalha checar nas devtools

/* Funções de compressão de imagens, minificação de JS e transpilação de SASS */
function comprimeImagens() {
    return gulp.src(BLOB_SOURCE_IMG)
        .pipe(imagemin())
        .pipe(gulp.dest(BLOB_OUTPUT_IMG))
}

function minificaJS() {
    let retval = gulp.src(BLOB_SOURCE_JS)
        .pipe(uglify())

    if (OBFUSCA_JS) {
        retval = retval.pipe(obfuscate())
    }

    return retval.pipe(gulp.dest(BLOB_OUTPUT_JS))
}

function transpilaSASS() {
    let retval = gulp.src(BLOB_SOURCE_STYLES)

    if (GERAR_SOURCEMAP) {
        retval = retval.pipe(sourcemaps.init())
    }


    let _outputStyle = MINIFICA_CSS ? "compressed" : "expanded"
    retval = retval.pipe(sass({
        outputStyle: _outputStyle
    }))

    if (GERAR_SOURCEMAP) {
        retval = retval.pipe(sourcemaps.write(BLOB_OUTPUT_STYLES_MAPS))
    }

    return retval.pipe(gulp.dest(BLOB_OUTPUT_STYLES))
}

/* Tornar as tasks públicas */
// Referência: <https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export>
export {
    comprimeImagens as img,
    transpilaSASS as css,
    minificaJS as js,
}

export default function () {
    gulp.watch(BLOB_SOURCE_STYLES, { ignoreInitial: false }, gulp.series(transpilaSASS))
    gulp.watch(BLOB_SOURCE_JS, { ignoreInitial: false }, gulp.series(minificaJS))
    gulp.watch(BLOB_SOURCE_IMG, { ignoreInitial: false }, gulp.series(comprimeImagens))
}

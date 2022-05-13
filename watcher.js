// Source file (.scss) and destination file (.css with prefixes)
const SRC = './src/style.scss', DEST = './src/style.css'

const chokidar = require('chokidar')
const sass = require('sass')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const fs = require('node:fs/promises')

function throwIf(bool) {
  if (bool) {
    throw new Error()
  }
}

const postcssInstance = postcss([autoprefixer({
  overrideBrowserslist: ['chrome >= 1, firefox >= 1, safari >= 1, opera >= 1, ie >= 1'], remove: false,
})])

chokidar.watch(SRC).on('all', async (eventName, path, stats) => {
  console.log(`[${Date()}] File ${path} was ${eventName.replace(/e$/, '')}ed. Compiling...`)

  const content = await fs.readFile(path, {encoding: 'utf8'})

  const pureCss = sass.compileString(content, {
    sourceMap: false,
    style: 'compressed'
  }).css

  const prefixedCss = (await postcssInstance.process(pureCss, {
    map: false, from: undefined,
  })).css

  await fs.writeFile(DEST, prefixedCss, {encoding: 'utf8'})
  console.log('Finished.\n')
})

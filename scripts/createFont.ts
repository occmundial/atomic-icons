import fs from 'fs'
import { promisify } from 'util'
import glob from 'glob'
import xml2js from 'xml2js'
import SVGIcons2SVGFontStream from 'svgicons2svgfont'
import SVGIconsDirStream from 'svgicons2svgfont/src/iconsdir.js'
import svg2ttf from 'svg2ttf'

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

if (!fs.existsSync('./dist/font')) {
  fs.mkdirSync('./dist/font')
}

function makeSvgFont(fontName, svgs, svgFontPath) {
  const files = glob.sync(svgs)
  const options = {
    fontHeight: 1000,
    normalize: true
  }

  return new Promise((resolve, reject) => {
    new SVGIconsDirStream(files, {})
      .pipe(
        new SVGIcons2SVGFontStream({
          ...options,
          fontName
        })
      )
      .pipe(fs.createWriteStream(svgFontPath))
      .on('finish', resolve)
      .on('error', reject)
  })
}

async function convertSvg2Ttf(svgFontPath, output) {
  console.log('Generating TTF file')
  var ttf = svg2ttf(await readFileAsync(svgFontPath, 'utf8'), {})
  await writeFileAsync(output, Buffer.from(ttf.buffer))
}

async function generateGlyphMap(svgFontPath, output) {
  console.log('Generating glyph map')
  const parser = new xml2js.Parser()
  const glyphMap = {}
  const data = await readFileAsync(svgFontPath)

  return new Promise((resolve, reject) => {
    parser.parseString(data, function (err, result) {
      if (err !== null) {
        reject(err)
      }
      if (!result) {
        console.error(`Cannot parse ${svgFontPath}`)
      }

      const icons = result.svg.defs[0].font[0].glyph

      icons.forEach(({ $: icon }) => {
        const name = icon['glyph-name']
        const code = icon.unicode.charCodeAt(0)
        glyphMap[name] = code
      })

      fs.writeFileSync(output, JSON.stringify(glyphMap, null, 2))

      resolve(glyphMap)
    })
  })
}

async function main() {
  const fontName = 'atomic-icons'

  const svgFontPath = `./dist/${fontName}.glyph.svg`
  const glyphMapPath = `./dist/font/${fontName}-map.json`
  const tffPath = `./dist/font/${fontName}.ttf`

  await makeSvgFont(fontName, './icons/*.svg', svgFontPath)

  await Promise.all([
    generateGlyphMap(svgFontPath, glyphMapPath),
    convertSvg2Ttf(svgFontPath, tffPath)
  ])
  console.log(`Updated: ${tffPath} and ${glyphMapPath}`)
}

main()

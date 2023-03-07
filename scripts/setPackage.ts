import fs from 'fs'

function main() {
  const source = fs
    .readFileSync(__dirname + '/../package.json')
    .toString('utf-8')
  const sourceObj = JSON.parse(source)
  delete sourceObj.scripts
  delete sourceObj.dependencies
  delete sourceObj.devDependencies
  delete sourceObj['lint-staged']
  sourceObj.private = false
  fs.writeFileSync(
    __dirname + '/../dist/package.json',
    Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8')
  )
  fs.copyFileSync(__dirname + '/../README.md', __dirname + '/../dist/README.md')
  fs.copyFileSync(
    __dirname + '/../CONTRIBUTING.md',
    __dirname + '/../dist/CONTRIBUTING.md'
  )
}

main()

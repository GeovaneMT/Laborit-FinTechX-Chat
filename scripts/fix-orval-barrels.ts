import fs from 'fs'
import path from 'path'

const workspace = 'src/http/generated'
const modelsDir = path.join(workspace, 'models')
const opsDir = path.join(workspace, 'models/operations')

function createBarrel(dir: string) {
  if (!fs.existsSync(dir)) return
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.generated.ts') && !f.includes('index'))
    .map((f) => f.replace('.generated.ts', ''))

  if (files.length === 0) return

  const content =
    files.map((name) => `export * from './${name}.generated';`).join('\n') +
    '\n'

  fs.writeFileSync(path.join(dir, 'index.ts'), content)
  console.log(
    `Created barrel: ${path.relative(process.cwd(), path.join(dir, 'index.ts'))}`,
  )
}

createBarrel(modelsDir)
createBarrel(opsDir)

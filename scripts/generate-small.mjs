import sharp from 'sharp'
import { readdirSync, existsSync } from 'fs'
import { join, basename } from 'path'

const dir = 'public/produtos'
const files = readdirSync(dir).filter(f => f.endsWith('.webp') && !f.includes('-small'))

for (const file of files) {
  const smallName = basename(file, '.webp') + '-small.webp'
  const output = join(dir, smallName)
  if (existsSync(output)) continue
  await sharp(join(dir, file)).resize(400).webp({ quality: 80 }).toFile(output)
  console.log(`Criado: ${smallName}`)
}

console.log('Concluído.')

import sharp from 'sharp'
import { readdirSync, unlinkSync } from 'fs'
import { join, extname, basename } from 'path'

const dir = 'public/produtos'
const files = readdirSync(dir).filter(f => extname(f).toLowerCase() === '.png')

for (const file of files) {
  const input = join(dir, file)
  const output = join(dir, basename(file, '.png') + '.webp')
  await sharp(input).webp({ quality: 85 }).toFile(output)
  const sizeBefore = (await import('fs')).statSync(input).size
  const sizeAfter = (await import('fs')).statSync(output).size
  console.log(`${file} → ${basename(output)} (${(sizeBefore/1024).toFixed(0)}KB → ${(sizeAfter/1024).toFixed(0)}KB)`)
  unlinkSync(input)
}

console.log('\nConversão concluída.')

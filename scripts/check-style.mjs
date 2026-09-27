// Enforces the mechanical rules in STYLEGUIDE.md. Runs before every build.
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const errors = []
const report = (file, line, msg) => errors.push(`${file}:${line}  ${msg}`)

const COLOR = /#[0-9a-f]{3,8}\b|\b(?:rgba?|hsla?)\(/i

// --- styles.css: everything after the token block must use tokens.
const cssPath = 'src/styles.css'
const css = readFileSync(cssPath, 'utf8').split('\n')
const tokensEnd = css.findIndex((l) => l.includes('/* ---------- Base'))
if (tokensEnd === -1) report(cssPath, 1, 'missing "/* ---------- Base" marker that ends the token block')

css.forEach((raw, i) => {
  if (i < tokensEnd) return
  const line = raw.replace(/\/\*.*?\*\//g, '')
  const n = i + 1
  if (COLOR.test(line)) report(cssPath, n, 'color literal outside tokens; use a --token or color-mix()')

  const font = line.match(/font-family:\s*([^;]+)/)
  if (font && !/^(var\(--font-[\w-]+\)|inherit)$/.test(font[1].trim()))
    report(cssPath, n, 'font-family must be var(--font-*) or inherit')

  const radius = line.match(/border-radius:\s*([^;]+)/)
  if (radius) {
    const bad = radius[1].trim().split(/\s+/).filter((v) => !/^(0|50%|var\(--radius[\w-]*\))$/.test(v))
    if (bad.length) report(cssPath, n, `border-radius "${bad.join(' ')}" must use var(--radius*), 0, or 50%`)
  }
})

// --- Components: no inline styles or color literals.
const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
    d.isDirectory() ? walk(join(dir, d.name)) : d.name.endsWith('.tsx') ? [join(dir, d.name)] : [],
  )

for (const file of walk('src')) {
  readFileSync(file, 'utf8')
    .split('\n')
    .forEach((line, i) => {
      if (/\bstyle=\{\{/.test(line)) report(file, i + 1, 'inline style; add a class in src/styles.css')
      if (COLOR.test(line)) report(file, i + 1, 'color literal in component; use a CSS token')
    })
}

if (errors.length) {
  console.error(`Style guide violations (see STYLEGUIDE.md):\n${errors.join('\n')}`)
  process.exit(1)
}
console.log('check:style passed')

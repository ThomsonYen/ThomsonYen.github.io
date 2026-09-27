// Builds the website CV (cv/cv-website) and copies it to public/files/YenCV.pdf.
import { execFileSync } from 'node:child_process'
import { copyFileSync } from 'node:fs'

const dir = 'cv/cv-website'
execFileSync('latexmk', ['-pdf', 'cv.tex'], { cwd: dir, stdio: 'inherit' })
copyFileSync(`${dir}/cv.pdf`, 'public/files/YenCV.pdf')
console.log('Wrote public/files/YenCV.pdf')

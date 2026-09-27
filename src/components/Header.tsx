import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

type Theme = 'light' | 'dark'

function currentTheme(): Theme {
  const set = document.documentElement.dataset.theme
  if (set === 'light' || set === 'dark') return set
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const sections = [
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
]

export function Header() {
  const [theme, setTheme] = useState<Theme>(currentTheme)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage unavailable (e.g. private mode); the toggle still works for this visit.
    }
    setTheme(next)
  }

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__brand">
          Thomson Yen
        </a>
        <nav className="header__nav" aria-label="Sections">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.label}
            </a>
          ))}
          <button
            type="button"
            className="icon-button"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </div>
    </header>
  )
}

import { FiArrowUpRight } from 'react-icons/fi'
import { profile, quantum } from '../content'
import { Section } from './Section'

export function QuantumPage() {
  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <a className="header__brand" href="../">
            {profile.name}
          </a>
        </div>
      </header>
      <main className="container">
        <Section id="quantum" title="Quantum computing">
          <p className="muted">{quantum.intro}</p>
          <ul className="favs">
            {quantum.favorites.map((f) => (
              <li key={f.url}>
                <a className="fav" href={f.url} target="_blank" rel="noreferrer">
                  <span className="fav__meta">
                    {f.venue} · {f.year}
                  </span>
                  <span className="fav__title">
                    {f.title} <FiArrowUpRight aria-hidden />
                  </span>
                  <span className="fav__note">{f.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>
      <footer className="container footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}

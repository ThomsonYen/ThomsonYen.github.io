import { useEffect, useState, type FormEvent } from 'react'
import { profile, secret } from '../content'
import { getViews } from '../views'
import { Section } from './Section'

const UNLOCK_KEY = 'secret-unlocked'

function readUnlocked() {
  try {
    return sessionStorage.getItem(UNLOCK_KEY) === '1'
  } catch {
    return false
  }
}

export function SecretPage() {
  const [unlocked, setUnlocked] = useState(readUnlocked)
  const [attempt, setAttempt] = useState('')
  const [wrong, setWrong] = useState(false)
  const [counts, setCounts] = useState<number[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!unlocked) return
    Promise.all(secret.pages.map((p) => getViews(p.key)))
      .then(setCounts)
      .catch(() => setError(true))
  }, [unlocked])

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (attempt !== secret.password) return setWrong(true)
    try {
      sessionStorage.setItem(UNLOCK_KEY, '1')
    } catch {}
    setUnlocked(true)
  }

  const total = counts?.reduce((a, b) => a + b, 0)

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
        <Section id="secret" title="Views">
          {!unlocked ? (
            <form className="secret__form" onSubmit={submit}>
              <input
                className="secret__input"
                type="password"
                aria-label="Password"
                placeholder="Password"
                autoFocus
                value={attempt}
                onChange={(e) => {
                  setAttempt(e.target.value)
                  setWrong(false)
                }}
              />
              <button className="button" type="submit">
                Unlock
              </button>
              {wrong && <p className="muted secret__wrong">Wrong password.</p>}
            </form>
          ) : error ? (
            <p className="muted">Couldn't load the counts. Try again later.</p>
          ) : (
            <ul className="stats">
              {[...secret.pages.map((p, i) => ({ label: p.label, value: counts?.[i] })), { label: 'Total', value: total }].map(
                (s) => (
                  <li key={s.label} className="stat">
                    <span className="stat__label">{s.label}</span>
                    <span className="stat__value">{s.value?.toLocaleString() ?? '…'}</span>
                  </li>
                ),
              )}
            </ul>
          )}
        </Section>
      </main>
    </>
  )
}

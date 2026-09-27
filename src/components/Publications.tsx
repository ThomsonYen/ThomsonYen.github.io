import { useLayoutEffect, useRef, useState } from 'react'
import {
  FiCheck,
  FiChevronDown,
  FiChevronRight,
  FiChevronUp,
  FiCopy,
  FiFileText,
  FiGlobe,
  FiMessageSquare,
} from 'react-icons/fi'
import { LuQuote } from 'react-icons/lu'
import { SiArxiv } from 'react-icons/si'
import { profile, publications, selfName, type Publication } from '../content'
import { Section } from './Section'

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard unavailable (e.g. insecure context); the text is still selectable.
    }
  }
  return (
    <button type="button" className="pub__copy" onClick={copy}>
      {copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

// The TL;DR sits behind a toggle so the list stays scannable.
function PublicationCard({ p }: { p: Publication }) {
  const [showCite, setShowCite] = useState(false)
  const [showSummary, setShowSummary] = useState(false)

  return (
    <li className="pub">
      <div className="pub__venue">
        <span className={p.venue === 'Preprint' ? 'badge badge--muted' : 'badge'}>{p.venue}</span>
        <span className="pub__year">{p.year}</span>
      </div>
      <div>
        <h4 className="pub__title">{p.title}</h4>
        <p className="pub__authors">
          {p.authors.map((a, i) => (
            <span key={a}>
              {i > 0 && ', '}
              {a === selfName ? <strong>{a}</strong> : a}
            </span>
          ))}
        </p>
        {/* The toggle sits above the text it reveals, so it never moves when clicked. */}
        <div className="pub__tldr">
          <button
            type="button"
            className="pub__tldr-toggle"
            aria-expanded={showSummary}
            onClick={() => setShowSummary((v) => !v)}
          >
            {showSummary ? <FiChevronDown aria-hidden /> : <FiChevronRight aria-hidden />} TL;DR
          </button>
          {showSummary && <p className="pub__tldr-text">{p.summary}</p>}
        </div>

        <div className="pub__links">
          {p.website && (
            <a className="pub__link" href={p.website} target="_blank" rel="noreferrer">
              <FiGlobe aria-hidden /> Website
            </a>
          )}
          {p.paper && (
            <a className="pub__link" href={p.paper} target="_blank" rel="noreferrer">
              <FiFileText aria-hidden /> Paper
            </a>
          )}
          {p.arxiv && (
            <a className="pub__link" href={p.arxiv} target="_blank" rel="noreferrer">
              <SiArxiv aria-hidden /> arXiv
            </a>
          )}
          <button
            type="button"
            className="pub__link"
            aria-expanded={showCite}
            onClick={() => setShowCite((v) => !v)}
          >
            <LuQuote aria-hidden /> Cite
          </button>
          {p.openreview && (
            <a className="pub__link" href={p.openreview} target="_blank" rel="noreferrer">
              <FiMessageSquare aria-hidden /> OpenReview
            </a>
          )}
        </div>

        {showCite && (
          <div className="pub__cite">
            <CopyButton text={p.bibtex} />
            <pre>{p.bibtex}</pre>
          </div>
        )}
      </div>
    </li>
  )
}

export function Publications() {
  const selected = publications.filter((p) => p.selected)
  const rest = publications.filter((p) => !p.selected)
  const [showAll, setShowAll] = useState(false)

  // Keep the toggle at the same spot on screen when the list opens or closes,
  // so the page never jumps under the reader.
  const toggleRef = useRef<HTMLButtonElement>(null)
  const anchorTop = useRef<number | null>(null)
  const toggle = () => {
    anchorTop.current = toggleRef.current?.getBoundingClientRect().top ?? null
    setShowAll((v) => !v)
  }
  useLayoutEffect(() => {
    const before = anchorTop.current
    const now = toggleRef.current?.getBoundingClientRect().top
    if (before == null || now == null) return
    anchorTop.current = null
    window.scrollBy({ top: now - before, behavior: 'instant' })
  }, [showAll])

  return (
    <Section id="publications" title="Publications">
      <h3 className="subheading">Selected</h3>
      <ol className="pubs">
        {selected.map((p) => (
          <PublicationCard key={p.title} p={p} />
        ))}
      </ol>

      <button
        ref={toggleRef}
        type="button"
        className="pubs-toggle"
        aria-expanded={showAll}
        aria-controls="pubs-others"
        onClick={toggle}
      >
        {showAll ? <FiChevronUp aria-hidden /> : <FiChevronDown aria-hidden />}
        {showAll ? 'Hide other publications' : `Show ${rest.length} more publications`}
      </button>

      {showAll && (
        <ol className="pubs" id="pubs-others" aria-label="Other publications">
          {rest.map((p) => (
            <PublicationCard key={p.title} p={p} />
          ))}
        </ol>
      )}

      <p className="muted">
        The full, most up-to-date list is on{' '}
        <a href={profile.links.scholar} target="_blank" rel="noreferrer">
          Google Scholar
        </a>
        .
      </p>
    </Section>
  )
}

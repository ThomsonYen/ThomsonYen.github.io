import { FiArrowUpRight } from 'react-icons/fi'
import { profile, publications } from '../content'
import { Section } from './Section'

// Keep the arrow glued to the last word so it never wraps onto its own line.
function TitleWithArrow({ title }: { title: string }) {
  const cut = title.lastIndexOf(' ')
  return (
    <>
      {title.slice(0, cut + 1)}
      <span className="nowrap">
        {title.slice(cut + 1)}
        <FiArrowUpRight className="pub__arrow" aria-hidden />
      </span>
    </>
  )
}

export function Publications() {
  return (
    <Section id="publications" title="Selected Publications">
      <ol className="pubs">
        {publications.map((p) => (
          <li key={p.url} className="pub">
            <div className="pub__venue">
              <span className="badge">{p.venue}</span>
              <span className="pub__year">{p.year}</span>
            </div>
            <div>
              <a className="pub__title" href={p.url} target="_blank" rel="noreferrer">
                <TitleWithArrow title={p.title} />
              </a>
              <p className="pub__summary">{p.summary}</p>
            </div>
          </li>
        ))}
      </ol>
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

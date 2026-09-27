import { FaGithub, FaOrcid } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiFileText, FiMail, FiMapPin } from 'react-icons/fi'
import { SiGooglescholar, SiSemanticscholar } from 'react-icons/si'
import { profile } from '../content'

const socials = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: FiMail },
  { label: 'Google Scholar', href: profile.links.scholar, icon: SiGooglescholar },
  { label: 'GitHub', href: profile.links.github, icon: FaGithub },
  { label: 'X / Twitter', href: profile.links.twitter, icon: FaXTwitter },
  { label: 'Semantic Scholar', href: profile.links.semantic, icon: SiSemanticscholar },
  { label: 'ORCID', href: profile.links.orcid, icon: FaOrcid },
]

export function Hero() {
  return (
    <section id="top" className="hero">
      <img
        className="hero__avatar"
        src={profile.avatar}
        alt={`Portrait of ${profile.name}`}
        width={176}
        height={176}
      />
      <div className="hero__text">
        <h1 className="hero__name">
          {profile.name} <span className="hero__native">({profile.nativeName})</span>
        </h1>
        <p className="hero__role">
          {profile.title} at <strong>{profile.affiliation}</strong>
        </p>
        <p className="hero__meta">
          <FiMapPin aria-hidden /> {profile.location}
        </p>
        <div className="hero__actions">
          <a className="button" href={profile.cv} target="_blank" rel="noreferrer">
            <FiFileText aria-hidden /> CV
          </a>
          <ul className="socials">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  className="icon-button"
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

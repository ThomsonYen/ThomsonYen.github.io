import { labFormUrl, profile } from '../content'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="prose">
        <p>
          I'm always open to collaborations and conversations! If you'd like to chat, feel free to
          reach out at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      </div>
      <aside className="callout">
        <p>
          <strong>Students:</strong> if you're a motivated undergraduate or master's student
          interested in doing exciting ML research, please fill out{' '}
          <a href={labFormUrl} target="_blank" rel="noreferrer">
            this form
          </a>{' '}
          to join Hong's lab.
        </p>
      </aside>
    </Section>
  )
}

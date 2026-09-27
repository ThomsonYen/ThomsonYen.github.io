import { interests } from '../content'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" title="About">
      <div className="prose">
        <p>Hey!</p>
        <p>
          I'm a Ph.D. student at Columbia University, where I think about machine learning with the
          amazing <a href="https://hsnamkoong.github.io/">Hongseok Namkoong</a>.
        </p>
        <p>
          I obtained a Master's in Machine Learning at Carnegie Mellon University. I had a great time
          studying distribution shift and machine learning at large, all thanks to working with
          incredible people like <a href="https://saurabhgarg1996.github.io/">Saurabh Garg</a> and{' '}
          <a href="https://www.zacharylipton.com/">Zachary Lipton</a>.
        </p>
        <p>
          Previously, I was a physics enthusiast at the University of Toronto, who failed to
          understand Quantum Field Theory (QFT) and General Relativity (GR). While failing, I was
          fortunate enough to work with the inspiring{' '}
          <a href="https://www.utsc.utoronto.ca/~aizmaylov/index.html">Artur Izmaylov</a> on quantum
          computing. I've postponed understanding QFT and GR, but please catch and teach me if you
          do.
        </p>
        <p>Outside of productive hours, I enjoy spending time with friends :)</p>
      </div>

      <h3 className="subheading">Current interests</h3>
      <ul className="chips">
        {interests.map((i) => (
          <li key={i} className="chip">
            {i}
          </li>
        ))}
      </ul>
    </Section>
  )
}

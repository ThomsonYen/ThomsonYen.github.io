import type { ReactNode } from 'react'

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section">
      <h2 className="section__title">{title}</h2>
      {children}
    </section>
  )
}

// All site content lives here. Edit this file to update the website.

import yen2026mbabench from './publications/yen2026mbabench'
import mittal2026latentgym from './publications/mittal2026latentgym'
import yen2025data from './publications/yen2025data'
import mittal2025architectural from './publications/mittal2025architectural'
import yang2025benchmarking from './publications/yang2025benchmarking'
import castellani2025synthtools from './publications/castellani2025synthtools'
import baby2023online from './publications/baby2023online'

export const profile = {
  name: 'Thomson Yen',
  nativeName: 'Tzu-Ching',
  title: 'PhD student in Machine Learning',
  affiliation: 'Columbia University',
  avatar: 'images/avatar.jpg',
  email: 'thomson.yen.ty@gmail.com',
  cv: 'files/YenCV.pdf',
  links: {
    scholar: 'https://scholar.google.com/citations?user=OK6RSVkAAAAJ',
    github: 'https://github.com/ThomsonYen',
    twitter: 'https://x.com/ThomsonYenTY',
    orcid: 'https://orcid.org/0000-0002-1116-2190',
    semantic: 'https://www.semanticscholar.org/author/Tzu-Ching-Yen/102855766',
  },
}

export const interests = [
  'Long-horizon, ambiguous tasks (¬ RLVR)',
  'Continual learning',
  'Memory and retrieval for LLMs',
]

export type Publication = {
  title: string
  authors: string[]
  // How many of the leading authors contributed equally; they get a *.
  equalContribution?: number
  // Conference name, or 'Preprint' for papers not yet published.
  venue: string
  year: number
  // Shown in the "Selected" group; everything else is listed below it.
  selected?: boolean
  // The paper's neurips.cc page (virtual poster/oral). Omit for preprints.
  paper?: string
  // OpenReview page, for accepted papers whose neurips.cc page isn't live yet.
  openreview?: string
  arxiv?: string
  // Project page, if the paper has one.
  website?: string
  // A backtick string; wrap it across lines however you like. Line breaks and
  // indentation are collapsed into single spaces when shown.
  summary: string
  bibtex: string
}

// Written exactly like this in `authors` so it gets highlighted.
export const selfName = 'Thomson Yen'

// One file per paper in src/publications/. Newest first.
export const publications: Publication[] = [
  yen2026mbabench,
  mittal2026latentgym,
  yen2025data,
  mittal2025architectural,
  yang2025benchmarking,
  castellani2025synthtools,
  baby2023online,
].map((p) => ({ ...p, summary: p.summary.trim().replace(/\s+/g, ' ') }))

// The /quantum/ page, linked from "quantum computing" in About.
export const quantum = {
  intro: "If you're curious, my favorite works from my undergrad time are:",
  favorites: [
    {
      title:
        'Measuring all compatible operators in one series of single-qubit measurements using unitary transformations',
      url: 'https://doi.org/10.1021/acs.jctc.0c00008',
      venue: 'J. Chem. Theory Comput.',
      year: 2020,
      note: `
        still a simple-to-implement idea that many subsequent Pauli-based QC measurement schemes use.
      `,
    },
    {
      title:
        'Deterministic improvements of quantum measurements with grouping of compatible operators, non-local transformations, and covariance estimates',
      url: 'https://doi.org/10.1038/s41534-023-00683-y',
      venue: 'npj Quantum Information',
      year: 2023,
      note: `
        a very cool Pauli-based measurement grouping using covariance estimates, still afaik SOTA until 2026.
      `,
    },
    {
      title: 'Quantum measurement for quantum chemistry on a quantum computer',
      url: 'https://doi.org/10.1021/acs.chemrev.5c00055',
      venue: 'Chemical Reviews',
      year: 2025,
      note: `
        a summary of QC measurement methods, and our understanding of them.
      `,
    },
  ].map((f) => ({ ...f, note: f.note.trim().replace(/\s+/g, ' ') })),
}

export const labFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSe2h_h4rEn1dMzTfs7BKPsxPwvabkqm7I-RkBXv3eI9P41weA/viewform'

// The hidden /secret/ page: a password-gated view counter. The password only hides the
// page from casual visitors; it ships in the bundle, so it is not real security.
export const secret = {
  password: '42',
  pages: [
    { key: 'home', label: 'Home' },
    { key: 'quantum', label: 'Quantum' },
  ],
}

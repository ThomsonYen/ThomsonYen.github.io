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
  'Scaling RL environments for LLMs',
  'Long-horizon, ambiguous tasks (¬ RLVR)',
  'Continual learning',
  'Memory for learning systems',
]

export type Publication = {
  title: string
  authors: string[]
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
]

export const labFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSe2h_h4rEn1dMzTfs7BKPsxPwvabkqm7I-RkBXv3eI9P41weA/viewform'

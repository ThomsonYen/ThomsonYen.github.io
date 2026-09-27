// All site content lives here. Edit this file to update the website.

export const profile = {
  name: 'Thomson Yen',
  nativeName: 'Tzu-Ching',
  title: 'PhD student in Machine Learning',
  affiliation: 'Columbia University',
  location: 'New York',
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
  venue: string
  year: number
  url: string
  summary: string
}

// Newest first.
export const publications: Publication[] = [
  {
    title: 'Data Mixture Optimization: A Multi-fidelity Multi-scale Bayesian Framework',
    venue: 'NeurIPS',
    year: 2025,
    url: 'https://openreview.net/forum?id=Kvsa8ZXd0W',
    summary:
      'Data mixture optimization should be principled rather than based on guesswork. Our results demonstrate that Bayesian Optimization yields superior performance compared to prior ad-hoc methods.',
  },
  {
    title: 'Online Label Shift: Optimal Dynamic Regret meets Practical Algorithms',
    venue: 'NeurIPS',
    year: 2023,
    url: 'https://proceedings.neurips.cc/paper_files/paper/2023/hash/cf42f133f355e0e07a8957b508b26a1b-Abstract-Conference.html',
    summary:
      'We develop novel algorithms that reduce the label shift adaptation problem to online regression and guarantee optimal dynamic regret without any prior knowledge of the extent of drift in the label distribution.',
  },
]

export const labFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSe2h_h4rEn1dMzTfs7BKPsxPwvabkqm7I-RkBXv3eI9P41weA/viewform'

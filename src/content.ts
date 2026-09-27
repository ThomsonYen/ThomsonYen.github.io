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

// Newest first.
export const publications: Publication[] = [
  {
    title: 'MBABench: Evaluating LLM Agents on End-to-End Spreadsheet Tasks in Finance',
    authors: [
      'Thomson Yen',
      'Julian Poeltl',
      'Harshith Srinivas Gear',
      'Yilin Meng',
      'Joshua Fan',
      'Adam Shen',
      'Yili Liu',
      'Ali Bauyrzhan',
      'Patrick Shea',
      'Siri Du',
      'Haoyang Liu',
      'Daniel Guetta',
      'Hongseok Namkoong',
    ],
    venue: 'NeurIPS',
    year: 2026,
    selected: true,
    openreview: 'https://openreview.net/forum?id=HI4PcfnlXQ',
    arxiv: 'https://arxiv.org/abs/2605.22664',
    website: 'https://mbabench.org/#/',
    summary:
      'Agents should be judged on whole workflows, not atomic questions. We evaluate LLM agents on end-to-end financial spreadsheet tasks such as modeling and scenario analysis, graded by an expert-validated judge on accuracy, formulas, and format.',
    bibtex: `@inproceedings{yen2026mbabench,
  title={{MBABench}: Evaluating {LLM} Agents on End-to-End Spreadsheet Tasks in Finance},
  author={Yen, Thomson and Poeltl, Julian and Gear, Harshith Srinivas and Meng, Yilin and Fan, Joshua and Shen, Adam and Liu, Yili and Bauyrzhan, Ali and Shea, Patrick and Du, Siri and Liu, Haoyang and Guetta, Daniel and Namkoong, Hongseok},
  booktitle={The Fortieth Annual Conference on Neural Information Processing Systems Evaluations and Datasets Track},
  year={2026},
  url={https://openreview.net/forum?id=HI4PcfnlXQ}
}`,
  },
  {
    title:
      'LatentGym: A Testbed For Cross-Task Experiential Learning With Controllable Latent Structure',
    authors: [
      'Daksh Mittal',
      'Tommaso Castellani',
      'Thomson Yen',
      'Naimeng Ye',
      'Fangyu Wu',
      'Minghui Chen',
      'Tiffany Cai',
      'Emmanouil Koukoumidis',
      'William Zeng',
      'Hongseok Namkoong',
    ],
    venue: 'Preprint',
    year: 2026,
    arxiv: 'https://arxiv.org/abs/2606.15306',
    summary:
      'A suite of text environments, each built around a ground-truth latent shared across tasks, with metrics that separate whether agents explore to learn the latent from whether they exploit what they have learned.',
    bibtex: `@article{mittal2026latentgym,
  title={{LatentGym}: A Testbed For Cross-Task Experiential Learning With Controllable Latent Structure},
  author={Mittal, Daksh and Castellani, Tommaso and Yen, Thomson and Ye, Naimeng and Wu, Fangyu and Chen, Minghui and Cai, Tiffany and Koukoumidis, Emmanouil and Zeng, William and Namkoong, Hongseok},
  journal={arXiv preprint arXiv:2606.15306},
  year={2026}
}`,
  },
  {
    title: 'Data Mixture Optimization: A Multi-fidelity Multi-scale Bayesian Framework',
    authors: [
      'Thomson Yen',
      'Andrew Wei Tung Siah',
      'Haozhe Chen',
      'Tianyi Peng',
      'Daniel Guetta',
      'Hongseok Namkoong',
    ],
    venue: 'NeurIPS',
    year: 2025,
    selected: true,
    paper: 'https://neurips.cc/virtual/2025/loc/san-diego/poster/118592',
    arxiv: 'https://arxiv.org/abs/2503.21023',
    summary:
      'Data mixture optimization should be principled rather than based on guesswork. Our results demonstrate that Bayesian Optimization yields superior performance compared to prior ad-hoc methods.',
    bibtex: `@inproceedings{yen2025data,
  title={Data Mixture Optimization: A Multi-fidelity Multi-scale {B}ayesian Framework},
  author={Yen, Thomson and Siah, Andrew Wei Tung and Chen, Haozhe and Peng, Tianyi and Guetta, Daniel and Namkoong, Hongseok},
  booktitle={Advances in Neural Information Processing Systems},
  year={2025}
}`,
  },
  {
    title: 'Architectural and Inferential Inductive Biases for Exchangeable Sequence Modeling',
    authors: ['Daksh Mittal', 'Ang Li', 'Thomson Yen', 'Daniel Guetta', 'Hongseok Namkoong'],
    venue: 'NeurIPS',
    year: 2025,
    paper: 'https://neurips.cc/virtual/2025/loc/san-diego/poster/115035',
    arxiv: 'https://arxiv.org/abs/2503.01215',
    summary:
      'Multi-step autoregressive generation separates epistemic from aleatoric uncertainty and improves downstream decisions, while custom exchangeable Transformer architectures can underperform standard causal masking.',
    bibtex: `@inproceedings{mittal2025architectural,
  title={Architectural and Inferential Inductive Biases for Exchangeable Sequence Modeling},
  author={Mittal, Daksh and Li, Ang and Yen, Thomson and Guetta, Daniel and Namkoong, Hongseok},
  booktitle={Advances in Neural Information Processing Systems},
  year={2025}
}`,
  },
  {
    title: 'Benchmarking In-context Experiential Learning Through Repeated Product Recommendations',
    authors: ['Gilbert Yang', 'Yaqin Chen', 'Thomson Yen', 'Hongseok Namkoong'],
    venue: 'Preprint',
    year: 2025,
    arxiv: 'https://arxiv.org/abs/2511.22130',
    summary:
      'A benchmark where agents recommend real products to simulated users with latent, heterogeneous preferences, measuring whether they learn and adapt from accumulated experience.',
    bibtex: `@article{yang2025benchmarking,
  title={Benchmarking In-context Experiential Learning Through Repeated Product Recommendations},
  author={Yang, Gilbert and Chen, Yaqin and Yen, Thomson and Namkoong, Hongseok},
  journal={arXiv preprint arXiv:2511.22130},
  year={2025}
}`,
  },
  {
    title: 'SynthTools: A Framework for Scaling Synthetic Tools for Agent Development',
    authors: [
      'Tommaso Castellani',
      'Naimeng Ye',
      'Daksh Mittal',
      'Thomson Yen',
      'Emmanouil Koukoumidis',
      'William Zeng',
      'Hongseok Namkoong',
    ],
    venue: 'Preprint',
    year: 2025,
    arxiv: 'https://arxiv.org/abs/2511.09572',
    summary:
      'Generates, simulates, and audits synthetic tool ecosystems so tool-use agents can be trained and evaluated at scale without relying on unstable real-world APIs.',
    bibtex: `@article{castellani2025synthtools,
  title={{SynthTools}: A Framework for Scaling Synthetic Tools for Agent Development},
  author={Castellani, Tommaso and Ye, Naimeng and Mittal, Daksh and Yen, Thomson and Koukoumidis, Emmanouil and Zeng, William and Namkoong, Hongseok},
  journal={arXiv preprint arXiv:2511.09572},
  year={2025}
}`,
  },
  {
    title: 'Online Label Shift: Optimal Dynamic Regret meets Practical Algorithms',
    authors: [
      'Dheeraj Baby',
      'Saurabh Garg',
      'Thomson Yen',
      'Sivaraman Balakrishnan',
      'Zachary Lipton',
      'Yu-Xiang Wang',
    ],
    venue: 'NeurIPS',
    year: 2023,
    paper: 'https://neurips.cc/virtual/2023/poster/71994',
    arxiv: 'https://arxiv.org/abs/2305.19570',
    summary:
      'We develop novel algorithms that reduce the label shift adaptation problem to online regression and guarantee optimal dynamic regret without any prior knowledge of the extent of drift in the label distribution.',
    bibtex: `@inproceedings{baby2023online,
  title={Online Label Shift: Optimal Dynamic Regret meets Practical Algorithms},
  author={Baby, Dheeraj and Garg, Saurabh and Yen, Tzu-Ching and Balakrishnan, Sivaraman and Lipton, Zachary and Wang, Yu-Xiang},
  booktitle={Advances in Neural Information Processing Systems},
  volume={36},
  year={2023}
}`,
  },
]

export const labFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSe2h_h4rEn1dMzTfs7BKPsxPwvabkqm7I-RkBXv3eI9P41weA/viewform'

import type { Publication } from '../content'

const paper: Publication = {
  title: 'Online Label Shift: Optimal Dynamic Regret meets Practical Algorithms',
  authors: [
    'Dheeraj Baby',
    'Saurabh Garg',
    'Thomson Yen',
    'Sivaraman Balakrishnan',
    'Zachary Lipton',
    'Yu-Xiang Wang',
  ],
  equalContribution: 3,
  venue: 'NeurIPS',
  year: 2023,
  paper: 'https://neurips.cc/virtual/2023/poster/71994',
  arxiv: 'https://arxiv.org/abs/2305.19570',
  summary: `
    I implemented the novel algorithms that reduce the label shift adaptation
    problem to online regression. This algorithm guarantees optimal dynamic
    regret without any prior knowledge of the extent of drift in the label
    distribution.
  `,
  bibtex: `@inproceedings{baby2023online,
  title={Online Label Shift: Optimal Dynamic Regret meets Practical Algorithms},
  author={Baby, Dheeraj and Garg, Saurabh and Yen, Tzu-Ching and Balakrishnan, Sivaraman and Lipton, Zachary and Wang, Yu-Xiang},
  booktitle={Advances in Neural Information Processing Systems},
  volume={36},
  year={2023}
}`,
}

export default paper

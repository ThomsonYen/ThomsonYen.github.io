import type { Publication } from '../content'

const paper: Publication = {
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
  summary: `
    Data mixture optimization is tremendously costly and important; but current decisions here often rely on crude scaling-law fits.
    We introduce a principled framework based on Baysian optimization (BO) that can efficiently optimize data mixtures across multiple data and model scales, balancing the tradeoff between exploration and exploitation.
  `,
  bibtex: `@inproceedings{yen2025data,
  title={Data Mixture Optimization: A Multi-fidelity Multi-scale {B}ayesian Framework},
  author={Yen, Thomson and Siah, Andrew Wei Tung and Chen, Haozhe and Peng, Tianyi and Guetta, Daniel and Namkoong, Hongseok},
  booktitle={Advances in Neural Information Processing Systems},
  year={2025}
}`,
}

export default paper

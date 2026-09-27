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
  summary:
    'Data mixture optimization should be principled rather than based on guesswork. Our results demonstrate that Bayesian Optimization yields superior performance compared to prior ad-hoc methods.',
  bibtex: `@inproceedings{yen2025data,
  title={Data Mixture Optimization: A Multi-fidelity Multi-scale {B}ayesian Framework},
  author={Yen, Thomson and Siah, Andrew Wei Tung and Chen, Haozhe and Peng, Tianyi and Guetta, Daniel and Namkoong, Hongseok},
  booktitle={Advances in Neural Information Processing Systems},
  year={2025}
}`,
}

export default paper

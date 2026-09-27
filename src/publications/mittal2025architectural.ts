import type { Publication } from '../content'

const paper: Publication = {
  title: 'Architectural and Inferential Inductive Biases for Exchangeable Sequence Modeling',
  authors: ['Daksh Mittal', 'Ang Li', 'Thomson Yen', 'Daniel Guetta', 'Hongseok Namkoong'],
  venue: 'NeurIPS',
  year: 2025,
  paper: 'https://neurips.cc/virtual/2025/loc/san-diego/poster/115035',
  arxiv: 'https://arxiv.org/abs/2503.01215',
  summary: `
    Differentiating epistemic and aleatoric uncertainty allows agents to make
    informed decisions.
    Multi-step autoregressive generation promises to achieve
    this, but we reveal a fundamental gap in proposed architectures that make
    them impossible to learn the correct uncertainty decomposition.
  `,
  bibtex: `@inproceedings{mittal2025architectural,
  title={Architectural and Inferential Inductive Biases for Exchangeable Sequence Modeling},
  author={Mittal, Daksh and Li, Ang and Yen, Thomson and Guetta, Daniel and Namkoong, Hongseok},
  booktitle={Advances in Neural Information Processing Systems},
  year={2025}
}`,
}

export default paper

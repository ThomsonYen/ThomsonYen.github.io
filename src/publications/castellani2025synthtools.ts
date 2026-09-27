import type { Publication } from '../content'

const paper: Publication = {
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
  summary: `
    LLMs' RL environments need to be scalable, but existing tool-use datasets or
    evals are hand-crafted. SynthTools generates, simulates, and audits
    synthetic tool ecosystems so that we can train tool-use agents at scale
    without relying on unstable real-world APIs.
  `,
  bibtex: `@article{castellani2025synthtools,
  title={{SynthTools}: A Framework for Scaling Synthetic Tools for Agent Development},
  author={Castellani, Tommaso and Ye, Naimeng and Mittal, Daksh and Yen, Thomson and Koukoumidis, Emmanouil and Zeng, William and Namkoong, Hongseok},
  journal={arXiv preprint arXiv:2511.09572},
  year={2025}
}`,
}

export default paper

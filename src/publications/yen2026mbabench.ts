import type { Publication } from '../content'

const paper: Publication = {
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
  summary: `
    What do real-world professionals do, and how are they evaluated?
    They perform complex workflows end-to-end, and are evaluated on whether the final artifact is usable (e.g. professional look, easy to modify, read, and maintain).
    Agents should be held to the same standard.
    We evaluate LLM agents on end-to-end financial spreadsheet tasks, and grade them by an expert-validated judge on not just accuracy, but also formula, and format quality that determine whether a spreadsheet is usable in practice.
  `,
  bibtex: `@inproceedings{yen2026mbabench,
  title={{MBABench}: Evaluating {LLM} Agents on End-to-End Spreadsheet Tasks in Finance},
  author={Yen, Thomson and Poeltl, Julian and Gear, Harshith Srinivas and Meng, Yilin and Fan, Joshua and Shen, Adam and Liu, Yili and Bauyrzhan, Ali and Shea, Patrick and Du, Siri and Liu, Haoyang and Guetta, Daniel and Namkoong, Hongseok},
  booktitle={The Fortieth Annual Conference on Neural Information Processing Systems Evaluations and Datasets Track},
  year={2026},
  url={https://openreview.net/forum?id=HI4PcfnlXQ}
}`,
}

export default paper

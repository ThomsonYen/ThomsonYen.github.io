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
  summary:
    'Agents should be judged on whole workflows, not atomic questions. We evaluate LLM agents on end-to-end financial spreadsheet tasks such as modeling and scenario analysis, graded by an expert-validated judge on accuracy, formulas, and format.',
  bibtex: `@inproceedings{yen2026mbabench,
  title={{MBABench}: Evaluating {LLM} Agents on End-to-End Spreadsheet Tasks in Finance},
  author={Yen, Thomson and Poeltl, Julian and Gear, Harshith Srinivas and Meng, Yilin and Fan, Joshua and Shen, Adam and Liu, Yili and Bauyrzhan, Ali and Shea, Patrick and Du, Siri and Liu, Haoyang and Guetta, Daniel and Namkoong, Hongseok},
  booktitle={The Fortieth Annual Conference on Neural Information Processing Systems Evaluations and Datasets Track},
  year={2026},
  url={https://openreview.net/forum?id=HI4PcfnlXQ}
}`,
}

export default paper

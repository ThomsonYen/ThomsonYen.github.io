import type { Publication } from '../content'

const paper: Publication = {
  title: 'Benchmarking In-context Experiential Learning Through Repeated Product Recommendations',
  authors: ['Gilbert Yang', 'Yaqin Chen', 'Thomson Yen', 'Hongseok Namkoong'],
  venue: 'Preprint',
  year: 2025,
  arxiv: 'https://arxiv.org/abs/2511.22130',
  summary: `
    Real-world recommender has a wealth of live data from users (e.g., clicks, purchases, ratings) and myriad of tools to interactively inquire user preferences (e.g. questions, product displays).
    This benchmark evaluates LLM recommenders in this realistic and challenging settings, and measures whether they can learn and adapt to users' latent preferences through repeated recommendations.
  `,
  bibtex: `@article{yang2025benchmarking,
  title={Benchmarking In-context Experiential Learning Through Repeated Product Recommendations},
  author={Yang, Gilbert and Chen, Yaqin and Yen, Thomson and Namkoong, Hongseok},
  journal={arXiv preprint arXiv:2511.22130},
  year={2025}
}`,
}

export default paper

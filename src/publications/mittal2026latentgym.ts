import type { Publication } from '../content'

const paper: Publication = {
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
  summary: `
    Can LLMs continually learn? And how do we train them to do so?
    LatentGym provides a suite of text environments, each built around a ground-truth latent shared
    across successive tasks.
    We showed that by training LLMs to learn the latent, they can transfer continual learning capability even to unseen task types!!
  `,
  bibtex: `@article{mittal2026latentgym,
  title={{LatentGym}: A Testbed For Cross-Task Experiential Learning With Controllable Latent Structure},
  author={Mittal, Daksh and Castellani, Tommaso and Yen, Thomson and Ye, Naimeng and Wu, Fangyu and Chen, Minghui and Cai, Tiffany and Koukoumidis, Emmanouil and Zeng, William and Namkoong, Hongseok},
  journal={arXiv preprint arXiv:2606.15306},
  year={2026}
}`,
}

export default paper

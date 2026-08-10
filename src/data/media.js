import photoHero from '../assets/instagram/photo-01.jpg'
import photoBrandCookie from '../assets/instagram/photo-02.jpg'
import photoWelcome from '../assets/instagram/photo-03.jpg'
import photoCommunity from '../assets/instagram/photo-04.jpg'

import reelSoft from '../assets/instagram/reel-05.mp4'
import reelMid from '../assets/instagram/reel-06.mp4'
import reelBake from '../assets/instagram/reel-07.mp4'
import reelPull from '../assets/instagram/reel-08.mp4'
import reelClose from '../assets/instagram/reel-09.mp4'

export const media = {
  hero: photoHero,
  brandCookie: photoBrandCookie,
  welcome: photoWelcome,
  community: photoCommunity,
}

/** Galeria Instagram — só mídia visual (sem posts tipográficos) */
export const galleryItems = [
  {
    id: 'g1',
    type: 'video',
    src: reelSoft,
    alt: 'Cookie macio saindo da caixa',
    label: 'Soft pull',
  },
  {
    id: 'g2',
    type: 'image',
    src: photoHero,
    alt: 'Seleção de crooks artesanais',
    label: 'Seleção',
  },
  {
    id: 'g3',
    type: 'video',
    src: reelBake,
    alt: 'Fornada The Crook',
    label: 'Fornada',
  },
  {
    id: 'g4',
    type: 'video',
    src: reelPull,
    alt: 'Textura do crook',
    label: 'Textura',
  },
  {
    id: 'g5',
    type: 'video',
    src: reelMid,
    alt: 'Crook no ponto',
    label: 'No ponto',
  },
  {
    id: 'g6',
    type: 'video',
    src: reelClose,
    alt: 'Close do recheio',
    label: 'Recheio',
  },
]

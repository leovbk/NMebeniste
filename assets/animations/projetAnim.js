import { gsap } from 'gsap'

export const projetAnim = () => {
  const tlProjetAnim = gsap.timeline()

  tlProjetAnim.from(
    '#titre-projet',
    {
      opacity: 0,
      duration: 1.5,
    },
    '+=0.3'
  )
  tlProjetAnim.from(
    ['#description', '.etiquette-titre'],
    {
      opacity: 0,
      yPercent: -50,
      stagger: 0.1,
    },
    '-=0.8'
  )
  tlProjetAnim.from(
    '.descriptionPar',
    {
      opacity: 0,
      stagger: 0.2,
    },
    '-=0.4'
  )
  tlProjetAnim.from(
    '.img-projet',
    {
      opacity: 0,
      stagger: 0.15,
    },
    '-=0.5'
  )
}

import { gsap } from 'gsap'

export const realisationAnim = () => {
  const tlReal = gsap.timeline()

  tlReal.from('.photo', {
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
  })
}

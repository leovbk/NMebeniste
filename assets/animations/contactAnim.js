import { gsap } from 'gsap'

export const contactAnim = () => {
  const tlContactAnim = gsap.timeline()

  tlContactAnim.from('#form_container', {
    opacity: 0,
    duration: 1,
  })

  tlContactAnim.from(
    '.input_form',
    {
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      x: -60,
    },
    '-=0.4'
  )
  tlContactAnim.from(
    '.etiquette',
    {
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
    },
    '-=0.9'
  )
  tlContactAnim.from(
    '.button1',
    {
      opacity: 0,
      duration: 0.6,
    },
    '-=1'
  )
}

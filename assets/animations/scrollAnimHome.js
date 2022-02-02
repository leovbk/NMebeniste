import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export const scrollAnimHome = () => {
  gsap.registerPlugin(ScrollTrigger)

  const scrollAnimH = gsap.timeline({
    scrollTrigger: { trigger: '#home-text', start: 'top center' },
  })
  scrollAnimH.from(['#homeTextP', '#homeTextH1', '#homeTextH2'], {
    opacity: '0',
    yPercent: -100,
    stagger: 0.2,
    duration: 1,
  })

  // gsap.from(['#home-text-container'], {
  //   scrollTrigger: '#home-text-container',
  //   opacity: '0',
  //   yPercent: 100,
  //   duration: 2,
  // })
}

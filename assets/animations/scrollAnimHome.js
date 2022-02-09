import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export const scrollAnimHome = () => {
  gsap.registerPlugin(ScrollTrigger)

  const scrollAnimH = gsap.timeline({
    scrollTrigger: { trigger: '#home-text', start: 'top 85%' },
  })
  scrollAnimH.from(['#homeTextH2', '#homeTextH1', '#homeTextP'], {
    opacity: '0',
    yPercent: -50,
    stagger: 0.4,
    duration: 1,
    ease: 'power2.easeOut',
  })

  gsap.from(['.text-pratique', '#text-pratiqueh2'], {
    scrollTrigger: '.text-pratique',
    opacity: '0',
    stagger: 0.5,
    duration: 2,
  })

  // gsap.from(['#text-pratiqueh2'], {
  //   scrollTrigger: '#text-pratiqueh2',
  //   opacity: '0',
  //   duration: 2,
  // })
}

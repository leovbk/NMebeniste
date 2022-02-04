import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

let alreadyRun = false

export const introAnim = () => {
  const tlIntro = gsap.timeline()
  if (!alreadyRun) {
    alreadyRun = true

    tlIntro.set(['#text-bg01'], {
      opacity: 0,
    })
    tlIntro.set(['.layerWhite'], {
      top: '0',
    })
    tlIntro.from(['#logo', '.btn-nav'], {
      y: '-60px',
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
      delay: 0.2,
      ease: 'back.out(1)',
    })
    tlIntro.from(
      ['.line-burger'],
      {
        y: '-60px',
        opacity: 0,
        duration: 0.7,
        stagger: -0.15,
        ease: 'back.out(1)',
      },
      '-=1'
    )

    tlIntro.from(
      ['.layerWhite'],
      {
        top: 0,
        duration: 3,
        ease: 'back.out(1)',
      },
      '-=0.6'
    )
    tlIntro.from(['#text-bg01'], {
      duration: 1,
      opacity: 0,
      delay: -2.1,
    })
  } else {
    tlIntro.from('#home', {
      opacity: 0,
    })
  }
}

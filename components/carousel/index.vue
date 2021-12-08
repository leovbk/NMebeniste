<template>
  <div id="carousel_container" class="container">
    <!-- <img
        id="img_escape"
        :src="require('@/assets/logo/escape.svg')"
        @click="killScrollAnim"
      /> -->
    <section
      v-for="(photop, i) in photos"
      :key="i"
      class="panel"
      :class="`photo${i + 1}`"
      :style="{
        backgroundImage: `url(${photos[i].photos.url})`,
      }"
    ></section>
    <div class="flex flex-center">
      <Transition name="fade">
        <img
          v-show="hasArrowVisible"
          id="scrollUp"
          src="@/assets/logo/arrow-205.svg"
          alt="Scroll up"
        />
      </Transition>
      <Transition name="fade">
        <img
          v-show="hasArrowVisible"
          id="scrollDown"
          src="@/assets/logo/arrow-205.svg"
          alt="Scroll down"
        />
      </Transition>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min'

export default {
  props: {
    currentPhoto: { type: Number, required: true },
  },

  data() {
    return {
      hasArrowVisible: true,
    }
  },

  computed: {
    projectId() {
      return this.$route.params.project
    },
    project() {
      return this.projetsData.find((project) => project.id === this.projectId)
    },
    projectImages() {
      return this.project.photos
    },
  },

  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    // trigger

    function setSection(newSection) {
      if (newSection !== currentSection) {
        gsap.to(currentSection, { scale: 0.8, autoAlpha: 0 })
        gsap.to(newSection, { scale: 1, autoAlpha: 1 })
        currentSection = newSection
      }
    }
    const sections = document.getElementsByClassName('panel')
    let currentSection = sections[this.currentPhoto]

    gsap.defaults({ overwrite: 'auto', duration: 0.25 })
    gsap.set('#carousel_container', { height: sections.length * 100 + '%' })
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        start: () => (i - 0.5) * innerHeight,
        end: () => (i + 0.5) * innerHeight,
        onToggle: (self) => self.isActive && setSection(section),
      })
    })

    setSection(currentSection)

    ScrollTrigger.create({
      id: 'carousel_trigger',
      start: 1,
      end: () => ScrollTrigger.maxScroll(window) - 1,
      onLeaveBack: (self) => self.scroll(ScrollTrigger.maxScroll(window) - 2),
      onLeave: (self) => self.scroll(2),
    }).scroll(2)

    document.addEventListener('scroll', this.scrollHandler)

    setTimeout(() => {
      window.scrollTo(0, innerHeight * this.currentPhoto)
    }, 0)
  },

  methods: {
    scrollHandler() {
      if (
        window.scrollY > innerHeight * this.currentPhoto + 150 ||
        window.scrollY < innerHeight * this.currentPhoto - 150
      ) {
        this.hasArrowVisible = false
      }
    },
    killScrollAnim() {
      const Alltrigger = ScrollTrigger.getAll()
      for (let i = 0; i < Alltrigger.length; i++) {
        Alltrigger[i].kill(true)
      }
    },
  },
}
</script>

<style scoped>
.flex {
  display: flex;
}
.flex-center {
  align-content: center;
  justify-content: center;
}

.container {
  height: 100%;
}

.panel {
  position: fixed;
  width: calc(100% - 700px);
  height: calc(100% - 120px);
  top: 0;
  left: 0;
  margin: 60px 350px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

section:not(.first) {
  opacity: 0;
  visibility: hidden;
  transform: scale(0.8);
}

#carousel_escape {
  position: fixed;
  top: 2%;
  right: 2%;
  width: 6%;
  height: 10%;
  z-index: 300;
}

#scrollDown {
  position: fixed;
  width: 6vw;
  bottom: 0;
}

#scrollUp {
  position: fixed;
  width: 6vw;
  top: 0;
  transform: rotate(180deg);
}

.fade-enter-active,
.fade-leave-active {
  transform: scale(1);
  z-index: 998;
  transition: all ease-in-out 300ms;
}

.fade-enter,
.fade-leave-to {
  transform: scale(0);
  z-index: 998;
}
@media (max-width: 1300px) {
  .panel {
    width: calc(100% - 500px);
    height: calc(100% - 80px);
    margin: 40px 250px;
  }
}
@media (max-width: 1050px) {
  .panel {
    width: calc(100% - 350px);
    height: calc(100% - 60px);
    margin: 30px 175px;
  }
}
@media (max-width: 800px) {
  .panel {
    width: calc(100% - 250px);
    height: calc(100% - 40px);
    margin: 20px 125px;
  }
  #carousel_escape {
    width: 10%;
    height: 16%;
  }
}
@media (max-width: 600px) {
  .panel {
    width: calc(100% - 150px);
    height: calc(100% - 20px);
    margin: 10px 75px;
  }
}
@media (max-width: 450px) {
  .panel {
    width: calc(100% - 100px);
    height: calc(100% - 10px);
    margin: 5px 50px;
  }
  #carousel_escape {
    width: 15%;
    height: 25%;
  }
}
</style>

<template>
  <div id="home">
    <section id="bg01">
      <div id="home-bg01-container">
        <img id="home-bg01" src="~/assets/images/woodstock.jpg" alt="" />
        <div class="layerWhite"></div>
      </div>

      <div id="text-bg01">
        <div id="title"><h1>nicolas michaud</h1></div>
        <div class="line"></div>
        <p class="subtitle fontAvenir">Artisan Eco-responsable</p>
      </div>
    </section>
    <section id="home-text">
      <div id="home-text-container">
        <h2 id="homeTextH2">
          J'exerce à Roubaix, dans la métropole Lilloise, dans un atelier
          partagé. La vision prônée au sein de l'atelier:
        </h2>
        <br />
        <h1 id="homeTextH1">
          Une ébénisterie responsable, durable, qui crée du lien.
        </h1>
        <br />
        <p id="homeTextP">
          L’attention est donc apportée sur le choix des matières premières et
          des fournisseurs; l’utilisation raisonnée des ressources en énergie et
          en eau; et la gestion raisonnée des biens et des déchets à travers le
          don et le recyclage.
        </p>
      </div>
    </section>
    <section class="slideShow">
      <img
        v-for="(url, imgIndex) in slidePictures"
        :key="`slide-${imgIndex}`"
        :src="url"
        class="slide"
        :class="{ 'active-slide': activeSlide === imgIndex }"
      />
      <div id="dot-container">
        <button
          v-for="(url, btnIndex) in slidePictures"
          :key="`btn-${btnIndex}`"
          class="dot"
          :class="{ 'active-dot': activeSlide === btnIndex }"
          @click="setActiveSlide(btnIndex)"
        ></button>
      </div>
    </section>

    <section id="pratique">
      <div id="textPratiqueContainer">
        <p class="text-pratique">
          Le bois massif est constitué d’essences locales certifiées FSC et PEFC
          et d’un panel d’essences issu de seconde main ou de fruitiers de la
          région. Les produits dérivés et les produits de finitions sont
          sélectionnés avec soin : les médiums et agglomérés sont exclus
          (émanations de colle et de solvant), les produits à base aqueuse sont
          privilégiés.
        </p>
        <h2 id="text-pratiqueh2">
          Aujourd’hui je m’exprime à travers la création de mobilier et d’objet,
          mais aussi la restauration et la transformation de mobilier.
        </h2>
      </div>
    </section>

    <section id="link-section">
      <div id="link-container">
        <nuxt-link
          id="link-particulier"
          class="home-section-link"
          :to="{ name: 'particulier' }"
          ><p>PARTICULIER</p></nuxt-link
        >
        <nuxt-link
          id="link-pro"
          class="home-section-link"
          :to="{ name: 'professionnel' }"
          ><p>PROFESSIONNEL</p></nuxt-link
        >
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { introAnim } from '@/assets/animations/introAnim'
import { scrollAnimHome } from '@/assets/animations/scrollAnimHome'

export default {
  name: 'Home',

  beforeRouteLeave(to, from, next) {
    const tlHomeOut = gsap.timeline()

    tlHomeOut.to('#home', { opacity: 0 })
    tlHomeOut.call(next)
  },

  async asyncData({ $prismic, error }) {
    try {
      const prismicSlideShow = (await $prismic.api.getSingle('slideshow')).data
        .imagesslide

      const slidePictures = []
      for (let i = 0; i < prismicSlideShow.length; i++) {
        slidePictures.push(prismicSlideShow[i].images.url)
      }
      console.log(slidePictures)
      return { slidePictures }
    } catch (error) {
      console.error(error)
    }
  },

  data() {
    return {
      activeSlide: 0,
      slideTime: 5000,
      slideInterval: undefined,
    }
  },

  mounted() {
    window.scrollTo(0, 0)
    introAnim()
    scrollAnimHome()

    this.launchInterval()

    const parallax = document.querySelector('#pratique')
    const rectPratique = parallax.getBoundingClientRect()

    window.addEventListener('scroll', () => {
      parallax.style.backgroundPositionY =
        -(window.scrollY - rectPratique.top + 100) / 2 + 'px'
    })
  },

  methods: {
    launchInterval() {
      this.slideInterval = setInterval(this.changeSlide, this.slideTime)
    },

    changeSlide() {
      if (this.activeSlide < this.slidePictures.length - 1) {
        this.activeSlide++
      } else {
        this.activeSlide = 0
      }
    },

    setActiveSlide(index) {
      clearInterval(this.slideInterval)
      this.activeSlide = index
      this.launchInterval()
    },
  },
}
</script>

<style scoped>
.layerWhite {
  position: absolute;
  background-color: rgb(241, 243, 242);
  height: 600px;
  width: 100vw;
  top: 600px;
  z-index: 0;
}
#bg01 {
  position: relative;
}
#home-bg01 {
  height: 600px;
  width: 100%;
  object-fit: cover;
  z-index: -1;
}

#text-bg01 {
  position: absolute;
  background-color: hsla(137, 22%, 20%, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 350px;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: hsla(137, 8%, 95%, 1);
  backdrop-filter: blur(3px);
}

#title h1 {
  font-family: 'Northern', serif;
  font-size: 4em;
  font-weight: 100;
  margin-bottom: 0;
  text-align: center;
  padding: 0 30px 0 30px;
}

.subtitle {
  font-size: xx-large;
  font-weight: 100;
}

.line {
  width: 200px;
  border-top: 1px solid hsla(137, 8%, 95%, 1);
  margin: 30px;
}
#home-text {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 15% 30px 15%;
  height: auto;
  min-height: 200px;
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  font-size: x-large;
  overflow: hidden;
}

#home-text-container {
  z-index: 3;
}

#home-text-container h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: x-large;
  margin: 0;
  color: #413636;
}

#home-text-container h1 {
  color: hsl(147, 4%, 59%);
  margin: 0;
  text-align: center;
}

#home-text-container p {
  font-size: large;
}

/* #slideshow {
  height: 600px;
  position: relative;
  margin: 5vw;
  border: 1px solid red;
} */

.slideShow {
  position: relative;
  height: 600px;
  margin: 40px 160px 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slideShow .slide {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  opacity: 0;
}

.slideShow .slide.active-slide {
  opacity: 1;
}

#dot-container {
  position: absolute;
  bottom: -40px;
}

.slideShow .dot {
  height: 15px;
  width: 15px;
  background-color: #413636;

  /* border-radius: 50%; */

  z-index: 2000;
  cursor: pointer;
  margin: 5px;
  transition: all 0.7s ease-in-out;
}
.slideShow .dot.active-dot {
  background-color: hsl(147, 4%, 59%);
  transform: rotate(45deg);
}

#pratique {
  height: 500px;
  background-image: url('~/assets/images/BGPRATIQUE.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  filter: grayscale(100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsla(137, 8%, 95%, 1);
}

#textPratiqueContainer {
  font-family: 'Cormorant Garamond', serif;
  width: 70vw;
  background-color: rgba(65, 54, 54, 0.3);
  backdrop-filter: blur(5px);
  padding: 40px;
}

.text-pratique {
  text-indent: 5%;
  text-align: justify;
  font-size: 22px;
}

#text-pratiqueh2 {
  text-align: center;
  margin: 5%;
}

#link-container {
  display: grid;

  /* width: 100vw; */

  height: 400px;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
}

#link-container p {
  padding: 20px 40px;
  border: 1px solid hsla(137, 8%, 95%, 1);
}

.home-section-link {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsla(137, 8%, 95%, 1);
  transition: all 700ms cubic-bezier(0.4, 0, 0.2, 1);
  font-family: Avenir-Next-LT, sans-serif;
  font-size: 3em;
  flex-wrap: wrap;
  text-decoration: none;
  overflow: hidden;
}

#link-particulier {
  background-color: hsla(137, 22%, 25%, 1);
  position: relative;
  overflow: hidden;
}

#link-pro {
  position: relative;
  background-color: #413636;
  overflow: hidden;
}

.home-section-link:hover {
  font-size: 3.5em;
  margin: 0;
}

@media (min-width: 1600px) {
  .slideShow {
    height: 800px;
  }

  #pratique {
    height: 600px;
  }
}

@media (max-width: 1200px) {
  .slideShow {
    margin: 40px 60px 80px;
  }
}

@media (max-width: 900px) {
  .slideShow {
    height: 450px;
  }
}

@media (max-width: 750px) {
  .slideShow {
    margin: 40px 0 80px;
  }
  #title h1 {
    font-size: 3.5em;
  }

  .subtitle {
    font-size: x-large;
  }

  .line {
    width: 160px;
  }

  #text-bg01 {
    height: 300px;
    width: 100%;
  }

  #link-container {
    width: 100vw;
    height: 600px;
    grid-template-columns: none;
  }

  #link-container p {
    max-height: 300px;
  }

  #textPratiqueContainer {
    width: 100%;
  }

  .text-pratique,
  #text-pratiqueh2 {
    font-size: 20px;
    padding: 20px;
  }
}

@media (max-width: 550px) {
  .slideShow {
    height: 300px;
  }

  #pratique {
    height: 700px;
  }

  .text-pratique,
  #text-pratiqueh2 {
    font-size: 18px;
    padding: 10px;
  }
  .home-section-link {
    font-size: 2em;
  }
  .home-section-link:hover {
    font-size: 2.5em;
  }
}
</style>

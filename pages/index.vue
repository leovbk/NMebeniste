<template>
  <div id="home">
    <section id="bg01">
      <img id="home-bg01" src="~/assets/images/woodstock.jpg" alt="" />
      <div id="text-bg01">
        <div id="title"><h1>nicolas michaud</h1></div>
        <div class="line"></div>
        <p class="subtitle fontAvenir">Artisan Eco-responsable</p>
        <!-- <p class="subtitle fontAvenir">Responsable</p> -->
      </div>
    </section>
    <section id="home-text">
      <div id="home-text-container">
        <h2>Une ébénisterie responsable, durable, qui crée du lien</h2>
        <br />
        <h1>
          "L'ébénisterie c'est également une manière de faire, de vivre, de
          concevoir"
        </h1>
        <br />
        <p>
          Cela ce traduit par un choix des produits et des fournisseurs, une
          gestion responsable de nos déchets à travers le don et le recyclage,
          une utilisation raisonnée de nos ressources en eau et en énergie, un
          atelier comme lieu d'échange.
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
      <p class="text-pratique">
        Je suis ingénieur généraliste de formation, diplômé de l’école des
        Mines, et j’ai débuté ma carrière dans l’industrie, sur des postes
        supports dans l’automobile et l’aéronautique. Rapidement, j’ai souhaité
        une voie différente. Plus éloignée du cloisonnement systémique et rigide
        qu’impose actuellement l’industrie en France. Plus proche de mes
        aspirations personnelles, de mes valeurs, de mes racines.
      </p>
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
export default {
  name: 'Home',

  async asyncData({ $prismic, error }) {
    const prismicSlideShow = (await $prismic.api.getSingle('slideshow')).data
      .imagesslide

    const slidePictures = []
    for (let i = 0; i < prismicSlideShow.length; i++) {
      slidePictures.push(prismicSlideShow[i].images.url)
    }
    console.log(slidePictures)
    return { slidePictures }
  },

  data() {
    return {
      activeSlide: 0,
      slideTime: 5000,
      slideInterval: undefined,
    }
  },

  mounted() {
    this.launchInterval()

    const parallax = document.querySelector('#pratique')
    const rectPratique = parallax.getBoundingClientRect()

    window.addEventListener('scroll', () => {
      parallax.style.backgroundPositionY =
        -(window.scrollY - rectPratique.top + 200) / 2 + 'px'
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
#bg01 {
  position: relative;
}
#home-bg01 {
  height: 600px;
  width: 100%;
  object-fit: cover;
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

  /* backdrop-filter: blur(3px); */

  /* box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.6); */
}

#title h1 {
  font-family: 'Northern', serif;
  font-size: 4em;
  font-weight: 100;
  margin-bottom: 0;
  text-align: center;
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
  font-size: medium;
  overflow: hidden;
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
  height: 400px;
  background-image: url('~/assets/images/BG-pratique.jpg');
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

.text-pratique {
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  width: 70vw;
  font-size: 22px;
  background-color: rgba(65, 54, 54, 0.6);

  /* backdrop-filter: blur(2px); */
  padding: 60px;
}

#link-container {
  display: grid;
  width: 100vw;
  height: 400px;
  grid-template-columns: repeat(2, 1fr);
}

.home-section-link {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: 100%;
  color: hsla(137, 8%, 95%, 1);
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  font-family: Avenir-Next-LT, sans-serif;
  font-size: xxx-large;
  flex-wrap: wrap;
  text-decoration: none;
}

.home-section-link.p {
  z-index: 2;
  pointer-events: none;
}

/* 
.grid-link-text {
  color: #413636;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
  text-align: center;
} */

#link-particulier {
  background-image: url('~/assets/images/Particulier.jpg');
  background-size: cover;
  position: relative;

  /* margin: 20px 10px 20px 20px; */
}

#link-particulier::before {
  background-color: rgb(65, 54, 54);
  opacity: 0;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
  transition: all 0.7s;
}

#link-particulier:hover::before {
  opacity: 0.4;
}

#link-pro {
  position: relative;
  background-image: url('~/assets/images/Professionnel.jpg');
  background-size: cover;
}

#link-pro::before {
  background-color: rgb(65, 54, 54);
  opacity: 0;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
  transition: all 0.7s;
}

#link-pro:hover::before {
  opacity: 0.4;
}

.home-section-link:hover {
  font-size: 320%;
  margin: 0;
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

  .text-pratique {
    font-size: 20px;
    padding: 40px;
  }
}

@media (max-width: 550px) {
  .slideShow {
    height: 300px;
  }

  .text-pratique {
    font-size: 18px;
    padding: 20px;
    width: 100vw;
  }
}
</style>

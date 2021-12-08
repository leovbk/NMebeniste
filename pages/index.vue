<template>
  <div id="home">
    <section id="bg01">
      <img id="home-bg01" src="~/assets/images/NICOHOME01.jpg" alt="" />
      <div id="text-bg01">
        <div id="title"><h1>nicolas michaud</h1></div>
        <div class="line"></div>
        <p class="subtitle fontAvenir">Ebéniste ~ Créateur</p>
        <p class="subtitle fontAvenir">Responsable</p>
      </div>
    </section>
    <section id="home-text">
      <div id="home-text-container">
        <h2>Lorem ipsum dolor sit amet consectetur</h2>
        <br />
        <h1>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          vero quisqua"
        </h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          officia explicabo alias numquam quidem libero eos nam animi quas,
          quibusdam maiores dicta officiis impedit repudiandae at accusamus
          porro. Esse, mollitia?
        </p>
      </div>
    </section>
    <section class="slideShow">
      <img
        v-for="(url, i) in slidePictures"
        :key="i"
        :src="url"
        class="slide"
      />
      <div
        v-for="(url, i) in slidePictures"
        :key="i"
        class="dot"
        :class="`dot${i}`"
      ></div>
    </section>

    <!-- <section class="prismic">
      <RichText :field="content" />
      <PrismicImage :field="image" />
      <PrismicEmbed :field="video" />
    </section> -->

    <!-- <PrismicLink :field="link"> {{ link.uid }} </PrismicLink> -->
    <section>
      <div id="link-container">
        <a id="link-particulier" class="home-section-link" href="">
          PARTICULIER
        </a>
        <p class="grid-link-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quam
          tenetur beatae doloribus cupiditate perferendis odit quisquam hic
          delectus eos!
        </p>
        <p class="grid-link-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quam
          tenetur beatae doloribus cupiditate perferendis odit quisquam hic
          delectus eos!
        </p>
        <a id="link-pro" class="home-section-link" href="">PROFESSIONNEL</a>
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
    }
  },

  computed: {
    slide() {
      return Array.from(document.querySelectorAll('.slide'))
    },
  },

  mounted() {
    this.changeImg()
    console.log(this.slidePictures)
  },

  methods: {
    changeImg() {
      this.slide.forEach((item, index) => {
        if (index === this.activeSlide) {
          this.slide[this.activeSlide].style.opacity = '1'
        } else {
          this.slide[index].style.opacity = '0'
        }
      })

      if (this.activeSlide < this.slide.length - 1) {
        this.activeSlide++
      } else {
        this.activeSlide = 0
      }
      setTimeout(this.changeImg, this.slideTime)
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@300&display=swap');

#bg01 {
  position: relative;
}
#home-bg01 {
  height: 600px;
  width: 100%;
  object-fit: cover;
  padding-top: 20px;
}

#text-bg01 {
  position: absolute;
  background-color: hsla(137, 22%, 20%, 0.6);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 400px;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: hsla(137, 8%, 95%, 1);
  backdrop-filter: blur(3px);

  /* box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.6); */
}

#title h1 {
  font-family: 'Rotterburg', serif;
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
  height: 300px;
  text-align: center;
  font-family: Sabon Regular, serif;
  font-size: medium;
  overflow: hidden;
}

#home-text-container h2 {
  font-family: Sabon Regular, serif;
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
  height: 500px;

  /* margin: 5vw; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.slide {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 0.7s ease-in-out;
}

#link-container {
  display: grid;
  width: 100vw;
  height: 800px;
  grid-template-rows: repeat(2, 1fr);
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

.grid-link-text {
  color: #413636;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
  text-align: center;
}

/* 

.prismic {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.prismic iframe {
  height: 300px;
  width: 100vw;
}
*/
.home-section-link:hover {
  background-size: 120%;
}

#link-particulier {
  background-image: url('https://www.boomerang-conseil.fr/wp-content/uploads/3.jpg');
}

#link-pro {
  background-image: url('http://www.redactiv-nord.fr/rno-content/uploads/2021/07/Anabelle-Janssen-Ebeniste-Meuble-bar-1930-cire%CC%81.jpg');
}
</style>

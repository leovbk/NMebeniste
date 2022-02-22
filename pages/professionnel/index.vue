<template>
  <div>
    <section class="mosaicContainer">
      <div class="projetMosaic">
        <div v-for="({ couverture, titre, url }, i) in projetsDataPro" :key="i">
          <nuxt-link
            :to="{
              name: 'professionnel-projet',
              params: { projet: url },
            }"
          >
            <div
              class="photo"
              :style="{
                backgroundImage: `url(${couverture})`,
              }"
            >
              <div class="photoLayer">
                <p class="titreProjet">
                  {{ titre }}
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { realisationAnim } from '@/assets/animations/realisationAnim'

export default {
  beforeRouteLeave(to, from, next) {
    const tlReaOut = gsap.timeline()
    tlReaOut.to('.photo', { opacity: 0, stagger: 0.1, duration: 0.5 })
    tlReaOut.call(next)
  },
  async asyncData({ $prismic, error, store }) {
    const documentPro = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'professionnel')
    )
    const projectsDataPro = []
    for (let i = 0; i < documentPro.results.length; i++) {
      projectsDataPro.push(documentPro.results[i])
    }

    store.dispatch('setProjectsDataPro', projectsDataPro)
  },

  data() {
    return { projetsDataPro: [] }
  },

  head() {
    return {
      title: 'Mes projets professionnels',
    }
  },

  computed: {
    allPrismic() {
      return this.$store.getters.projectsDataPro
    },
  },
  mounted() {
    realisationAnim()
  },

  created() {
    // map projet data

    for (const project in this.allPrismic) {
      this.projetsDataPro[project] = {
        titre: '',
        id: '',
        couverture: '',
      }
      this.projetsDataPro[project].titre =
        this.allPrismic[project].data.titre[0].text
      this.projetsDataPro[project].url = this.allPrismic[project].uid
      this.projetsDataPro[project].couverture =
        this.allPrismic[project].data.couverture.url
    }
  },
}
</script>

<style scoped>
.mosaicContainer {
  display: flex;
  justify-content: center;
  width: 100vw;
}
.projetMosaic {
  max-width: 1200px;
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 40px;
  margin-bottom: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1 1fr;
}

.projetMosaic a {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-decoration: none;
}

.photo {
  /* background-size: 110%; */
  background-size: 115%;
  background-repeat: no-repeat;
  background-position: center;
  width: 300px;
  height: 230px;
  margin: 12px;
  will-change: transform;
  transition: background-size 0.4s;
}
.photo:hover {
  background-size: 120%;
}

.photoLayer {
  background-color: rgba(47, 46, 46, 0.6);
  width: 100%;
  height: 100%;
  transition-duration: 0.4s;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  border: none;
}
.photoLayer:hover {
  opacity: 1;
}
.titreProjet {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  font-family: 'Cormorant Garamond', serif;
  color: white;
  width: 100%;
  height: 100%;
  font-size: x-large;
  opacity: 0;
}

.titreProjet:hover {
  opacity: 1;
  transition-duration: 0.4s;
}

@media (max-width: 900px) {
  .projetMosaic {
    margin-left: 60px;
    margin-right: 60px;
  }
}

@media (max-width: 770px) {
  .projetMosaic {
    margin-left: 30px;
    margin-right: 30px;
  }

  .photo {
    width: 100vw;
    height: 350px;
  }
}

@media (max-width: 400px) {
  .photo {
    width: 100vw;
    height: 250px;
  }
}
</style>

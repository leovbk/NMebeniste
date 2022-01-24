<template>
  <div>
    <section class="moisaicContainer">
      <div class="projetMosaic">
        <div v-for="({ couverture, titre, url }, i) in projetsDataPar" :key="i">
          <nuxt-link
            :to="{
              name: 'particulier-projet',
              params: { projet: url, index: i },
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
export default {
  async asyncData({ $prismic, error, store }) {
    const documentPar = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'particulier')
    )
    const projectsDataPar = []
    for (let i = 0; i < documentPar.results.length; i++) {
      projectsDataPar.push(documentPar.results[i])
    }
    store.dispatch('setProjectsDataPar', projectsDataPar)
  },

  data() {
    return { projetsDataPar: [] }
  },

  computed: {
    allPrismic() {
      return this.$store.getters.projectsDataPar
    },
  },

  created() {
    // map projet data

    for (const project in this.allPrismic) {
      this.projetsDataPar[project] = {
        titre: '',
        id: '',
        couverture: '',
      }
      this.projetsDataPar[project].titre =
        this.allPrismic[project].data.titre[0].text
      this.projetsDataPar[project].url = this.allPrismic[project].uid
      this.projetsDataPar[project].couverture =
        this.allPrismic[project].data.couverture.url
    }
  },
}
</script>

<style scoped>
.mosaicContainer {
  position: relative;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  width: 100vw;
}
.projetMosaic {
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
</style>

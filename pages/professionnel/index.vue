<template>
  <div>
    <button>
      <nuxt-link :to="{ name: 'particulier-projet' }">PROJET PRO</nuxt-link>
    </button>
    <section class="moisaicContainer">
      <div class="projetMosaic">
        <div v-for="({ couverture, titre, id }, i) in projetsData" :key="i">
          <nuxt-link
            :to="{
              name: 'projet',
              params: { project: id },
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
  async asyncData({ $prismic, error }) {
    const document = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'professionnel')
    )
    const prismicProject = []
    for (let i = 0; i < document.results.length; i++) {
      prismicProject.push(document.results[i])
    }
    return { prismicProject }
  },

  data() {
    return { projetsData: [], projectIndex: '', projectName: '' }
  },
  created() {
    // map projet data
    // console.log(this.prismicProject)

    for (const project in this.prismicProject) {
      this.projetsData[project] = {
        titre: '',
        id: '',
        couverture: '',
      }
      this.projetsData[project].titre =
        this.prismicProject[project].data.titre[0].text
      this.projetsData[project].id = this.prismicProject[project].uid
      this.projetsData[project].couverture =
        this.prismicProject[project].data.couverture.url
    }

    console.log(this.projetsData)
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
  margin-top: 140px;
  margin-bottom: 140px;
  line-height: 0;
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

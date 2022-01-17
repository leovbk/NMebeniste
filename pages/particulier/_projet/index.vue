<template>
  <div class="projet-container">
    <section class="projet-texte">
      <PrismicRichText id="titre-projet" :field="titre" />

      <div class="all-text-description">
        <PrismicRichText id="description" :field="description" />
        <h3 class="etiquette-titre">Lieu</h3>
        <PrismicRichText :field="lieu" />
        <br />
        <h3 class="etiquette-titre">Calendrier</h3>
        <PrismicRichText :field="phase" />
        <br />
        <h3 class="etiquette-titre">Matériaux utilisés</h3>
        <PrismicRichText :field="essence" />
        <br />
        <h3 class="etiquette-titre">Finition</h3>
        <PrismicRichText :field="finition" />
      </div>
    </section>

    <section id="gallery-container">
      <div
        v-for="(photop, i) in photos"
        :key="i"
        class="img-projet"
        :style="{
          backgroundImage: `url(${photos[i].photo.url})`,
        }"
        @click="
          carousselVisible = true
          currentPhoto = i
        "
      ></div>
    </section>
    <Caroussel
      v-if="carousselVisible"
      :photosCarou="photos"
      :currentPhoto="currentPhoto"
      @test-click="carousselVisible = false"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      carousselVisible: false,
      currentPhoto: 0,
    }
  },
  computed: {
    allPrismic() {
      return this.$store.getters.projectsDataPar
    },

    currentProjetId() {
      return this.$route.params.projet
    },

    currentProjetIndex() {
      return this.$route.params.index
    },

    currentProjetData() {
      return this.allPrismic[this.currentProjetIndex].data
    },

    titre() {
      return this.currentProjetData.titre
    },

    description() {
      return this.currentProjetData.description
    },

    lieu() {
      return this.currentProjetData.lieu
    },

    phase() {
      return this.currentProjetData.phase
    },

    essence() {
      return this.currentProjetData.essence
    },

    finition() {
      return this.currentProjetData.finition
    },

    photos() {
      return this.currentProjetData.photos
    },
  },
}
</script>

<style scoped>
#titre-projet {
  font-family: 'Northern', serif;
  font-size: 4em;
  font-weight: 100;
  text-align: center;
  margin: 20px auto;
  padding: 40px 25px 25px 25px;
  position: relative;
  color: hsla(137, 8%, 95%, 1);
  background-color: hsla(137, 22%, 25%, 1);
}

#description {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2em;
  font-weight: 100;
  margin-bottom: 30px;
}

.etiquette-titre {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5em;
  font-weight: 600;
  line-height: 1.5;
  text-decoration: underline;

  /* text-transform: uppercase; */
  width: fit-content;
  margin: 0 0 0.4em 0;
}

.all-text-description {
  margin: 60px 150px;
}

.all-text-description p {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2em;
}

#gallery-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 120px 100px;
  justify-content: space-around;
}

.img-projet {
  max-width: 550px;
  min-width: 500px;
  height: 400px;
  margin: 15px 15px;
  background-size: cover;
  background-position: center;
  flex-grow: 1;
  cursor: pointer;
}

/* @media (max-width: 1300px) {
  #gallery-container img {
    width: 400px;
    max-width: fit-content;
    margin: 15px 0;
  }
  #gallery-container {
    margin: 0 120px 100px;
  }
}

@media (max-width: 1000px) {
  #gallery-container {
    margin: 0 100px 100px;
  }
}

@media (max-width: 700px) {
  #gallery-container {
    margin: 0 20px 100px;
  }
} */
</style>

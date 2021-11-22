<template>
  <div class="projet-container">
    <section class="projet-texte">
      <PrismicRichText id="titre-projet" :field="titre" />
      <!-- <h1 id="titre-projet">La torrefactory</h1> -->
      <div class="all-text-description">
        <PrismicRichText id="description" :field="description" />
        <h3 class="etiquette-titre">Lieu</h3>
        <PrismicRichText :field="lieu" />
        <br />
        <h3 class="etiquette-titre">Phase</h3>
        <PrismicRichText :field="phase" />
        <br />
        <h3 class="etiquette-titre">Essence de bois</h3>
        <PrismicRichText :field="essence" />
        <br />
        <h3 class="etiquette-titre">Finition</h3>
        <PrismicRichText :field="finition" />
      </div>
    </section>
    <section id="gallery-container">
      <!-- <div v-for="i in photos" :key="i">
        <PrismicImage :field="photos[i].photo" />
      </div> -->
      <!-- <div class="gallery-wrapper"></div> -->
      <img src="@/assets/images/contact-bg01.jpg" alt="" />
      <img src="@/assets/images/contact-bg02.jpg" alt="" />
      <img src="@/assets/images/contact-bg03.jpg" alt="" />
      <img src="@/assets/images/contact-bg04.jpg" alt="" />
      <img src="@/assets/images/img1.jpeg" alt="" />
      <img src="@/assets/images/img2.jpeg" alt="" />
      <img src="@/assets/images/img3.jpeg" alt="" />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error, params }) {
    try {
      const url = params.projet
      // Query to get blog home content
      const projetData = (await $prismic.api.getByUID('particulier', url)).data
      // Returns data to be used in template
      return {
        projetData,
        titre: projetData.titre,
        description: projetData.description,
        lieu: projetData.lieu,
        phase: projetData.phase,
        essence: projetData.essence,
        finition: projetData.finition,
        photos: projetData.photos,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  created() {
    console.log(this.projetData)
  },
}
</script>

<style>
#titre-projet {
  font-family: 'Rotterburg', serif;
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
  font-size: 4em;
  font-weight: 100;
  margin-bottom: 30px;
}

.etiquette-titre {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5em;
  font-weight: 600;
  line-height: 1.5;

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

/* .gallery-wrapper {
  width: 100%;
  height: 100%;
  margin: 100px;
  border: 1px solid green;
  box-sizing: border-box;
} */

#gallery-container img {
  max-width: 550px;
  min-width: 250px;
  flex-grow: 1;
  margin: 15px 0;
  padding: 0 10px;
  object-fit: cover;
}

@media (max-width: 1300px) {
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
}
</style>

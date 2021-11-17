<template>
  <div class="moisaicContainer">
    <div class="projetMosaic">
      {{ prismicProject }}
      <!-- <div v-for="({}, i) in prismicProject" :key="i"> -->
      <!-- <nuxt-link
          :to="{
            name: prismicProject[i].url,
            params: { project: id },
          }"
        > -->
      <!-- <div
          class="photo"
          :class="`photo${i + 1}`"
          :style="{
            backgroundImage: `url(${cover})`,
          }"
        > -->
      <!-- <div class="photoLayer">
          <p class="titreProjet">
            {{ prismicProject[i].title[0].text }}
          </p>
        </div> -->
      <!-- </div> -->
      <!-- </nuxt-link> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error, params }) {
    try {
      // const url = params.url

      // Query to get blog home content
      const projectsData = await $prismic.api.query([
        $prismic.predicates.at('document.type', 'projects'),
      ])
      const prismicProject = []
      for (let i = 0; i < projectsData.results.length; i++) {
        prismicProject.push(projectsData.results[i].data)
      }
      return { prismicProject }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style>
.photoLayer {
  border: 1px solid greenyellow;
  height: 300px;
  width: 500px;
}
</style>

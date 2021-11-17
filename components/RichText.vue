<template>
  <PrismicRichText :field="field" class="prismic-rich-text" />
</template>

<script>
export default {
  props: {
    field: { type: Array, required: true },
  },
}
</script>

<style lang="css">
.prismic-rich-text p {
  font-size: 14px;
}

.prismic-rich-text h2 {
  font-size: 36px;
}

.prismic-rich-text img {
  max-width: 100%;
}
</style>

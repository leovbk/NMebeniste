<template>
  <section class="slideShow">
    <img v-for="(url, i) in slidePictures" :key="i" :src="url" class="slide" />
    <div
      v-for="(url, i) in slidePictures"
      :key="i"
      class="dot"
      :class="`dot${i}`"
    ></div>
  </section>
</template>

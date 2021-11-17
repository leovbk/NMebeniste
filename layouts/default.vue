<template>
  <div id="app">
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style>
html,
body {
  height: 100%;
  font-weight: 400;
}
#app {
  height: 100%;
}
</style>

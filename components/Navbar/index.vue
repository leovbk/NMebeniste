<template>
  <nav class="barMenu">
    <div id="nav_container">
      <nuxt-link id="nav-logo" :to="{ name: 'index' }"
        ><div id="logo-1" class="logo">Nicolas Michaud</div>
        <div id="logo-2" class="logo">Ebéniste</div>
      </nuxt-link>

      <div id="btn-container">
        <button class="btn-nav">
          <nuxt-link :to="{ name: 'index' }">ACCUEIL</nuxt-link>
        </button>
        <button class="btn-nav">
          <nuxt-link :to="{ name: 'professionnel' }">PROFESSIONNEL</nuxt-link>
        </button>
        <button class="btn-nav">
          <nuxt-link :to="{ name: 'particulier' }">PARTICULIER</nuxt-link>
        </button>
        <button class="btn-nav">
          <nuxt-link :to="{ name: 'contact' }">CONTACT</nuxt-link>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style>
#nav-logo {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  font-family: GoldenHopes, sans-serif;
  color: #413636;
  margin: 40px 50px 0;
  line-height: 40px;
}

#logo-1 {
  font-size: xx-large;
}

#logo-2 {
  font-size: 58px;
  letter-spacing: 2px;
}

#nav_container {
  height: 120px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
}

#btn-container {
  margin-right: 80px;
  width: 650px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
}

.btn-nav a {
  font-family: Avenir-Next-LT, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: x-large;
  position: relative;

  /* font-weight: bold; */

  /* padding: 20px 10px; */

  background-color: transparent;
  text-decoration: none;
  color: #413636;
  transition: all 150ms ease-in-out;
}

.btn-nav a::after {
  display: block;
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: solid 1px #413636;
  transform: scaleX(0);
  transition: transform 500ms ease-in-out;
}
.btn-nav a:hover::after,
.btn-nav a:focus::after {
  transform: scaleX(1);
}

/* .btn-nav a:hover,
.btn-nav a:focus {
  border-bottom: 1px solid #413636;
} */
</style>

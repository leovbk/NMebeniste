<template>
  <nav id="barMenu">
    <div id="nav_container">
      <nuxt-link id="nav-logo" :to="{ name: 'index' }">
        <img id="logo" src="~/assets/images/LOGO-NICO.jpg" alt="Logo" />
      </nuxt-link>

      <button @click="toggleNav" id="menu-burger">
        <div id="line-container">
          <div class="line-burger"></div>
          <div class="line-burger"></div>
          <div class="line-burger"></div>
        </div>
      </button>

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
    <div id="btn-container-burger">
      <button @click="toggleNav" class="btn-nav-burger">
        <nuxt-link :to="{ name: 'index' }">ACCUEIL</nuxt-link>
      </button>
      <button @click="toggleNav" class="btn-nav-burger">
        <nuxt-link :to="{ name: 'professionnel' }">PROFESSIONNEL</nuxt-link>
      </button>
      <button @click="toggleNav" class="btn-nav-burger">
        <nuxt-link :to="{ name: 'particulier' }">PARTICULIER</nuxt-link>
      </button>
      <button @click="toggleNav" class="btn-nav-burger">
        <nuxt-link :to="{ name: 'contact' }">CONTACT</nuxt-link>
      </button>
    </div>
    <div id="nav-spacer"></div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  data() {
    return { navOpen: false }
  },

  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen
      console.log('openNav')
      const navBurger = document.getElementById('btn-container-burger')
      navBurger.classList.toggle('open')
    },
  },
}
</script>

<style>
#nav-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#logo {
  height: 110px;
  margin: 12px;
}

#nav_container {
  min-height: 120px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
}

#btn-container {
  margin-right: 80px;
  width: 650px;
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

#nav-spacer {
  width: 100%;
  height: 20px;
  background-color: hsla(137, 8%, 95%, 1);
}

#menu-burger {
  margin: 27px 10px 0;
  width: 120px;
  height: 120px;
  border: none;
  cursor: pointer;
  position: relative;
}

#btn-container-burger {
  /* position: fixed; */
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  transition: max-height 1s cubic-bezier(0.97, 0.01, 0, 1);
  max-height: 0;
  overflow: hidden;
}

.open {
  transition: max-height 1s cubic-bezier(0.97, 0.01, 0, 1);
  max-height: 1000px !important;
}

.btn-nav-burger {
  padding: 20px;
  text-decoration: none;
  background-color: hsla(137, 22%, 20%, 1);
}

.btn-nav-burger a {
  text-decoration: none;
  color: hsla(137, 8%, 95%, 1);
  font-family: Avenir-Next-LT, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: x-large;
}

#line-container {
  width: 70px;
  height: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.line-burger {
  position: absolute;
  width: 100%;
  height: 2px;
  background: #413636;
}

#menu-burger .line-burger:nth-child(1) {
  top: 0;
}

#menu-burger .line-burger:nth-child(2) {
  top: 25px;
}

#menu-burger .line-burger:nth-child(3) {
  top: 50px;
}

@media (max-width: 850px) {
  #btn-container {
    display: none;
  }

  #nav-spacer {
    display: none;
  }
}

@media (min-width: 850px) {
  #menu-burger {
    display: none;
  }

  #btn-container-burger {
    display: none;
  }
}

/* .btn-nav a:hover,
.btn-nav a:focus {
  border-bottom: 1px solid #413636;
} */
</style>

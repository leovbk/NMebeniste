<template>
  <div id="form_container"><p>Votre message a bien été envoyé</p></div>
</template>
<script>
import { gsap } from 'gsap'

export default {
  name: 'Contact',

  beforeRouteLeave(to, from, next) {
    const tlSuccessOut = gsap.timeline()
    tlSuccessOut.to(
      '#form_container',
      {
        opacity: 0,
        duration: 0.6,
      },
      '-=1'
    )

    tlSuccessOut.call(next)
  },
}
</script>

<style scoped>
#form_container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/images/BG-CONTACT.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}

#form_container p {
  font-family: 'Cormorant Garamond', serif;
  font-size: 26px;
  color: hsla(137, 8%, 95%, 1);
  background-color: rgba(65, 54, 54, 0.3);
  backdrop-filter: blur(5px);
  padding: 40px;
}

@media (min-height: 900px) {
  #form_container {
    height: calc(100vh - 280px);
  }
}
</style>

<template>
  <div id="form_container">
    <form
      id="contact-form"
      target="_blank"
      action="https://formsubmit.co/ nicolas.michaud@lilo.org"
      method="POST"
    >
      <input
        type="hidden"
        name="_next"
        value="https://leovbk.github.io/NMebeniste/contact/success/"
      />
      <input
        type="hidden"
        name="_subject"
        value="Yo Nico, c'est le site qui te parles, tu as un nouveau message"
      />
      <input type="hidden" name="_ captcha" value="false" />
      <input type="hidden" name="_template" value="box" />
      <div class="grid-wrapper">
        <div class="grid_element">
          <label class="etiquette" for="firstname">Prenom</label>
          <input
            id="firstname"
            type="text"
            name="firstname"
            class="input_form"
          />
          <p class="comments"></p>
        </div>
        <div class="grid_element">
          <label class="etiquette" for="name">Nom</label>
          <input id="name" type="text" name="name" class="input_form" />
          <p class="comments"></p>
        </div>
        <div class="grid_element">
          <label class="etiquette" for="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            class="input_form"
            required
          />
          <p class="comments"></p>
        </div>
        <div class="grid_element">
          <label class="etiquette" for="phone">Telephone</label>
          <input id="phone" type="tel" name="phone" class="input_form" />
          <p class="comments"></p>
        </div>
      </div>

      <div class="msgSection">
        <label class="etiquette" for="message">Message</label>
        <textarea
          id="message"
          name="message"
          class="input_form"
          required
        ></textarea>
        <p class="comments"></p>
      </div>
      <div class="div_btn">
        <button type="submit" class="button1">Envoyer</button>
      </div>
    </form>
  </div>
</template>
<script>
import { gsap } from 'gsap'
import { contactAnim } from '@/assets/animations/contactAnim'
export default {
  name: 'Contact',

  beforeRouteLeave(to, from, next) {
    const tlContactOut = gsap.timeline()

    tlContactOut.to('.button1', {
      opacity: 0,
    })
    tlContactOut.to(
      '.input_form',
      {
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        x: -60,
      },
      '-=0.3'
    )
    tlContactOut.to(
      '.etiquette',
      {
        opacity: 0,
        stagger: 0.3,
        duration: 0.5,
      },
      '-=0.9'
    )
    tlContactOut.to(
      '#form_container',
      {
        opacity: 0,
        duration: 0.6,
      },
      '-=1'
    )

    tlContactOut.call(next)
  },

  mounted() {
    contactAnim()
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
.contact {
  overflow: overlay;
}

#contact-form {
  width: 100%;
  margin: 5% 15%;
  max-width: 700px;
}

.grid-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.grid_element {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.grid_element input {
  height: 30px;
  background-color: hsla(137, 8%, 95%, 1);
}

label {
  font-family: Avenir-Next-LT, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: large;
  color: hsla(137, 8%, 95%, 1);
}

textarea {
  width: 100%;
  height: 80px;
  resize: vertical;
  border-radius: 0;
  border: hidden;
  box-shadow: none;
  margin-bottom: 20px;
  background-color: hsla(137, 8%, 95%, 1);
}

#contact-form input {
  border-radius: 0;
  border: hidden;
}

.div_btn {
  text-align: center;
}

.button1 {
  width: 260px;
  height: 34px;
  margin-top: 20px;
  background-color: rgb(241, 243, 242);
  position: relative;
  border: hidden;
  font-family: Avenir-Next-LT, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: large;
  color: rgb(50, 78, 58);
  padding: 0;
  transition: all 150ms ease-in-out;
  cursor: pointer;
}

.button1:hover {
  background-color: rgb(50, 78, 58);
  color: hsla(137, 8%, 95%, 1);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.6);
}

@media (min-height: 900px) {
  #form_container {
    height: calc(100vh - 280px);
  }
}

@media (max-width: 1000px) {
  .img-form {
    display: none;
  }
}
@media (max-width: 600px) {
  .grid-wrapper {
    display: flex;
    flex-direction: column;
  }
  .grid_element {
    margin-bottom: 10px;
  }
}
</style>

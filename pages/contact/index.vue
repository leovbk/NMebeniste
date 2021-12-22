<template>
  <div id="form_container">
    <!-- <div class="spacer-form"></div> -->

    <form
      id="contact-form"
      target="_blank"
      action="https://formsubmit.co/leo.verbeke@hotmail.fr"
      method="POST"
    >
      <input
        type="hidden"
        name="_next"
        value="http://leovbk.github.io/mbstudio-nuxt/contact/success"
      />
      <input
        type="hidden"
        name="_subject"
        value="Salut Gomar, c'est le site qui te parles, tu as un nouveau message"
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
export default {}
</script>

<style scoped>
#form_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 120px);
  background-image: url('@/assets/images/contact-bg2.jpg');
  background-size: cover;
  background-position: center;
}
.contact {
  overflow: overlay;
  margin-top: 80px;
}

#contact-form {
  width: 100%;
  margin: 5% 15%;
  max-width: 700px;
}

.grid-wrapper {
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 10px;
  grid-auto-rows: auto; */

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
  color: #413636;

  /* font-weight: bold; */
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

  /* border: 1px solid #252525; */
}

.div_btn {
  text-align: center;
}

.button1 {
  width: 260px;
  height: 34px;
  margin-top: 20px;
  background-color: hsla(137, 8%, 95%, 1);
  position: relative;
  border: hidden;
  font-family: Avenir-Next-LT, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: large;
  color: hsla(137, 22%, 25%, 1);
  padding: 0;
  transition: all 150ms ease-in-out;
  cursor: pointer;
}

.button1:hover {
  background-color: hsla(137, 22%, 25%, 1);
  color: hsla(137, 8%, 95%, 1);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.6);
}

/* .button1::before {
  display: block;
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  border-bottom: solid 1px #212121;
  transform: scaleX(0);
  transition: transform 500ms ease-in-out;
}
.button1:hover::before {
  transform: scaleX(1);
}

.button1::after {
  display: block;
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: solid 1px #212121;
  transform: scaleX(0);
  transition: transform 500ms ease-in-out;
}
.button1:hover::after {
  transform: scaleX(1);
}

.button1:hover,
.button1:focus {
  font-weight: normal;
} */

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

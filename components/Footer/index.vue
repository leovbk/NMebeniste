<template>
  <div id="footer">
    <p>
      Nicolas MICHAUD - HAUT DE FRANCE - 0608955503 - nicolas.michaud@lilo.org
    </p>
    <p>
      © 2022 -
      <a href="https://www.facebook.com/NicolasMichaudEbeniste" target="_blank"
        >Facebook</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
#footer {
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: hsla(137, 8%, 95%, 1);
  background-color: hsla(137, 22%, 25%, 1);
  font-family: Avenir-Next-LT, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: large;
  text-align: center;
}

#footer p {
  margin: 10px auto;
}

#footer a {
  color: hsla(137, 8%, 95%, 1);
}
</style>

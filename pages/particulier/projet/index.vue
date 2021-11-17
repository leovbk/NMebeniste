<template>
  <div class="projet-container">
    <section class="projet-texte">
      <h1 id="titre-projet">La torrefactory</h1>
      <div class="all-text-description">
        <h2 id="description">Comptoir et meuble au standard "Damman Frères"</h2>
        <h3 class="etiquette-titre">lieu</h3>
        <p>La Torrefactory, à Dunkerque</p>
        <h3 class="etiquette-titre">phase</h3>
        <p>Livré, Mars 2021</p>
        <h3 class="etiquette-titre">essence de bois</h3>
        <p>Chêne massif FSC, panneau contreplaqué peuplier, acier brossé</p>
        <h3 class="etiquette-titre">finition</h3>
        <p>Vernis mat et Peinture gris anthracite</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
#titre-projet {
  font-family: 'Rotterburg', serif;
  font-size: 4em;
  font-weight: 100;
  text-align: center;
  margin: 30px auto;
  position: relative;
  color: hsla(137, 8%, 95%, 1);
  background-color: hsla(137, 22%, 25%, 1);
  padding-top: 15px;
}

#description {
  font-family: 'Cormorant Garamond', serif;
  font-size: 4em;
  font-weight: 100;
  line-height: 1.5;
}

.etiquette-titre {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2em;
  font-weight: 100;
  line-height: 1.5;
}

.all-text-description {
  margin: 60px 200px;
}

/* #titre-projet::before {
  display: block;
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: solid 1px #413636;
}

#titre-projet::after {
  display: block;
  content: '';
  position: absolute;
  top: -14px;
  width: 100%;
  border-bottom: solid 1px #413636;
} */
</style>

<template>
  <div id="footer">
    <p>
      Nicolas MICHAUD - 29 rue Machin 59000 ROUBAIX - 0672628909 -
      contact@michaud.fr
    </p>
    <p>© 2021 - <a href="">Facebook</a></p>
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
}

#footer p {
  margin: 10px auto;
}

#footer a {
  color: hsla(137, 8%, 95%, 1);
}
</style>

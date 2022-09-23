<template>
  <div id="app">
    <div class="menu">
      <button @click="navigateTo('/angularjs/')">angularjs</button>
      <button @click="navigateTo('/vue2/')">vue2</button>
    </div>
    <div id="subapp-container">
      <div id="subapp-viewport"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    navigateTo(hash) {
      history.pushState(null, "", hash);
    },
  },
};
</script> 

<style>
body {
  margin: 0;
}
</style>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
}

#app .menu button {
  font-size: large;
}
</style>

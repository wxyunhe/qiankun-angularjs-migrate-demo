<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

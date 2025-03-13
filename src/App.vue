<script>
import NavbarMenu from './components/elements/NavbarMenu.vue';

export default {
  name: 'App',
  components: {
    NavbarMenu
  }
}
</script>

<template>
  <NavbarMenu />
  <router-view />
</template>

<style>
#app {
  font-family: Kanit, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

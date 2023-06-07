<template>
  <div id="app">
    <!-- <img class=" inline-block" alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Comments />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Comments from './components/Comments.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    Comments,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

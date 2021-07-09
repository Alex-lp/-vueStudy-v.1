<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/common/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #283046;
  margin-top: 60px;
  height: 100%;
  width: 100%;
  margin:  0 0;
  padding:  0 0;
}
</style>

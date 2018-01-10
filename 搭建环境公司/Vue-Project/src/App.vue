<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <stackContent />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import stackContent from './components/stackContent'

export default {
  name: 'app',
  components: {
    HelloWorld,
    stackContent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

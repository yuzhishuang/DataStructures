<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <stackContent />
    <duilieContent />
    <itemsContent />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import stackContent from './components/stackContent'
import duilieContent from './components/duilieContent'
import itemsContent from './components/itemsContent'

export default {
  name: 'app',
  components: {
    HelloWorld,
    stackContent,
    duilieContent,
    itemsContent
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

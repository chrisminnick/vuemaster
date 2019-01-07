<template>
  <div id="app">
    <CurrentLeaders v-bind:leaders="[1,4,2,6]"/>
    <ScenicView id="3"
                title="My Favorite View"
                img-url="picture1.jpeg"
                current-score="12"
    />
    <ScenicView id="6"
                title="Somewhere"
                img-url="picture2.jpeg"
                current-score="0"
    />



  </div>
</template>

<script>
import CurrentLeaders from './components/CurrentLeaders.vue'
import ScenicView from './components/ScenicView.vue'


export default {
  name: 'app',
  components: {
    CurrentLeaders,
    ScenicView
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

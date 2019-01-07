<template>
  <div id="app">
    <CurrentLeaders v-bind:leaders="[1,4,2,6]"/>

    <ScenicView v-for="view in views" :key="view.id"
                v-bind:view="view">
    </ScenicView>



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
  },
  data() {
      return {
          views: [
              {title: 'my picture', imgUrl: 'picture1.jpeg', id: '1'},
              {title: 'my other picture', imgUrl: 'picture2.jpeg', id: '4'}
          ],
          leaders: []
      }
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

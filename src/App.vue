<template>
  <div id="app">
    <div class="d-flex justify-content-center">
    <ScenicView v-for="view in views"
                :key="view.id"
                v-bind:view="view"
                v-on:voted=voteAndChange(view)
                class="p-2">
    </ScenicView>
    </div>

    <CurrentLeaders v-bind:leaders= calculateLeaders />


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
              {title: 'my picture', imgUrl: 'picture1.jpeg', id: '1', currentScore: 0},
              {title: 'my other picture', imgUrl: 'picture2.jpeg', id: '4',  currentScore: 0}
          ]
      }
  },
  computed: {
      calculateLeaders: function() {
          function compare(a,b) {
              const scoreA = a.currentScore;
              const scoreB = b.currentScore;
              let comparison = 0;
              if (scoreA < scoreB) {
                  comparison = 1;
              } else if (scoreA > scoreB) {
                  comparison = -1;
              }
              return comparison;
          }
          let sortedLeaders = this.views.slice(); //copy by value, not by reference
          sortedLeaders.sort(compare);
          return sortedLeaders;
      }
  },
  methods: {
      voteAndChange: function(view) {
          view.currentScore+=1
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

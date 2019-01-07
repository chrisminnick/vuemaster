<template>
  <div class="current-leaders">
    <h1>Current Leaders</h1>
    <ol>
      <li v-for="leader in leaders">
        {{leader}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'CurrentLeaders',
  props: {
    leaders: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
ol {
  list-style-position: inside;
  text-align: left;
  width: 300px;
  margin: 0 auto;
}
</style>

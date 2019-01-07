<template>
  <div class="current-leaders">
    <h1>Current Leaders</h1>
    <ul>
      <li>{{leaders[0]}}</li>
      <li>{{leaders[1]}}</li>
      <li>{{leaders[2]}}</li>
    </ul>
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
h3 {
  margin: 40px 0 0;
}
.current-leaders {
  float: left;
  width: 150px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="scenic-view">
    <figure>
    <img v-bind:alt="title" :src="require(`../assets/${imgUrl}`)" />
    <figcaption>
    <label>
    <input type="radio" name="vote" v-bind:value="id" />
    This view is better!
    </label>
    </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'ScenicView',
  props: {
    id: Number,
    title: String,
    imgUrl: String,
    CurrentScore: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.scenic-view {
  float:right;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="scenic-view">
    <figure>
    <img v-bind:alt="view.title" :src="require(`../assets/${view.imgUrl}`)" />
    <figcaption>
    <label>
    <input type="radio" name="vote" v-bind:value="view.id" v-on:click="$emit('voted')" />
    {{view.title}} (current score: {{view.currentScore}})
    </label>
    </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'ScenicView',
  props: {
    view:Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>

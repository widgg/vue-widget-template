<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img class="vue-img" v-bind:src="require('../assets/logo.png')">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 200px;
  height: 200px;
  background-color: #80b3ff;
}
.vue-img {
    height: 100px;
}
</style>

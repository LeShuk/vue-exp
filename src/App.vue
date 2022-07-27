<template>
  <div>
    Hello, World!
    <div>
      И тебе привет!
      <strong> {{likes}} </strong>
      <button @click="like">+</button>
    </div>
    <div>Забодал...
      <strong> {{dislikes}} </strong>
      <button @click="dislike">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      likes: 0,
      dislikes: 0,
    }
  },
  methods: {
    like() {
      this.likes += 1;
    },
    dislike() {
      this.dislikes += 1;
    },
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <h1>
      Hello World по роутингу во Vue
    </h1>
    <router-link to="/posts">Список постов</router-link>
    <router-link to="/about">О главном</router-link>
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>

</style>
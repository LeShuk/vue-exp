<template>
  <div class="navbar">
    <div @click="$router.push('/')">VUE</div>
    <div class="nav_btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px">О главном</my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.nav_btns {
  margin-left: auto;
}
</style>
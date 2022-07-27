<template>
  <div class="post">
    <div>
      <div><strong>Название:</strong>{{post.title}}</div>
      <div><strong>Описание:</strong> {{post.body}}</div>
      <div class="emotion"><strong>Настроение: </strong> {{post.emotion}}</div>
    </div>
    <div class="post-btns">
      <my-button>X</my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      require: true,
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.emotion {
  font-size: small;
  color: cadetblue;
}
</style>
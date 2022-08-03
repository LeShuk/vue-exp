<template>
  <div class="post">
    <div>
      <div>{{post.id}}</div>
      <div><strong>Название:</strong>{{post.title}}</div>
      <div><strong>Описание:</strong> {{post.body}}</div>
      <div class="emotion"><strong>Настроение: </strong> {{post.emotion}}</div>
    </div>
    <div class="post_btns">
      <my-button
          @click="$router.push(`posts/${post.id}`)"
      >
        Открыть
      </my-button>
      <my-button
      @click="$emit('remove', post)">
        X
      </my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  name: "PostItem",
  components: {MyButton},
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

.post_btns {
  display: flex;
}
</style>
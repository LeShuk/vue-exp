<template>
  <!-- Отключаем для формы действия браузера по умолчанию-->
  <form @submit.prevent>
    <!--   Вариант двухстороннего связывания через функцию-->
    <input
        v-bind:value="post.title"
        @input="inputTitle"
        class="input"
        type="text"
        placeholder="Название"/>
    <!--  Вариант двухстороннего связывания через сокращенную запись-->
    <input
        v-bind:value="post.body"
        @input="post.body = $event.target.value"
        class="input"
        type="text"
        placeholder="Описание"/>
    <button class="btn" >Разместить пост</button>
  </form>

</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    inputTitle(event) {
      this.post.title = event.target.value;
    },
  }
}
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.btn {
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  align-self: flex-end;

}

.input {
  width: 100%;
  padding: 10px 15px;
  margin-top: 15px;
  border: 1px solid teal;

}
</style>
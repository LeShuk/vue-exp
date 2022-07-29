<template>
  <h3>Создание записи</h3>
  <!-- Отключаем для формы действия браузера по умолчанию-->
  <form @submit.prevent>
    <!--   Вариант двухстороннего связывания через функцию-->
    <my-input
        v-bind:value="post.title"
        @input="inputTitle"
        type="text"
        placeholder="Название"/>
    <!--  Вариант двухстороннего связывания через сокращенную запись-->
    <my-input
        v-bind:value="post.body"
        @input="post.body = $event.target.value"
        type="text"
        placeholder="Описание"/>
    <!--    Вариант двустороннего связывания с директивой v-model-->
    <my-input
        v-model="post.emotion"
        type="text"
        placeholder="Настроение"
    />
    <my-button
        style="align-self: flex-end; margin-top: 15px"
        @click="createPost">Разместить пост
    </my-button>
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
        emotion: ''
      },
      idCounter: 4
    }
  },
  methods: {
    inputTitle(event) {
      this.post.title = event.target.value;
    },
    createPost() {
      this.post.id = this.idCounter

      //Создаем событие, на которое подписываем "родительский" компонент. В качестве параметров - имя события и данные,
      //передаваемые в событии.
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
        emotion: '',
      };
      this.idCounter += 1;
    },
  }
}
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
}


</style>
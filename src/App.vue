<template>
  <div class="app">
<!-- Отключаем для формы действия браузера по умолчанию-->
    <form @submit.prevent>
<!--   Вариант двухстороннего связывания через функцию-->
      <input
          v-bind:value="formTitle"
          @input="inputTitle"
          class="input"
          type="text"
          placeholder="Название"/>
<!--  Вариант двухстороннего связывания через сокращенную запись-->
      <input
          v-bind:value="formBody"
          @input="formBody = $event.target.value"
          class="input"
          type="text"
          placeholder="Описание"/>
      <button class="btn" @click="createPost">Разместить пост</button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Название:</strong>{{post.title}}</div>
      <div><strong>Описание</strong> {{post.body}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      posts: [
        {id: 1, title: 'Дневничок разработчика (нет)', body: 'Изучаю vue.js, полет нормальный...'},
        {id: 2, title: 'Дневничок разработчика (нет)', body: 'Цикличный вывод данных в компоненте.'},
        {id: 3, title: 'Мысли вслух',
          body: 'Немного подбешивает, что приходится тексты выдумывать. Знаю, есть генераторы, но искать их зело лень.'},
      ],
      formTitle: '',
      formBody: '',
      idCounter: 4,
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: this.idCounter,
        title: this.formTitle,
        body: this.formBody,
      }
      this.posts.push(newPost);
      this.formTitle = '';
      this.formBody = '';
      this.id += 1;
    },
    inputTitle(event) {
      this.formTitle = event.target.value;
    },
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

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

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 10px;
}
.input {
  width: 100%;
  padding: 10px 15px;
  margin-top: 15px;
  border: 1px solid teal;

}
</style>